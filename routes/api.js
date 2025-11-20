import { Router } from "express";
import database from "../mySQL/database.js";
import { isvalidSignupRequest } from "../utils/utils.js"
const router = Router();



router.route("/banners/")
  .get((req, res) => {
    database.banners(8, 2)
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/user/")
  .post((req, res) => {
    database.userInfo(req.body)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/suggest-search/")
  .post((req, res) => {
    database.suggestSearchs(req.body)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/notifications/")
  .post((req, res) => {
    database.notifications(req.body)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/search-histories/")
  .post((req, res) => {
    database.searchHistories(req.body)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/cart/")
  .post((req, res) => {
    database.cart(req.body)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/flashsale/")
  .get((req, res) => {
    database.flashSale()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/voucherBanners/")
  .get((req, res) => {
    database.voucherBanners()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/mallBanners")
  .get((req, res) => {
    database.mallBanners()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/mallPromotions")
  .get((req, res) => {
    database.mallPromotions()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/topSearches")
  .get((req, res) => {
    database.topSearches()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/todaySuggestions")
  .get((req, res) => {
    database.todaySuggestions()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/productTypes")
  .get((req, res) => {
    database.productTypes()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`error: ${error}`);
        res.status(500).send(`error: ${error}`);
      })
  });

router.route("/login")
  .post(async (req, res) => {
    console.log(req.body);
    res.status(200).end();
  })

router.route("/signup")
  .post(async (req, res, next) => {
    if (!isvalidSignupRequest(req.body)) {
      return res.status(400).send("Invalid signup data");
    }
    try {
      const data = await database.signup(req.body);
      return res.redirect(`/login.html?username=${data.username}`);
    }
    catch (error) {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          return res.status(400).send("username has been taken");
        default:
          return next(error);
      }
    }
  })


export default router;
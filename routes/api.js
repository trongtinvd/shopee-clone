import { json, Router } from "express";
import database from "../mySQL/database.js";
import { isValidLogoutRequest, isvalidSignupRequest, isValidLogin, createSessionCode, jsonResponse } from "../utils/utils.js"
import bcrypt from "bcrypt";
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
        res.status(200).json(jsonResponse(200, 'Success', 'ok', data))
      })
      .catch(error => {
        console.log(`/user => error: ${error}`);
        res.status(500).send(jsonResponse(500, 'Some error at /user', '╥﹏╥', null, { message: `error: ${error}` }));
      })
  });

router.route("/suggest-search/")
  .post((req, res) => {
    database.suggestSearchs()
      .then(data => {
        res.status(200).json(jsonResponse(200, 'Success', 'ok', data));
      })
      .catch(error => {
        console.log(`/suggest-search => error: ${error}`);
        res.status(500).send(jsonResponse(500, 'Some error at /suggest-search', '╥﹏╥', null, { message: `error: ${error}` }));
      })
  });

router.route("/notifications/")
  .post((req, res) => {
    database.notifications(req.body)
      .then(data => {
        res.status(200).json(jsonResponse(200, 'Success', 'ok', data));
      })
      .catch(error => {
        console.log(`/notifications => error: ${error}`);
        res.status(500).send(jsonResponse(500, 'Some error at /notifications', '╥﹏╥', null, { message: `error: ${error}` }));
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
  .post(async (req, res, next) => {
    if (!isValidLogin(req.body)) {
      return res.status(400).send("Invalid login data");
    }
    try {
      const data = await database.getUser(req.body);

      if (!data) {
        return jsonResponse(res, 404, 'login fail', 'user do not exists', req.body);
      }
      if (!bcrypt.compareSync(req.body.password, data.hashedPassword)) {
        return jsonResponse(res, 403, 'login fail', 'incorrect password', req.body);
      }
      const sessionCode = await createSessionCode();
      database.addUserSession({ ...req.body, sessionCode });
      res.status(200).json(jsonResponse(200, 'login success', 'ok', { cookies: { sessionCode } }));
    }
    catch (error) {
      switch (error.code) {
        default:
          return next(error);
      }
    }
  });

router.route('/logout')
  .post(async (req, res, next) => {
    if (!isValidLogoutRequest(req)) {
      return res.status(400).json(jsonResponse(400, 'Bad logout request', 'ಠ╭╮ಠ', null, req.body));
    }
    database.endUserSession(req.body)
      .then(() => {
        return res.status(200).json(jsonResponse(200, 'Logout success', '\(^∇^)'))
      })
      .catch(error => {
        console.log(`/logout error: ${JSON.stringify(error)}`);
        return res.status(500).json(jsonResponse(500, 'logout error', '(˶°ㅁ°)!!', null, error));
      })
  })

router.route("/signup")
  .post(async (req, res, next) => {
    if (!isvalidSignupRequest(req.body)) {
      return res.status(400).json(jsonResponse(400, 'bad request', 'sign up form is invalid'));
    }
    try {
      const data = await database.signup(req.body);
      return res.status(201).json(jsonResponse(201, 'sign up success', 'ok', data));
    }
    catch (error) {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          return res.status(400).json(jsonResponse(400, 'sign up fail', 'username has been taken', req.body));
        default:
          return next(error);
      }
    }
  })

export default router;
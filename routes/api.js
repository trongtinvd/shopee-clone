import { json, Router } from "express";
import database from "../mySQL/database.js";
import { createSessionCode, jsonResponse } from "../utils/utils.js"
import validator from "../utils/validator.js";
import bcrypt from "bcrypt";
const router = Router();

router.route("/banners")
  .get((req, res) => {
    database.banners(8, 2)
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/banner error: ${error}`);
        res.status(500).send(jsonResponse(500, `error when obtaining banners`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/user")
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

router.route("/suggest-search")
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

router.route("/notifications")
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

router.route("/search-histories")
  .post(async (req, res) => {
    try {
      const rows = await database.searchHistories(req.body)
      res.status(200).json(jsonResponse(200, 'Obtained the search histories', '(`꒳´)✧', rows));
    }
    catch (error) {
      console.log(`/search-histories error: ${error}`);
      res.status(500).send(jsonResponse(500, `error when obtaining search histories`, '(ó﹏ò｡)', null, error));
    }
  });

router.route("/cart")
  .post((req, res) => {
    database.cart(req.body)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        console.log(`/cart error: ${error}`);
        res.status(500).send(jsonResponse(500, `error when obtaining cart infomation`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/flashsale")
  .get((req, res) => {
    database.flashSale()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/flash-sale error: ${error}`);
        res.status(500).send(jsonResponse(500, `error when obtaining flash sales`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/voucherBanners")
  .get((req, res) => {
    database.voucherBanners()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/voucherBanners error: ${error}`);
        res.status(500).send(jsonResponse(500, `error when obtaining voucher banners`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/mallBanners")
  .get((req, res) => {
    database.mallBanners()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/mallBanners error: ${error}`);
        res.status(500).send(jsonResponse(500, `error when obtaining mall banner`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/mallPromotions")
  .get((req, res) => {
    database.mallPromotions()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/mallPromotions error: ${error}`);
        res.status(500).send(jsonResponse(500, `error`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/topSearches")
  .get((req, res) => {
    database.topSearches()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/topSearches error: ${error}`);
        res.status(500).send(jsonResponse(500, `error`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/todaySuggestions")
  .get((req, res) => {
    database.todaySuggestions()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/todaySuggestions error: ${error}`);
        res.status(500).send(jsonResponse(500, `error`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/productTypes")
  .get((req, res) => {
    database.productTypes()
      .then(data => res.status(200).json(data))
      .catch(error => {
        console.log(`/productTypes error: ${error}`);
        res.status(500).send(jsonResponse(500, `error`, '(ó﹏ò｡)', null, error));
      })
  });

router.route("/login")
  .post(async (req, res) => {
    if (!validator.isValidLogin(req.body)) {
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
      console.log(`error: ${error}`);
      res.status(500).send(jsonResponse(500, `login error`, '(ó﹏ò｡)', null, error));
    }
  });

router.route('/logout')
  .post(async (req, res) => {
    if (!validator.isValidLogoutRequest(req)) {
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
  });

router.route("/signup")
  .post(async (req, res) => {
    if (!validator.isvalidSignupRequest(req.body)) {
      return res.status(400).json(jsonResponse(400, 'bad request', 'sign up form is invalid'));
    }
    try {
      const data = await database.signup(req.body);
      return res.status(201).json(jsonResponse(201, 'sign up success', 'ok', data));
    }
    catch (error) {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          console.log(`/signup error: ${JSON.stringify(error)}`);
          return res.status(400).json(jsonResponse(400, 'sign up fail', 'username has been taken', req.body, error));
        default:
          console.log(`error: ${error}`);
          res.status(500).send(jsonResponse(500, `error when signing up`, '(ó﹏ò｡)', null, error));
      }
    }
  });

router.route('/search')
  .post(async (req, res) => {
    if (!validator.isvalidSearch(req.body)) {
      return res.status(400).json(jsonResponse(400, 'bad request', 'search is invalid'));
    }
    try {
      const isSave = await database.saveSearchHistory(req.body);
      const data = await database.searchProducts(req.body);
      return res.status(200).json(jsonResponse(200, 'Search success', 'Here is the products we found', data));
    }
    catch (error) {
      console.log(`error: ${error}`);
      res.status(500).send(jsonResponse(500, `error when searching`, '(ó﹏ò｡)', null, error));
    }
  });

router.route('/searchAd')
  .get(async (req, res,) => {
    try {
      const data = await database.searchAd();
      return res.status(200).json(jsonResponse(200, 'Success', 'Here is the ad', data));
    }
    catch (error) {
      console.log(`error: ${error}`);
      res.status(500).send(jsonResponse(500, `error when obtaining search ad`, '(ó﹏ò｡)', null, error));
    }
  });

router.route('/product/:id')
  .get(async (req, res) => {
    try {
      const data = await database.product(req.params.id);
      return res.status(200).json(jsonResponse(200, 'Success', 'Here is the product infomations', data));
    }
    catch (error) {
      console.log(`error: ${error}`);
      res.status(500).send(jsonResponse(500, `error when obtaining product infomations`, '(ó﹏ò｡)', null, error));
    }
  });

export default router;
import { Router } from "express";
import database from "../mockup/databaseMockup.js";
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

router.route("/notification/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    res.status(200).json(database.notifications(userId));
  });

router.route("/search-history/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    res.status(200).json(database.searchHistory(userId));
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

router.route("/flashsale/:year/:month/:date")
  .get((req, res) => {
    const { params: { year, month, date } } = req;
    const data = database.flashSale(year, month, date);
    res.status(200).json(data);
  });

router.route("/voucherBanner/:year/:month/:date")
  .get((req, res) => {
    const { params: { year, month, date } } = req;
    const data = database.voucherBanner(year, month, date);
    res.status(200).json(data);
  });

router.route("/shopeeMall/:year/:month/:date")
  .get((req, res) => {
    const { params: { year, month, date } } = req;
    const data = database.shopeeMall(year, month, date);
    res.status(200).json(data);
  });

router.route("/topSearched")
  .get((req, res) => {
    const data = database.topSeached();
    res.status(200).json(data);
  });

router.route("/todaySuggestions")
  .get((req, res) => {
    const data = database.todaySuggestions();
    res.status(200).json(data);
  })


export default router;
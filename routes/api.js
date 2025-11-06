const express = require("express");
const router = express.Router();
const database = require("../mockup/databaseMockup.js")



router.route("/banners/:year/:month/:day")
  .get((req, res) => {
    const { params: { year, month, day } } = req;
    console.log(`get banner at ${year}/${month}/${day}`);
    res.status(200).json(database.banners());
  });

router.route("/user/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    console.log(`get user info with id: ${userId}`);
    res.status(200).json(database.user(userId));
  });

router.route("/suggest-search/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    console.log(`get suggest search with user id: ${userId}`);
    res.status(200).json(database.suggestSearchs(userId));
  });

router.route("/notification/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    console.log(`get notification with user id: ${userId}`);
    res.status(200).json(database.notifications(userId));
  });

router.route("/search-history/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    console.log(`get search history with user id: ${userId}`);
    res.status(200).json(database.searchHistory(userId));
  });

router.route("/cart/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    console.log(`get cart info with user id: ${userId}`);
    res.status(200).json(database.cart(userId));
  });


module.exports = router;
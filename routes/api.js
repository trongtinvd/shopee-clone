import { Router } from "express";
import database from "../mockup/databaseMockup.js";
const router = Router();



router.route("/banners/:year/:month/:day")
  .get((req, res) => {
    const { params: { year, month, day } } = req;
    res.status(200).json(database.banners());
  });

router.route("/user/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    res.status(200).json(database.user(userId));
  });

router.route("/suggest-search/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    res.status(200).json(database.suggestSearchs(userId));
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

router.route("/cart/:userId")
  .get((req, res) => {
    const { params: { userId } } = req;
    res.status(200).json(database.cart(userId));
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

router.route("/topSearched/")
  .get((req, res) => {
    const data = database.topSeached();
    res.status(200).json(data);
  });


export default router;
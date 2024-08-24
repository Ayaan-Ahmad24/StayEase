const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

router.post("/request-booking", bookingController.Bookrequest);

router.post("/handle-booking", bookingController.bookingHandling);

module.exports = router;

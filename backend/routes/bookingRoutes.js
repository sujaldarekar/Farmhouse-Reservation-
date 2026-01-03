const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.get('/', auth, bookingController.getAllBookings);
router.post('/', bookingController.createBooking);
router.patch('/:id/status', auth, bookingController.updateBookingStatus);

module.exports = router;

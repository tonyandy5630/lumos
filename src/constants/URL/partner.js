const HOMEPAGE = '/homepage'
const SERVICE = '/services'
// Booking
const BOOKING = '/bookings'
const BOOKING_WORKING = BOOKING + '/working'
const BOOKING_PENDING = BOOKING + '/pending'

const BILL = '/bills'
const PROFILE = '/profile'
const HELP = '/help'

const NURSE_URL = {
    HOMEPAGE,
    SERVICE,
    BOOKING,
    BILL,
    PROFILE,
    HELP,
    WORKING_BOOKING: BOOKING_WORKING,
    PENDING_BOOKING: BOOKING_PENDING,
}

export default NURSE_URL

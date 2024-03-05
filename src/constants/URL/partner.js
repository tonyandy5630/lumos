const HOMEPAGE = '/homepage'

// Service
const SERVICE = '/services'
const ADD_SERVICE = SERVICE + '/add'

// Booking
const BOOKING = '/bookings'
const BOOKING_WORKING = BOOKING + '/working'
const BOOKING_PENDING = BOOKING + '/pending'
const BOOKING_DETAIL = (id) => BOOKING + '/detail/' + id
const BOOKING_PENDING_DETAIL = (id) => BOOKING_PENDING + '/detail/' + id
const BOOKING_WORKING_DETAIL = (id) => BOOKING_WORKING + '/detail/' + id

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
    ADD_SERVICE,
    BOOKING_DETAIL,
    BOOKING_PENDING_DETAIL,
    BOOKING_WORKING_DETAIL,
}

export default NURSE_URL

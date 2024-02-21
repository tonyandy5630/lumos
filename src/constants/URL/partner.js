const HOMEPAGE = '/partner/homepage'
const SERVICE = '/partner/services'
// Booking
const BOOKING = '/partner/bookings'
const BOOKING_WORKING = BOOKING + '/working'
const BOOKING_PENDING = BOOKING + '/pending'

const BILL = '/partner/bills'
const PROFILE = '/partner/profile'
const HELP = '/partner/help'

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

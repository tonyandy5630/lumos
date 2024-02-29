export const toPendingTableData = (data) => {
    const { bookingId, address, status, bookingDate } = data
    const formatDate = new Date(bookingDate)
    const date = formatDate.toLocaleDateString()
    const time = formatDate.toLocaleTimeString()

    return {
        bookingId,
        address,
        status,
        bookingDate: `${date} ${time}`,
    }
}

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

export default function toLocaleDate(date) {
    const formatDate = new Date(date)
    const finalDate = formatDate.toLocaleDateString('vi-VN', options)
    return finalDate
}

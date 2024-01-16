export const monthLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec',
]

const lineColors = [
    {
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132,0.3)',
    },
    {
        borderColor: 'rgb(51, 108, 251)',
        backgroundColor: 'rgba(51, 108, 251,0.3)',
    },
]

export const getDatasets = (data) =>
    data.map((item, index) => {
        return {
            data: item.data,
            borderColor: lineColors[index].borderColor,
            tension: 0.3,
            fill: true,
            backgroundColor: lineColors[index].backgroundColor,
            label: item.label,
        }
    })

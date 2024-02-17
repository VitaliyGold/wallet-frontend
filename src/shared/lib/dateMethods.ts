const getMonthAgo = (date: Date) => {
    const monthAgo = new Date(date);

    monthAgo.setMonth(monthAgo.getMonth() - 1);

    return monthAgo;
}

const formatDateToFront = (date: number) => {
    return new Date(date).toLocaleDateString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

const formatDateToDatepicker = (date: number) => {
    return new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

export {
    getMonthAgo,
    formatDateToFront,
    formatDateToDatepicker,
}
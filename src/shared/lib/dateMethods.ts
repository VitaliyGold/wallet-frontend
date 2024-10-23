const getMonthAgo = (date: Date) => {
	const monthAgo = new Date(date);

	monthAgo.setMonth(monthAgo.getMonth() - 1);

	return monthAgo;
};

const setBeginDayTime = (date: number): number => {
	const beginDayTime = new Date(date);

	return beginDayTime.setHours(0, 0, 0, 0);
}

const setEndDayTime = (date: number): number => {
	const endDayTime = new Date(date);

	return endDayTime.setHours(23, 59, 59, 999);
}

const formatDateToFront = (date: number) => {
	return new Date(date).toLocaleDateString("ru-RU", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
};

const formatDateToDatepicker = (date: number) => {
	return new Date(date).toLocaleDateString("en-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
};

export { getMonthAgo, formatDateToFront, formatDateToDatepicker, setEndDayTime, setBeginDayTime };

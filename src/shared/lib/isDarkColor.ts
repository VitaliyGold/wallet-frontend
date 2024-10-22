const isDarkColor = (color: string): boolean => {
	if (!color) {
		return false;
	}
	color = color.trim().substring(1);

	const r = parseInt(color.substring(0, 2), 16);
	const g = parseInt(color.substring(2, 4), 16);
	const b = parseInt(color.substring(4, 6), 16);

	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	return brightness < 125;
};

export { isDarkColor };

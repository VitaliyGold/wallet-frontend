const isDarkColor = (color: string): boolean => {
    if (!color) {
        return false;
    }
    color = color.trim().substring(1);
    
    var r = parseInt(color.substring(0,2),16);
    var g = parseInt(color.substring(2,4),16);
    var b = parseInt(color.substring(4,6),16);

    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 125;
};

export {
    isDarkColor,
}
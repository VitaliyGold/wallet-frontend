const getCuttingString = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
        const endOfReductionIndex = Math.ceil(maxLength/2);
        return `${string.slice(0, endOfReductionIndex)}...${string.slice((endOfReductionIndex-3) * -1)}`
    }
    return string;
}

export {
    getCuttingString,
}
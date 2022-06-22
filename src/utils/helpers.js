const cutString = (string, maxLength = 150) => {
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength - 3)}...`;
};

export { cutString };

const cutString = (string, maxLength = 150) => {
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength - 3)}...`;
};

const getElemHeight = (elem) => {
    let totalHeight = 0;
    [...elem.children].forEach((child) => (totalHeight += child.offsetHeight));
    return `${totalHeight}px`;
};

export { cutString, getElemHeight };

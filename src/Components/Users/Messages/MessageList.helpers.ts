export const dateDisplay = (date: string) => {
    const returnDate = date.split('T');
    returnDate[1] = returnDate[1].substring(0, 5);
    return returnDate;
};

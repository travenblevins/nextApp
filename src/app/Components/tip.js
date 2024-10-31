export function tipTotal(total, percent) {
    const decimal = percent / 100;
    const tip = total * decimal;
    const totalAmount = total + tip;
    return totalAmount;
}

export function tip(total, percent) {
    const decimal = percent / 100;
    return total * decimal
}
module.exports = function toReadable(number) {
    const numbersMap = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'],
    [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'],
    [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'],
    [19, 'nineteen'], [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'],
    [70, 'seventy'], [80, 'eighty'], [90, 'ninety'], [0, 'zero'], [100, 'hundred']]);
    let result = '';
    let first = Math.floor(number / 100);
    if (number === 0) {
        result = numbersMap.get(number);
    } else if (first) {
        result = numbersMap.get(first) + ' ' + numbersMap.get(100) + ' ';
    }
    let second = number >= 100 ? (number - first * 100) : number;
    if (second && numbersMap.has(second)) {
        result += numbersMap.get(second) + ' ';
    } else if(second) {
        second = Math.floor(second / 10) * 10;
        result += numbersMap.get(second) + ' ';
    }
    let third = number - first * 100 - second;
    if (third) {
        result += numbersMap.get(third);
    }
    return result.trim();
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function countEvenNumbers(array) {
    return array.filter(number => number % 2 === 0).length;
}

const evenCount = countEvenNumbers(numbers);

console.log(`Кількість парних елементів: ${evenCount}`);
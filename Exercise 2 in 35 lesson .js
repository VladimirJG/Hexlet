const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let multiply = 1; // ввести значение
    while (i <= finish) {
        multiply *= i; // ввести значение
        i += 1
    }
    return multiply;
}
console.log(multiplyNumbersFromRange(3, 5)); // 60
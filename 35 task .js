//Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

/* joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910' */


//======================Решение 35====================================

const joinNumbersFromRange = (start, finish) => {
    let result = ''
    let i = start

    while (i <= finish) {
        result = `${result}${i}`
        i = i + 1
    }
    return result
}
console.log(joinNumbersFromRange(5, 10))
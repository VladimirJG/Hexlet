//Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа.
// Если для числа нет объяснения, то возвращается null:

//getNumberExplanation(8);   // null

// Объяснения есть только для указанных ниже чисел
//getNumberExplanation(666); // 'devil number'
//getNumberExplanation(42);  // 'answer for everything'
//getNumberExplanation(7);   // 'prime number'

/* const getNumberExplanation = (number) => {
    switch (number) {
        case 666: // status === processing
            return 'devil number'
            break;
        case 42: // status === paid
            return 'answer for everything'
            break;
        case 7: // status === new
            return 'prime number'
            break;
        default: // else
            return null
    }
}
console.log(getNumberExplanation(85)) */

const getNumberExplanation = (number) => {
    switch (number) {
        case 666:
            return 'devil number';
        case 42:
            return 'answer for everything';
        case 7:
            return 'prime number';
        default:
            return null;
    }
}

console.log(getNumberExplanation(42))
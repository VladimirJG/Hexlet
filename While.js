//Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке.
//Для этого нужно идти от верхней границы к нижней.
//То есть счётчик должен быть инициализирован максимальным значением, 
//а в теле цикла его нужно уменьшать до нижней границы.

/* printNumbers(4);
4
3
2
1
finished!
 */

/* const printNumbers = (number) => {
    let i = 4

    while (i <= 4 && i > 0) {
        console.log(i)
        i = i - 1
    }
    console.log('finished!')

}
printNumbers(-6) */

// ===============Верное решение 34===============================

const printNumbers = (number) => {
    let i = number;

    while (i <= number && i > 0) {
        console.log(i);
        i = i - 1;
    }
    console.log('finished!');

}
printNumbers(6);

//======================Второй вариант (работает, на Hexlet не проверил)===============================


/* const printNumbers = (number) => {
    let i = number;

    while (i >= 1) {
        console.log(i);
        i = i - 1;
    }
    console.log('finished!');

}
printNumbers(6); */
//Реализуйте функцию с именем printMotto(), которая выведет на экран фразу Winter is coming.

//printMotto(); // => "Winter is coming"


/* const printMotto = () => {
    const text = 'Winter is coming';
    console.log(text);
}

printMotto() */

/* const saveEmail = () => {

    const email = '  VlAdImI85@MAIL.Ru    '

    const trimmedEmail = email.trim();
    const lowEmail = trimmedEmail.toLowerCase();

    console.log(lowEmail);
}

saveEmail(); */




/* const run = () => {
    return 5;
    return 10;
};

// Что будет выведено на экран?
console.log(run()); */


//Условие

//Реализуйте функцию sayHurrayThreeTimes(), которая возвращает строку 'hurray! hurray! hurray!'.
//const hurray = sayHurrayThreeTimes();
//console.log(hurray); // => hurray! hurray! hurray!

//Решение

/* const sayHurrayThreeTimes = () => {
    const sayHurrayThreeTimes = 'hurray! hurray! hurray!';
    return sayHurrayThreeTimes

}

const hurray = sayHurrayThreeTimes()

console.log(hurray)
 */

// Варивнты использования GetlastChar 13
/* const getLastChar = (str) => {
    return str[str.length - 1];
};
console.log(getLastChar('hexlet'));

const text = 'Winter is coming';
console.log(getLastChar(text)); */

// 13


/* Реализуйте функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.

Функция принимает два параметра:

Строка, которую нужно обрезать
Число символов, которые нужно оставить */



const truncate = (text, length) => {

    const index = 0;
    return (text.slice(0, length) + '...');

};

console.log(truncate('Windows', 3));
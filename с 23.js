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



/* const truncate = (text, length) => {

    const index = 0;
    return (text.slice(0, length) + '...');

};

console.log(truncate('Windows', 3)); */

//--------------------------------------------------------------------------------------------------
// Реализуйте функцию getHiddenCard(), который принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

//Верный вариант

/* const getHiddenCard = (cred, hidden = 4) => {

    return '*'.repeat(hidden) + cred.slice(12, 16)

}
console.log(getHiddenCard('1234567890123456')) */
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// Код работает, но хекслет его не принял(код ниже)

/* const getHiddenCard = (cred, hidden = '*'.repeat(4)) => {
  return (hidden + cred.slice(12, 16))

}
console.log(getHiddenCard('1234567890123456')) */

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//27
//Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:

//-------------условия выполнения
//const name = 'arya';
//console.log(capitalize(name)); // => "Arya"
//--------------------------------

//Решение

const capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);
const name = 'aria';
console.log(capitalize(name));
//-----------------------------------
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

/* const capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);
const name = 'aria';
console.log(capitalize(name)); */
//-----------------------------------

//==================================================================
//28 Реализуйте функцию isInternationalPhone(), которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

//isInternationalPhone('89602223423'); // false
//isInternationalPhone('+79602223423'); // true

//------------------Решение 28------------------
/* const isInternationalPhone = (number) => number.slice(0, 1) === '+'
console.log(isInternationalPhone('+79276644409'))
console.log(isInternationalPhone('89276644409')) */
//====================================================

//29 Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. 
//Год будет високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и 
//не кратен 100.

//------------------Решение 29-------------------

/* const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
console.log(isLeapYear(2000));
console.log(isLeapYear(2002));
console.log(isLeapYear(2010));
console.log(isLeapYear(2016));
console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
console.log(isLeapYear(2022));
console.log(isLeapYear(1900)); */

//===============================================================

// 30 Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ 
// (по порядковому номеру, а не индексу) и возвращает его наружу. 
// Если такого символа нет, то функция возвращает пустую строку.

//------------------Решение 30---------------------
/* const word = 'Tapochek';
const getLetter = (str, number) => str.charAt(number - 1);

console.log(getLetter(word, 1)); */
//============================================================================

// 31 Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает 
// его с https:// в начале.
//Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
//Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.

//Примеры вызова:

//normalizeUrl("google.com"); // "https://google.com"
//normalizeUrl("https://ai.fi"); // "https://ai.fi"


//----------------------------Решение 31-----------------------------------------

/* const normalizeUrl = (mail) => {
    let mailWithHttp;

    if (mail.startsWith('https://')) {
        mailWithHttp = mail;
    } else {
        mailWithHttp = 'https://' + mail;
    }
    return mailWithHttp;
}
console.log(normalizeUrl('google.com'));
 */

//===================================================================================
const testScore = 10;
const result = testScore < 10 ? 'bad' : 'good';
console.log(result);
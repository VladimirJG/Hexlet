// 36 Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины. 
//Она принимает на вход два аргумента (строку и длину) и возвращает подстроку, 
//начиная с первого символа:

/* const text = 'If I look back I am lost';
console.log(mySubstr(text, 1));  # => 'I'
console.log(mySubstr(text, 7));  # => 'If I lo' */
// Используйте тот же подход, что в функции для переворота строки из урока: 
// собирайте строку-результат в цикле, перебирая начальную строку до определённого момента.


const mySubstr = (str, num) => {
    let i = 0;
    let result = '';

    while (i < num) {
        result = `${result}${str[i]}`;
        i += 1;
    }
    return result;
};

const name = 'If I look back I am lost';
console.log(mySubstr(name, 6));
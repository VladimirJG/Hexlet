//Функция getHalfString() принимает строку и возвращает половину строки
// (если строка не четная, то возвращается большая часть). Добавьте недостающие части кода:



const getHalfString = (str) => {
    let result = '';
    for (let i = 0; i < str.length / 2; i += 1) {
        result += str[i];
    }
    return result;
};

console.log(getHalfString("12345")); // 123
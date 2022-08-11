const fizzBuzz = (start, end) => {
    let i = start
        //for (i = start; i <= end; i++) можно так или так
    while (i <= end) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbazz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('bazz')
        } else if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i)
        }
        i++

    }
}
fizzBuzz(5, 25)
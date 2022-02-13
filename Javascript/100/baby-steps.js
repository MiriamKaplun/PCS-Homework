const numbers = process.argv.slice(2);

const result = numbers.reduce((num, num1) => {
    return num + Number(num1);
}, 0) 

console.log(result);

const num1 = (a) => {
    return function num2(b) {
        return a + b;
    }
}
let addnum = num1(16);
console.log( addnum(7) )

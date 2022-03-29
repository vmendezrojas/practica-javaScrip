
function sumArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}   
console.log(sumArray([1, 2, 3]))
console.log(sumArray([10, 3, 10, 4]))
console.log(sumArray([-5, 100]))
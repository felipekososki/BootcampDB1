const array = [9, 4, 5, 10, 2, 90, 8, 6, 33]

console.log("Números maiores que 20:");

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 20) {
//         console.log(array[i]);
//     }
// }

// depois fazer igual o pares, criando function

const maiores20 = array.filter(number => number > 20)

console.log("Números maiores que 20:", maiores20)
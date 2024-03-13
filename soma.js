const array = [9, 4, 5, 10, 2, 90, 8, 6, 33, 20, 8, 10, 4, 7]

let soma = 0;

for (let i = 0; i < array.length; i++) {
    soma += array[i];
}

console.log(`A soma do array é`, soma);
const array = [2, 4, 3, 1, 6, 7, 9, 10, 11, 12, 50];

function impar(n) {

    return n % 2 !== 0;
}

const impares = array.filter(impar);

console.log("valores impares:", impares);
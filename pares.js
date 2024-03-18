// - Criar um arquivo que dado o array de valores [2, 4, 3, 1, 6, 7, 9], retorne quais são pares. Fazer em JavaScript
// - Alterar o arquivo README.md
// - Gerar o commit
// - Enviar para o GitHub

const array = [2, 4, 3, 1, 6, 7, 9, 10, 50, 21, 30];

const menores20 = array.filter((number) => number <= 20);

function findPar(n) {
    return n % 2 === 0;
}

const numerosPares = array.filter(findPar);

console.log(`Exibir os números pares do array [2, 4, 3, 1, 6, 7, 9, 10]`, numerosPares);
console.log("Números menores que 20:", menores20);

// - Criar um arquivo que dado o array de valores [2, 4, 3, 1, 6, 7, 9], retorne quais são pares. Fazer em JavaScript
// - Alterar o arquivo README.md
// - Gerar o commit
// - Enviar para o GitHub

const array = [2, 4, 3, 1, 6, 7, 9, 10];

function par(n) {
    return n % 2 === 0;
}

const pares = array.filter(par);

console.log("valores pares:", pares);
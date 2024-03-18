const array = [2, 3, 1, 5, 6, 4, 7, 8];

const multArray = array.reduce((acc, value) => {
    return acc * value;
}, 1);

console.log(multArray);
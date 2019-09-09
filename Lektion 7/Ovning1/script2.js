console.log('Script file in <body>');
const firstValue = prompt('Ange tal nr 1');
const secondValue = prompt('Ange tal nr 2');
const thirdValue = prompt('Ange tal nr 3');

const firstValueAsNumber = Number(firstValue);
const secondValueAsNumber = Number(secondValue);
const thirdValueAsNumber = Number(thirdValue);

const sum = firstValueAsNumber + secondValueAsNumber + thirdValueAsNumber;
console.log('Summan är: ' + sum);
alert('Summan är: ' + sum);

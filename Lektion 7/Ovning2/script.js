let value1 = prompt('Ange första värdet');
let value2 = prompt('Ange andra värdet');

value1 = Number(value1);
value2 = Number.parseInt(value2, 10);

const medium = (value1 + value2) / 2;
alert(medium);

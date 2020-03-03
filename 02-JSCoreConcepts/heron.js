// boki trójkąta
let x = 3;
let y = 4;
let z = 5;

const heron = (a, b, c, p) => Math.sqrt(p * (p - a) * (p - b) * (p - c));
// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let area = (a, b, c) => `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi: ` + heron(a, b, c, (a+b+c) / 2);

console.log( area(x, y, z) );
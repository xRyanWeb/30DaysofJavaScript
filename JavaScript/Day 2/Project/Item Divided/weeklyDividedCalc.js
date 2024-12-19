const item = (699.0).toFixed(2);
const weekly = (15.0).toFixed(2);
const days = (2.0).toFixed(2);
const hours = (3.0).toFixed(2);

let calc = Math.floor(item / (weekly * days * hours).toFixed(2));

console.log(`It will Take you ${calc} Weeks to Buy Item That is: $${item}`);

const age = 25;
const year = 1999;
const currentYear = 2024;

if (age < 18) {
  console.log("To Young to Drink");
}

if (age > 21) {
  console.log("You Can Drink");
}

if (currentYear > 2020 && year < 2000) {
  console.log("You Are Old Enough to Code");
}

let xPos = 1;

let Pos1 = 25;
let Pos2 = 1999;
let Pos3 = 2024;

for (let i = xPos; xPos <= 1; xPos += 1) {
  //   i += 1;
  console.log(`${i}: ${Pos1}`);
  console.log(`${i + 1}: ${Pos2}`);
  console.log(`${i + 2}: ${Pos3}`);
}

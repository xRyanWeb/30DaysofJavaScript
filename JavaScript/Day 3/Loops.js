let text = "";
let names;

names = ["Ryan", "James", "Luke", "Mike"];

text += names[0] + "\n";
text += names[1] + "\n";
text += names[2] + "\n";
text += names[3] + "\n";

for (let i = 0; i < names.length; i++) {
  console.log(i + " " + names[i] + "\n");
}

const myFirstHobbys = { 1: "Coding", 2: "Family", 3: "Life" };

let myHobby = "";

for (let x in myFirstHobbys) {
  console.log(x + " " + myFirstHobbys[x] + "\n");
}

const myCars = { 1: "Supra", 2: "Civic", 3: "Mustang" };

for (let x in myCars) {
  console.log(x + " " + myCars[x] + "\n");
}

let num = 2 + 9 / 2;

let i = 0;

while (i == 0) {
  console.log("Num: " + num + "\n");
  i += 1;
}

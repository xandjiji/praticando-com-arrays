const { description, func } = require("./index");

const array = [
  { name: "Pessoa 1", age: 28 },
  { name: "Pessoa 2", age: 20 },
  { name: "Pessoa 3", age: 21 },
  { name: "Pessoa 4", age: 22 },
  { name: "Pessoa 5", age: 18 },
  { name: "Pessoa 6", age: 28 },
  { name: "Pessoa 7", age: 10 },
  { name: "Pessoa 8", age: 30 },
  { name: "Pessoa 9", age: 5 },
  { name: "Pessoa 10", age: 50 },
  { name: "Pessoa 11", age: 33 },
];

test(description, () => {
  expect(func(array)).toEqual([
    "A Pessoa 1 possui 28 anos",
    "A Pessoa 2 possui 20 anos",
    "A Pessoa 3 possui 21 anos",
    "A Pessoa 4 possui 22 anos",
    "A Pessoa 5 possui 18 anos",
    "A Pessoa 6 possui 28 anos",
    "A Pessoa 7 possui 10 anos",
    "A Pessoa 8 possui 30 anos",
    "A Pessoa 9 possui 5 anos",
    "A Pessoa 10 possui 50 anos",
    "A Pessoa 11 possui 33 anos",
  ]);
});

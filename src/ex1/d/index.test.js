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

describe(description, () => {
  test("quando um nome está no array, deve retornar 'true'", () => {
    expect(func(array, "Pessoa 8")).toBeTruthy();
  });

  test("quando um nome NÃO está no array, deve retornar 'false'", () => {
    expect(func(array, "Pessoa 88")).toBeFalsy();
  });
});

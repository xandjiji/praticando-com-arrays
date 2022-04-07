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
  const assert = (minimumAge, answer) => {
    const filtered = func(array, minimumAge);
    expect(filtered).toHaveLength(answer.length);
    filtered.forEach(({ age }) => age >= minimumAge);
  };

  test("quando uma idade é negativa", () => {
    assert(-1, [
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
    ]);
  });

  test("quando uma idade é menor que todas as outras", () => {
    assert(4, [
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
    ]);
  });

  test("quando uma idade é maior que todas as outras", () => {
    assert(51, []);
  });

  test("quando algumas pessoas possuem exatamente aquela idade", () => {
    assert(28, [
      { name: "Pessoa 1", age: 28 },
      { name: "Pessoa 6", age: 28 },
      { name: "Pessoa 8", age: 30 },
      { name: "Pessoa 10", age: 50 },
      { name: "Pessoa 11", age: 33 },
    ]);
  });

  test("quando algumas pessoas são mais velhas que aquela idade", () => {
    assert(27, [
      { name: "Pessoa 1", age: 28 },
      { name: "Pessoa 6", age: 28 },
      { name: "Pessoa 8", age: 30 },
      { name: "Pessoa 10", age: 50 },
      { name: "Pessoa 11", age: 33 },
    ]);
  });

  test("quando apenas uma pessoa deveria ser filtrada", () => {
    assert(6, [
      { name: "Pessoa 1", age: 28 },
      { name: "Pessoa 2", age: 20 },
      { name: "Pessoa 3", age: 21 },
      { name: "Pessoa 4", age: 22 },
      { name: "Pessoa 5", age: 18 },
      { name: "Pessoa 6", age: 28 },
      { name: "Pessoa 7", age: 10 },
      { name: "Pessoa 8", age: 30 },
      { name: "Pessoa 10", age: 50 },
      { name: "Pessoa 11", age: 33 },
    ]);
  });
});

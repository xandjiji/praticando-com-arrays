const { description, func } = require("./index");

describe(description, () => {
  test("deverá somar números corretamente", () => {
    expect(func(10, 15)).toEqual(25);
  });

  test("deverá somar números negativos corretamente", () => {
    expect(func(3, -7)).toEqual(-4);
  });

  test("deverá somar números decimais corretamente", () => {
    expect(func(0.33, 0.66)).toEqual(0.99);
  });
});

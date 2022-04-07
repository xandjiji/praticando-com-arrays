const { description, func } = require("./index");

describe(description, () => {
  test("quando o array é vazio", () => {
    expect(func([], [])).toEqual([]);
  });

  test("quando o array só possui elementos repetidos", () => {
    expect(func([2, 4, 6, 8, 10, 11, 2, 4, 6, 8, 10, 11], [])).toEqual([]);
  });

  test('2 não deveria ser igual a "2"', () => {
    const result = func([2, "2"]);
    const expectedResult = [2, "2"];

    expect(result).toHaveLength(expectedResult.length);
    expectedResult.forEach((number) => expect(result).toContain(number));
  });

  test("quando há elementos repetidos", () => {
    const result = func([1, 2, 2, 3, 4, 5, 6, 3, 7, 8, 5, 9, 10]);
    const expectedResult = [1, 4, 6, 7, 8, 9, 10];

    expect(result).toHaveLength(expectedResult.length);
    expectedResult.forEach((number) => expect(result).toContain(number));
  });
});

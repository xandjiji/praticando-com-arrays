const { description, func } = require("./index");

describe(description, () => {
  test("quando ambos os arrays são vazios", () => {
    expect(func([], [])).toEqual([]);
  });

  test("quando um dos arrays é vazios", () => {
    expect(func([2, 4, 6, 8, 10, 11], [])).toEqual([]);
  });

  test("quando não há elementos em comum", () => {
    expect(func([2, 4, 6, 8, 10, 11], [1, 3, 7])).toEqual([]);
  });

  test('2 não deveria ser igual a "2"', () => {
    expect(func([2], ["2"])).toEqual([]);
  });

  test("quando há elementos em comum", () => {
    const result = func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 11]);
    const expectedResult = [2, 4, 6, 8, 10];

    expect(result).toHaveLength(expectedResult.length);
    expectedResult.forEach((number) => expect(result).toContain(number));
  });
});

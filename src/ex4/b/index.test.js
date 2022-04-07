const { description, func } = require("./index");

const restaurants = [
  {
    name: "Subway",
    isSuper: true,
    monthlyIncome: 100250,
    state: "RN",
  },
  {
    name: "Comidinhas do seu zé",
    isSuper: false,
    monthlyIncome: 2340,
    state: "RN",
  },
  {
    name: "KFC",
    isSuper: true,
    monthlyIncome: 55000,
    state: "SP",
  },
  {
    name: "Burger King",
    isSuper: true,
    monthlyIncome: 300798,
    state: "RN",
  },
  {
    name: "Acarajé do Gerson",
    isSuper: false,
    monthlyIncome: 1000,
    state: "SP",
  },
  {
    name: "Sorveteria da Aldeise",
    isSuper: false,
    monthlyIncome: 200,
    state: "RN",
  },
  {
    name: "Calzoon",
    isSuper: true,
    monthlyIncome: 34800,
    state: "SP",
  },
  {
    name: "Pizzaria Reis Magos",
    isSuper: true,
    monthlyIncome: 20000,
    state: "SP",
  },
  {
    name: "Carole Crema",
    isSuper: true,
    monthlyIncome: 15000,
    state: "RN",
  },
  {
    name: "Outback",
    isSuper: true,
    monthlyIncome: 200000,
    state: "SP",
  },
];

describe(description, () => {
  test("quando o array é vazio", () => {
    expect(func([])).toEqual([]);
  });

  test("quando é uma lista normal", () => {
    expect(func(restaurants)).toEqual([
      {
        name: "Acarajé do Gerson",
        isSuper: false,
        monthlyIncome: 1000,
        state: "SP",
      },
      {
        name: "Burger King",
        isSuper: true,
        monthlyIncome: 300798,
        state: "RN",
      },
      {
        name: "Calzoon",
        isSuper: true,
        monthlyIncome: 34800,
        state: "SP",
      },
      {
        name: "Carole Crema",
        isSuper: true,
        monthlyIncome: 15000,
        state: "RN",
      },
      {
        name: "Comidinhas do seu zé",
        isSuper: false,
        monthlyIncome: 2340,
        state: "RN",
      },
      {
        name: "KFC",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
      {
        name: "Pizzaria Reis Magos",
        isSuper: true,
        monthlyIncome: 20000,
        state: "SP",
      },
      {
        name: "Sorveteria da Aldeise",
        isSuper: false,
        monthlyIncome: 200,
        state: "RN",
      },
      {
        name: "Subway",
        isSuper: true,
        monthlyIncome: 100250,
        state: "RN",
      },
    ]);
  });

  test("a ordenação deverá ser `case insensitive`", () => {
    expect(
      func([
        {
          name: "Outback",
          isSuper: true,
          monthlyIncome: 200000,
          state: "SP",
        },
        {
          name: "kfc",
          isSuper: true,
          monthlyIncome: 55000,
          state: "SP",
        },
      ])
    ).toEqual([
      {
        name: "kfc",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
    ]);

    expect(
      func([
        {
          name: "Outback",
          isSuper: true,
          monthlyIncome: 200000,
          state: "SP",
        },
        {
          name: "outbacc",
          isSuper: true,
          monthlyIncome: 55000,
          state: "SP",
        },
      ])
    ).toEqual([
      {
        name: "outbacc",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
    ]);
  });
});

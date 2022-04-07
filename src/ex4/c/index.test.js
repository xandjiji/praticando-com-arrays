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
        monthlyIncome: 3500,
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
    ]);
  });

  test("caso exista mais exista mais de uma `Sorveteria da Aldeise`", () => {
    expect(
      func([
        ...restaurants,
        {
          name: "Sorveteria da Aldeise",
          isSuper: false,
          monthlyIncome: 900,
          state: "RN",
        },
      ])
    ).toEqual([
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
        monthlyIncome: 3500,
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
      {
        name: "Sorveteria da Aldeise",
        isSuper: false,
        monthlyIncome: 3500,
        state: "RN",
      },
    ]);
  });

  test("caso não exista nenhuma `Sorveteria da Aldeise`", () => {
    const filtered = restaurants.filter(
      ({ name }) => name !== "Sorveteria da Aldeise"
    );
    expect(func(filtered)).toEqual(filtered);
  });
});

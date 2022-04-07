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
    expect(func([])).toEqual(0);
  });

  test("quando não existam restaurantes de SP", () => {
    expect(func(restaurants.filter(({ state }) => state !== "SP"))).toEqual(0);
  });

  test("quando não existam restaurantes Super", () => {
    expect(func(restaurants.filter(({ isSuper }) => !isSuper))).toEqual(0);
  });

  test("quando é uma lista normal", () => {
    expect(func(restaurants)).toEqual(309800);
  });
});

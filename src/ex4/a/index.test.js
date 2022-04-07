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

  test("quando não há restaurantes de SP", () => {
    expect(
      func([
        {
          name: "Carole Crema",
          isSuper: true,
          monthlyIncome: 15000,
          state: "RN",
        },
        {
          name: "Burger King",
          isSuper: true,
          monthlyIncome: 300798,
          state: "RN",
        },
      ])
    ).toEqual([]);
  });

  test("deverá retornar a lista corretamente", () => {
    expect(func(restaurants)).toEqual([
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
      {
        name: "KFC",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Calzoon",
        isSuper: true,
        monthlyIncome: 34800,
        state: "SP",
      },
    ]);
  });

  test("mesmo que tenha menos de 3 restaurantes em SP", () => {
    expect(
      func([
        {
          name: "Burger King",
          isSuper: true,
          monthlyIncome: 300798,
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
      ])
    ).toEqual([
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
      {
        name: "KFC",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
    ]);
  });

  test("mesmo que exista empate na renda mensal, a lista deverá conter apenas 3 restaurantes", () => {
    const arr = [
      {
        name: "Outback",
        isSuper: true,
        monthlyIncome: 200000,
        state: "SP",
      },
      {
        name: "KFC",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Saboroso Lanches",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
      {
        name: "Açaí do Pombo",
        isSuper: true,
        monthlyIncome: 55000,
        state: "SP",
      },
    ];
    const result = func(arr);

    const [first, ...tied] = arr;
    const tiedNames = new Set(tied.map(({ name }) => name));

    expect(result).toHaveLength(3);
    expect(result.find(({ name }) => name === first.name)).toBeTruthy();
    expect(result.filter(({ name }) => tiedNames.has(name))).toHaveLength(2);
  });
});

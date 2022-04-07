# Introdução

Neste projeto, você irá praticar manipulações com **Arrays**!

Dentro da pasta `/src` existem vários exercícios, utilizando a seguinte anatomia de diretórios:

```
├── exercicio-1
│   ├── a
│   │   ├── index.js
│   │   └── index.test.js
│   └── b
│       ├── index.js
│       └── index.test.js
└── exercicio-2
    ├── index.js
    └── index.test.js

```

Você deverá trabalhar apenas em cima dos arquivos `index.js`. Dentro de cada um desses arquivos haverá a seguinte estrutura:

```js
/*
    exemplo: func(3, -7) deverá retornar '-4'
*/

const description =
  "Escreva uma função que receba dois números e retorne a soma deles";

const func = (numberA, numberB) => {

};

module.exports = { description, func };
```

Basta programar dentro da função `func()` uma lógica que cumpra os requisitos do enunciado. A solução do exemplo seria:

```js
/*
    exemplo: func(3, -7) deverá retornar '-4'
*/

const description =
  "Escreva uma função que receba dois números e retorne a soma deles";

const func = (numberA, numberB) => {
  return numberA + numberB
};

module.exports = { description, func };
```

A função `func()` sempre deverá **receber parâmetros** de entrada **retornar** o resultado esperado como saída ⚠️

---

Além de exercitar manipulações com arrays, você também estará indiretamente tendo um contato com:
- Programação orientada a testes
- Programação funcional
- Funções puras
- Uma rotina de desenvolvimento com git

Porém, não se preocupe com nada disso enquanto estiver fazendo os exercícios. Apenas foque em atingir uma solução para cada problema proposto. Quando o seu buddy revisar suas soluções, ele provavelmente abordará alguns desses temas com você 😄

# Instalando o projeto

Primeiro, clone este repositório usando:
```
git clone git@github.com:xandjiji/praticando-com-arrays.git
```

e depois é só instalar as dependências usando um gerenciador de pacotes (usando `npm install` ou `yarn`)

# Instruções

Crie uma branch para você usando:
```
git checkout -b <nome da branch>
```

Depois suba ela para esse repositório usando:
```
git push --set-upstream origin <nome da branch>
```

Agora você pode subir as suas modificações a vontade! Para começar a fazer os exercícios, use o comando `yarn test` ou `npm run test` para que a sua solução seja testada enquanto você programa 🔄

Ao resolver um exercício (lembre-se de que ele deverá passar em todos os testes!), basta adicionar a solução:
```
git add .
```

e depois commitar:

```
git commit -m "<mensagem de commit>"
```

Agora você já pode ir pro próximo exercício! Quando tiver encerrado, basta subir os seus commits para o repositório usando:

```
git push
```

Fique a vontade para pedir ajuda e tirar dúvidas com outras pessoas sempre que precisar 😄
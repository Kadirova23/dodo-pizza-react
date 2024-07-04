import { Pizza, AddonInterface } from "@/interfaces";

export const pizzas: Pizza[] = [
  // {
  //   id: "1",
  //   title: "Сырная",
  //   coverImageLink:
  //     "https://media.dodostatic.net/image/r:584x584/11EE8974C91F2ED3AA9A78498AE85662.avif",
  //   diameter: {
  //     small: 25,
  //     medium: 30,
  //     large: 35,
  //   },
  //   ingredients: [
  //     { id: "1", title: "Томатный соус" },
  //     { id: "2", title: "Моцарелла" },
  //   ],
  //   addons: ["1", "2", "3", "4", "5", "6"],
  //   weight: {
  //     unit: "г",
  //     size: {
  //       small: 410,
  //       medium: 620,
  //       large: 850,
  //     },
  //   },
  //   nutritions: [
  //     {
  //       title: "Белки",
  //       unit: "г",
  //       size: {
  //         small: 10.6,
  //         medium: 10.8,
  //         large: 10.9,
  //       },
  //     },
  //     {
  //       title: "Жиры",
  //       unit: "г",
  //       size: {
  //         small: 7.3,
  //         medium: 7.1,
  //         large: 6.6,
  //       },
  //     },
  //     {
  //       title: "Углеводы",
  //       unit: "г",
  //       size: {
  //         small: 28.6,
  //         medium: 2.7,
  //         large: 27,
  //       },
  //     },
  //   ],
  //   // calories:[
  //   //   {}

  //   // ],

  //   images: [
  //     {
  //       // маленькая традиционное
  //       id: "1",
  //       imageUrl:
  //         "https://media.dodostatic.net/image/r:584x584/11EE8974C66BDDABB6C0CBEC7DB04EF5.avif",
  //     },
  //     {
  //       // средняя традиционное
  //       id: "2",
  //       imageUrl:
  //         "https://media.dodostatic.net/image/r:760x760/11EE8974C91F2ED3AA9A78498AE85662.avif",
  //     },
  //     {
  //       // большая традиционное
  //       id: "3",
  //       imageUrl:
  //         "https://media.dodostatic.net/image/r:584x584/11EE8974CC97C974A17A33CADB70AE16.avif",
  //     },
  //     {
  //       // средняя тонкое
  //       id: "4",
  //       imageUrl:
  //         "https://media.dodostatic.net/image/r:584x584/11EE8974CAD58853A78935F1C7C6DD63.avif",
  //     },
  //     {
  //       // большая тонкое
  //       id: "5",
  //       imageUrl:
  //         "https://media.dodostatic.net/image/r:760x760/11EE8974CE2A2BA79643DDE1944EBBF3.avif",
  //     },
  //   ],
  //   price: {
  //     small: 57,
  //     medium: 82,
  //     large: 110,
  //   },
  // },
  {
    id: "2",
    title: "Сырная",
    coverImageLink:
      "https://media.dodostatic.net/image/r:584x584/11EE8974C91F2ED3AA9A78498AE85662.avif",
    diameter: {
      small: 25,
      medium: 30,
      large: 35,
    },
    ingredients: [
      { id: "1", title: "Томатный соус" },
      { id: "2", title: "Моцарелла" },
      // { id: "2", title: "Моцарелла" },
      // { id: "2", title: "Моцарелла" },
      // { id: "2", title: "Моцарелла" },
      // { id: "2", title: "Моцарелла" },
      // { id: "2", title: "Моцарелла" },
    ],
    addons: ["1", "2", "3", "4", "5", "6"],
    weight: {
      unit: "г",
      doughType: {
        traditional: {
          size: {
            small: 310,
            medium: 470,
            large: 640,
          },
        },
        thin: {
          size: {
            medium: 360,
            large: 530,
          },
        },
      },
    },
    nutritions: [
      {
        title: "Белки",
        unit: "г",
        doughType: {
          traditional: {
            size: {
              small: 10.6,
              medium: 10.8,
              large: 10.9,
            },
          },
          thin: {
            size: {
              medium: 11.8,
              large: 11.7,
            },
          },
        },
      },
      {
        title: "Жиры",
        unit: "г",
        doughType: {
          traditional: {
            size: {
              small: 7.3,
              medium: 7.1,
              large: 6.6,
            },
          },
          thin: {
            size: {
              medium: 7.9,
              large: 7.2,
            },
          },
        },
      },
      {
        title: "Углеводы",
        unit: "г",
        doughType: {
          traditional: {
            size: {
              small: 28.6,
              medium: 2.7,
              large: 27,
            },
          },
          thin: {
            size: {
              medium: 23.4,
              large: 23.9,
            },
          },
        },
      },
    ],

    images: [
      {
        // маленькая традиционное
        id: "1",
        imageUrl:
          "https://media.dodostatic.net/image/r:584x584/11EE8974C66BDDABB6C0CBEC7DB04EF5.avif",
      },
      {
        // средняя традиционное
        id: "2",
        imageUrl:
          "https://media.dodostatic.net/image/r:760x760/11EE8974C91F2ED3AA9A78498AE85662.avif",
      },
      {
        // большая традиционное
        id: "3",
        imageUrl:
          "https://media.dodostatic.net/image/r:584x584/11EE8974CC97C974A17A33CADB70AE16.avif",
      },
      {
        // средняя тонкое
        id: "4",
        imageUrl:
          "https://media.dodostatic.net/image/r:584x584/11EE8974CAD58853A78935F1C7C6DD63.avif",
      },
      {
        // большая тонкое
        id: "5",
        imageUrl:
          "https://media.dodostatic.net/image/r:760x760/11EE8974CE2A2BA79643DDE1944EBBF3.avif",
      },
    ],
    price: {
      small: 57,
      medium: 82,
      large: 110,
    },
  },
];

export const addons: AddonInterface[] = [
  {
    id: "1",
    title: "Сливочная моцарелла",
    price: {
      small: 12,
      medium: 18,
      large: 23,
    },
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611EA0840DB86284E",
  },
  {
    id: "2",
    title: "Острый перец халапеньо",
    price: {
      small: 3,
      medium: 5,
      large: 10,
    },
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA",
  },
  {
    id: "3",
    title: "Сыр чеддер и пармезан",
    price: {
      small: 6,
      medium: 9,
      large: 12,
    },
    image:
      "	https://cdn.dodostatic.net/static/Img/Ingredients/39f9871ade1c4c3ba39b62ae14825404.png",
  },
  {
    id: "4",
    title: "Кубики брынзы",
    price: {
      small: 4,
      medium: 7,
      large: 10,
    },
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9",
  },
  {
    id: "5",
    title: "Нежный цыпленок",
    price: {
      small: 6,
      medium: 8,
      large: 12,
    },
    image:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13",
  },
  {
    id: "6",
    title: "Куриные кусочки",
    price: {
      small: 17,
      medium: 23,
      large: 28,
    },
    image:
      "	https://cdn.dodostatic.net/static/Img/Ingredients/11eea53dcdc11325a8a0129e4f4fba08.png",
  },
];

export default pizzas;

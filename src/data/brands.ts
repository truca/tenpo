export interface Brand {
  logo: any,
  name: string,
  stars: number,
  discount?: number
  deliveryTime: {
    min: number,
    max: number,
  },
}

const BRANDS: Brand[] = [{
  logo: require('../assets/images/mcdonalds.png'),
  name: 'Mcdonalds',
  stars: 3.5,
  discount: 50,
  deliveryTime: {
    min: 10,
    max: 50,
  },
}, {
  logo: require('../assets/images/melt.png'),
  name: 'MELT pizzas',
  stars: 4.5,
  discount: 30,
  deliveryTime: {
    min: 10,
    max: 60,
  },
}, {
  logo: require('../assets/images/yokono.png'),
  name: 'YOKONO',
  stars: 3.5,
  discount: 20,
  deliveryTime: {
    min: 10,
    max: 50,
  },
}, {
  logo: require('../assets/images/papajohns.png'),
  name: "Papa John's",
  stars: 4.5,
  deliveryTime: {
    min: 20,
    max: 70,
  },
}];

export default BRANDS;

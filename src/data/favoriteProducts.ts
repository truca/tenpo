export interface FavoriteProduct {
  brandLogo: any,
  image: any,
  name: string,
  brand: string,
  stars: number,
  deliveryTime: {
    min: number,
    max: number,
  },
}

const FAVORITE_PRODUCTS: FavoriteProduct[] = [{
  brandLogo: require('../assets/images/mcdonalds.png'),
  image: require('../assets/images/bigmac.png'),
  name: 'Combo hamburguesa Bigmac',
  brand: 'Mcdonalds',
  stars: 3.5,
  deliveryTime: {
    min: 10,
    max: 50,
  },
}, {
  brandLogo: require('../assets/images/papajohns.png'),
  image: require('../assets/images/pizza_papajohns.png'),
  name: 'Pizza Mediana 3 Ingredientes',
  brand: 'MELT pizzas',
  stars: 4.5,
  deliveryTime: {
    min: 10,
    max: 60,
  },
}];

export default FAVORITE_PRODUCTS;

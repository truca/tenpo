export interface Category {
  image: any,
  name: string,
}

const CATEGORIES: Category[] = [{
  image: require('../assets/images/hamburger.png'),
  name: 'hamburguesas',
}, {
  image: require('../assets/images/italian.png'),
  name: 'italiana',
}, {
  image: require('../assets/images/pizza.png'),
  name: 'pizza',
}];

export default CATEGORIES;

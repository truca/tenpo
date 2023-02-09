export interface Store {
  id: number,
  logo: any,
  name: string,
  address: string,
  isOpen: boolean,
  distance: number,
}

export const STORES: Store[] = [{
  id: 1,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt Bilbao',
  address: 'Av. Francisco Bilbao 3975, La Reina',
  isOpen: true,
  distance: 1,
},
{
  id: 2,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt pajaritos',
  address: 'Melt Pajaritos Americo Vespucio 51 - Local 128, Pajaritos, Maipú',
  isOpen: false,
  distance: 1,
},
{
  id: 3,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt Barrio Brasil',
  address: 'Compañía de Jesús 1909, Santiago',
  isOpen: false,
  distance: 3,
},
{
  id: 4,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt El Bosque',
  address: 'Callao 2912, Las Condes',
  isOpen: true,
  distance: 5,
}];

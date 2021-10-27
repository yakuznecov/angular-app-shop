export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Большой телефон с одним из лучших экранов',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Великолепный телефон с одной из лучших камер',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

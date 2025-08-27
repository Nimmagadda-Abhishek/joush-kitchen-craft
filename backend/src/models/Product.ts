export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  currency: string;
  image?: string;
}

export const SAMPLE_PRODUCTS: Product[] = [
  { id: 'p1', slug: 'authentic-snacks', title: 'Authentic Snacks', price: 599, currency: 'INR', image: '/images/authentic-snacks.jpg' },
  { id: 'p2', slug: 'south-indian-snacks', title: 'South Indian Snacks', price: 499, currency: 'INR', image: '/images/south-indian-snacks.jpg' },
];
export interface Order {
  id: string;
  uid: string;
  items: { id: string; productId: string; variantId?: string; quantity: number }[];
  amount: number;
  currency: string;
  paymentIntentId: string;
  address: any;
  status: 'paid' | 'pending' | 'failed';
  createdAt: number;
}
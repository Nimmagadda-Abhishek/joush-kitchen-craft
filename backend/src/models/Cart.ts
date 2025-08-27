export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
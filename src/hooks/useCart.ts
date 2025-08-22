import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant: string;
  quantity: number;
  category: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, variant: string) => void;
  updateQuantity: (id: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (newItem) => set((state) => {
        const existingItem = state.items.find(
          item => item.id === newItem.id && item.variant === newItem.variant
        );
        
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === newItem.id && item.variant === newItem.variant
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        
        return {
          items: [...state.items, { ...newItem, quantity: 1 }]
        };
      }),
      
      removeItem: (id, variant) => set((state) => ({
        items: state.items.filter(item => !(item.id === id && item.variant === variant))
      })),
      
      updateQuantity: (id, variant, quantity) => set((state) => ({
        items: quantity <= 0 
          ? state.items.filter(item => !(item.id === id && item.variant === variant))
          : state.items.map(item =>
              item.id === id && item.variant === variant
                ? { ...item, quantity }
                : item
            )
      })),
      
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      getTotal: () => {
        const items = get().items;
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getItemCount: () => {
        const items = get().items;
        return items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'joush-foods-cart',
    }
  )
);
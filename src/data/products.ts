import { Product } from "@/components/ProductCard";
import southIndianSnacks from "@/assets/south-indian-snacks.jpg";
import authenticSnacks from "@/assets/authentic-snacks.jpg";
import pickles from "@/assets/pickles.jpg";
import sweets from "@/assets/sweets.jpg";
import dryFruits from "@/assets/dry-fruits.jpg";

export const products: Product[] = [
  // South Indian Snacks
  {
    id: "murukku-classic",
    name: "Traditional Rice Murukku",
    category: "South Indian Snacks",
    price: 180,
    originalPrice: 220,
    image: southIndianSnacks,
    rating: 4.5,
    reviewCount: 234,
    badges: ["BESTSELLER"],
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 180, originalPrice: 220 },
      { id: "400g", label: "400g", price: 320, originalPrice: 380 },
      { id: "1kg", label: "1kg", price: 750, originalPrice: 900 }
    ]
  },
  {
    id: "banana-chips",
    name: "Kerala Banana Chips",
    category: "South Indian Snacks",
    price: 150,
    originalPrice: 190,
    image: southIndianSnacks,
    rating: 4.7,
    reviewCount: 189,
    badges: ["NEW"],
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 150, originalPrice: 190 },
      { id: "500g", label: "500g", price: 350, originalPrice: 420 }
    ]
  },
  {
    id: "mixture-deluxe",
    name: "South Indian Mixture Deluxe",
    category: "South Indian Snacks",
    price: 200,
    originalPrice: 250,
    image: southIndianSnacks,
    rating: 4.3,
    reviewCount: 167,
    badges: ["SPICY"],
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 200, originalPrice: 250 },
      { id: "500g", label: "500g", price: 380, originalPrice: 450 }
    ]
  },
  {
    id: "thattai-crispy",
    name: "Crispy Rice Thattai",
    category: "South Indian Snacks",
    price: 170,
    image: southIndianSnacks,
    rating: 4.4,
    reviewCount: 145,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 170 },
      { id: "400g", label: "400g", price: 320 }
    ]
  },

  // Authentic Snacks
  {
    id: "bhujia-classic",
    name: "Classic Aloo Bhujia",
    category: "Authentic Snacks",
    price: 160,
    originalPrice: 200,
    image: authenticSnacks,
    rating: 4.6,
    reviewCount: 298,
    badges: ["BESTSELLER"],
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 160, originalPrice: 200 },
      { id: "400g", label: "400g", price: 300, originalPrice: 360 },
      { id: "1kg", label: "1kg", price: 720, originalPrice: 850 }
    ]
  },
  {
    id: "sev-bombay",
    name: "Bombay Thick Sev",
    category: "Authentic Snacks",
    price: 140,
    image: authenticSnacks,
    rating: 4.2,
    reviewCount: 134,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 140 },
      { id: "500g", label: "500g", price: 330 }
    ]
  },
  {
    id: "namkeen-mix",
    name: "Special Namkeen Mix",
    category: "Authentic Snacks",
    price: 180,
    originalPrice: 220,
    image: authenticSnacks,
    rating: 4.5,
    reviewCount: 176,
    badges: ["NEW"],
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 180, originalPrice: 220 },
      { id: "500g", label: "500g", price: 340, originalPrice: 400 }
    ]
  },

  // Pickles
  {
    id: "mango-pickle",
    name: "Authentic Mango Pickle",
    category: "Pickles",
    price: 250,
    originalPrice: 300,
    image: pickles,
    rating: 4.8,
    reviewCount: 456,
    badges: ["BESTSELLER", "SPICY"],
    spiceLevel: 3,
    variants: [
      { id: "200g", label: "200g", price: 250, originalPrice: 300 },
      { id: "400g", label: "400g", price: 450, originalPrice: 520 }
    ]
  },
  {
    id: "lemon-pickle",
    name: "Tangy Lemon Pickle",
    category: "Pickles",
    price: 220,
    image: pickles,
    rating: 4.6,
    reviewCount: 234,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 220 },
      { id: "400g", label: "400g", price: 420 }
    ]
  },
  {
    id: "gongura-pickle",
    name: "Andhra Gongura Pickle",
    category: "Pickles",
    price: 280,
    originalPrice: 340,
    image: pickles,
    rating: 4.7,
    reviewCount: 189,
    badges: ["SPICY"],
    spiceLevel: 3,
    variants: [
      { id: "200g", label: "200g", price: 280, originalPrice: 340 },
      { id: "400g", label: "400g", price: 520, originalPrice: 600 }
    ]
  },

  // Sweets
  {
    id: "mysore-pak",
    name: "Traditional Mysore Pak",
    category: "Sweets",
    price: 320,
    originalPrice: 380,
    image: sweets,
    rating: 4.9,
    reviewCount: 567,
    badges: ["BESTSELLER"],
    variants: [
      { id: "250g", label: "250g", price: 320, originalPrice: 380 },
      { id: "500g", label: "500g", price: 600, originalPrice: 720 },
      { id: "1kg", label: "1kg", price: 1150, originalPrice: 1350 }
    ]
  },
  {
    id: "kaju-katli",
    name: "Premium Kaju Katli",
    category: "Sweets",
    price: 450,
    originalPrice: 520,
    image: sweets,
    rating: 4.8,
    reviewCount: 234,
    badges: ["NEW"],
    variants: [
      { id: "250g", label: "250g", price: 450, originalPrice: 520 },
      { id: "500g", label: "500g", price: 850, originalPrice: 980 }
    ]
  },
  {
    id: "besan-ladoo",
    name: "Homestyle Besan Ladoo",
    category: "Sweets",
    price: 280,
    image: sweets,
    rating: 4.5,
    reviewCount: 145,
    variants: [
      { id: "250g", label: "250g", price: 280 },
      { id: "500g", label: "500g", price: 520 },
      { id: "1kg", label: "1kg", price: 980 }
    ]
  },

  // Dry Fruits
  {
    id: "cashews-premium",
    name: "Premium Cashews W240",
    category: "Dry Fruits",
    price: 680,
    originalPrice: 750,
    image: dryFruits,
    rating: 4.7,
    reviewCount: 345,
    badges: ["BESTSELLER"],
    variants: [
      { id: "250g", label: "250g", price: 680, originalPrice: 750 },
      { id: "500g", label: "500g", price: 1280, originalPrice: 1420 },
      { id: "1kg", label: "1kg", price: 2450, originalPrice: 2700 }
    ]
  },
  {
    id: "almonds-california",
    name: "California Almonds",
    category: "Dry Fruits",
    price: 780,
    originalPrice: 850,
    image: dryFruits,
    rating: 4.6,
    reviewCount: 234,
    variants: [
      { id: "250g", label: "250g", price: 780, originalPrice: 850 },
      { id: "500g", label: "500g", price: 1480, originalPrice: 1620 },
      { id: "1kg", label: "1kg", price: 2850, originalPrice: 3100 }
    ]
  },
  {
    id: "pistachios-premium",
    name: "Premium Pistachios",
    category: "Dry Fruits",
    price: 1200,
    originalPrice: 1350,
    image: dryFruits,
    rating: 4.8,
    reviewCount: 167,
    badges: ["NEW"],
    variants: [
      { id: "250g", label: "250g", price: 1200, originalPrice: 1350 },
      { id: "500g", label: "500g", price: 2250, originalPrice: 2520 }
    ]
  }
];

export const featuredProducts = products.filter(p => p.badges?.includes("BESTSELLER")).slice(0, 6);
export const newProducts = products.filter(p => p.badges?.includes("NEW")).slice(0, 4);
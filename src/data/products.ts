import { Product } from "@/components/ProductCard";
import southIndianSnacks from "@/assets/south-indian-snacks.jpg";
import authenticSnacks from "@/assets/authentic-snacks.jpg";
import pickles from "@/assets/pickles.jpg";
import sweets from "@/assets/sweets.jpg";
import dryFruits from "@/assets/dry-fruits.jpg";

// Note: New products use "/placeholder.svg" for images. Replace with your actual image paths when available.
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
      { id: "250g", label: "250g", price: 180, originalPrice: 220 },
      { id: "500g", label: "500g", price: 320, originalPrice: 380 },
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
      { id: "250g", label: "250g", price: 150, originalPrice: 190 },
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
      { id: "200g", label: "250g", price: 170 },
      { id: "400g", label: "400g", price: 320 }
    ]
  },
  // Added: South Indian Snacks (8 new)
  {
    id: "ragi-murukku",
    name: "Ragi Murukku",
    category: "South Indian Snacks",
    price: 190,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 112,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 190 },
      { id: "400g", label: "400g", price: 340 }
    ]
  },
  {
    id: "kara-sev-spicy",
    name: "Spicy Kara Sev",
    category: "South Indian Snacks",
    price: 180,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 128,
    spiceLevel: 3,
    variants: [
      { id: "200g", label: "200g", price: 180 },
      { id: "400g", label: "400g", price: 330 }
    ]
  },
  {
    id: "butter-murukku",
    name: "Butter Murukku",
    category: "South Indian Snacks",
    price: 160,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 96,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 160 },
      { id: "400g", label: "400g", price: 300 }
    ]
  },
  {
    id: "pakoda-mix",
    name: "Pakkoda Mix",
    category: "South Indian Snacks",
    price: 200,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 154,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 370 }
    ]
  },
  {
    id: "ribbon-pakoda",
    name: "Ribbon Pakoda",
    category: "South Indian Snacks",
    price: 170,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 141,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 170 },
      { id: "400g", label: "400g", price: 320 }
    ]
  },
  {
    id: "thenkuzhal-murukku",
    name: "Thenkuzhal Murukku",
    category: "South Indian Snacks",
    price: 190,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 178,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 190 },
      { id: "400g", label: "400g", price: 340 }
    ]
  },
  {
    id: "masala-thattai",
    name: "Masala Thattai",
    category: "South Indian Snacks",
    price: 185,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 102,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 185 },
      { id: "400g", label: "400g", price: 330 }
    ]
  },
  {
    id: "mini-murukku-bites",
    name: "Mini Murukku Bites",
    category: "South Indian Snacks",
    price: 160,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 88,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 160 },
      { id: "400g", label: "400g", price: 300 }
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
  // Added: Authentic Snacks (8 new)
  {
    id: "masala-peanuts",
    name: "Masala Peanuts",
    category: "Authentic Snacks",
    price: 160,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 210,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 160 },
      { id: "500g", label: "500g", price: 320 }
    ]
  },
  {
    id: "chana-jor-garam",
    name: "Chana Jor Garam",
    category: "Authentic Snacks",
    price: 150,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 140,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 150 },
      { id: "500g", label: "500g", price: 300 }
    ]
  },
  {
    id: "moong-dal-namkeen",
    name: "Moong Dal Namkeen",
    category: "Authentic Snacks",
    price: 140,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 175,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 140 },
      { id: "500g", label: "500g", price: 280 }
    ]
  },
  {
    id: "khara-boondi",
    name: "Khara Boondi",
    category: "Authentic Snacks",
    price: 130,
    image: "/placeholder.svg",
    rating: 4.1,
    reviewCount: 102,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 130 },
      { id: "500g", label: "500g", price: 260 }
    ]
  },
  {
    id: "farali-chevda",
    name: "Farali Chevda",
    category: "Authentic Snacks",
    price: 170,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 88,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 170 },
      { id: "500g", label: "500g", price: 320 }
    ]
  },
  {
    id: "papdi-namkeen",
    name: "Papdi",
    category: "Authentic Snacks",
    price: 160,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 91,
    spiceLevel: 1,
    variants: [
      { id: "200g", label: "200g", price: 160 },
      { id: "500g", label: "500g", price: 310 }
    ]
  },
  {
    id: "mathri-classic",
    name: "Classic Mathri",
    category: "Authentic Snacks",
    price: 180,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 84,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 180 },
      { id: "500g", label: "500g", price: 340 }
    ]
  },
  {
    id: "mini-samosa-snack",
    name: "Mini Samosa (Snack)",
    category: "Authentic Snacks",
    price: 190,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 132,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 190 },
      { id: "500g", label: "500g", price: 360 }
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
  // Added: Pickles (8 new)
  {
    id: "garlic-pickle",
    name: "Garlic Pickle",
    category: "Pickles",
    price: 240,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 156,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 240 },
      { id: "400g", label: "400g", price: 440 }
    ]
  },
  {
    id: "tomato-pickle",
    name: "Tomato Pickle",
    category: "Pickles",
    price: 230,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 121,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 230 },
      { id: "400g", label: "400g", price: 430 }
    ]
  },
  {
    id: "amla-pickle",
    name: "Amla (Gooseberry) Pickle",
    category: "Pickles",
    price: 250,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 98,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 250 },
      { id: "400g", label: "400g", price: 460 }
    ]
  },
  {
    id: "mixed-veg-pickle",
    name: "Mixed Vegetable Pickle",
    category: "Pickles",
    price: 240,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 110,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 240 },
      { id: "400g", label: "400g", price: 440 }
    ]
  },
  {
    id: "green-chilli-pickle",
    name: "Green Chilli Pickle",
    category: "Pickles",
    price: 260,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 175,
    spiceLevel: 3,
    variants: [
      { id: "200g", label: "200g", price: 260 },
      { id: "400g", label: "400g", price: 480 }
    ]
  },
  {
    id: "ginger-pickle",
    name: "Ginger Pickle",
    category: "Pickles",
    price: 240,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 99,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 240 },
      { id: "400g", label: "400g", price: 440 }
    ]
  },
  {
    id: "cut-mango-pickle",
    name: "Cut Mango Pickle",
    category: "Pickles",
    price: 250,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 132,
    spiceLevel: 3,
    variants: [
      { id: "200g", label: "200g", price: 250 },
      { id: "400g", label: "400g", price: 470 }
    ]
  },
  {
    id: "lime-chilli-pickle",
    name: "Lime & Chilli Pickle",
    category: "Pickles",
    price: 240,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 87,
    spiceLevel: 2,
    variants: [
      { id: "200g", label: "200g", price: 240 },
      { id: "400g", label: "400g", price: 440 }
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
  // Added: Sweets (8 new)
  {
    id: "rasgulla-classic",
    name: "Classic Rasgulla",
    category: "Sweets",
    price: 260,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 210,
    variants: [
      { id: "250g", label: "250g", price: 260 },
      { id: "500g", label: "500g", price: 480 }
    ]
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Sweets",
    price: 280,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 320,
    variants: [
      { id: "250g", label: "250g", price: 280 },
      { id: "500g", label: "500g", price: 520 }
    ]
  },
  {
    id: "jalebi-fresh",
    name: "Fresh Jalebi",
    category: "Sweets",
    price: 240,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 178,
    variants: [
      { id: "250g", label: "250g", price: 240 },
      { id: "500g", label: "500g", price: 460 }
    ]
  },
  {
    id: "soan-papdi",
    name: "Soan Papdi",
    category: "Sweets",
    price: 220,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 190,
    variants: [
      { id: "250g", label: "250g", price: 220 },
      { id: "500g", label: "500g", price: 420 }
    ]
  },
  {
    id: "badam-halwa",
    name: "Badam Halwa",
    category: "Sweets",
    price: 520,
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 156,
    variants: [
      { id: "250g", label: "250g", price: 520 },
      { id: "500g", label: "500g", price: 980 }
    ]
  },
  {
    id: "dryfruit-laddu",
    name: "Dry Fruit Laddu",
    category: "Sweets",
    price: 380,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 132,
    variants: [
      { id: "250g", label: "250g", price: 380 },
      { id: "500g", label: "500g", price: 720 }
    ]
  },
  {
    id: "mysore-pak-ghee-rich",
    name: "Mysore Pak (Ghee Rich)",
    category: "Sweets",
    price: 420,
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 275,
    variants: [
      { id: "250g", label: "250g", price: 420 },
      { id: "500g", label: "500g", price: 800 }
    ]
  },
  {
    id: "kesar-peda",
    name: "Kesar Peda",
    category: "Sweets",
    price: 360,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 120,
    variants: [
      { id: "250g", label: "250g", price: 360 },
      { id: "500g", label: "500g", price: 680 }
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
  },
  // Added: Dry Fruits (8 new)
  {
    id: "raisins-afghani",
    name: "Afghani Raisins",
    category: "Dry Fruits",
    price: 260,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 95,
    variants: [
      { id: "250g", label: "250g", price: 260 },
      { id: "500g", label: "500g", price: 480 },
      { id: "1kg", label: "1kg", price: 920 }
    ]
  },
  {
    id: "walnuts-kashmir",
    name: "Kashmiri Walnuts",
    category: "Dry Fruits",
    price: 950,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 140,
    variants: [
      { id: "250g", label: "250g", price: 950 },
      { id: "500g", label: "500g", price: 1800 },
      { id: "1kg", label: "1kg", price: 3500 }
    ]
  },
  {
    id: "anjeer-premium",
    name: "Premium Anjeer (Figs)",
    category: "Dry Fruits",
    price: 680,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 132,
    variants: [
      { id: "250g", label: "250g", price: 680 },
      { id: "500g", label: "500g", price: 1320 }
    ]
  },
  {
    id: "apricots-dried",
    name: "Dried Apricots",
    category: "Dry Fruits",
    price: 520,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 101,
    variants: [
      { id: "250g", label: "250g", price: 520 },
      { id: "500g", label: "500g", price: 980 }
    ]
  },
  {
    id: "cranberries-dried",
    name: "Dried Cranberries",
    category: "Dry Fruits",
    price: 420,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 118,
    variants: [
      { id: "250g", label: "250g", price: 420 },
      { id: "500g", label: "500g", price: 780 }
    ]
  },
  {
    id: "hazelnuts-premium",
    name: "Premium Hazelnuts",
    category: "Dry Fruits",
    price: 980,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 87,
    variants: [
      { id: "250g", label: "250g", price: 980 },
      { id: "500g", label: "500g", price: 1880 }
    ]
  },
  {
    id: "pine-nuts",
    name: "Pine Nuts",
    category: "Dry Fruits",
    price: 1600,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 75,
    variants: [
      { id: "250g", label: "250g", price: 1600 },
      { id: "500g", label: "500g", price: 3100 }
    ]
  },
  {
    id: "brazil-nuts",
    name: "Brazil Nuts",
    category: "Dry Fruits",
    price: 1400,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 66,
    variants: [
      { id: "250g", label: "250g", price: 1400 },
      { id: "500g", label: "500g", price: 2700 }
    ]
  }
];

export const featuredProducts = products.filter(p => p.badges?.includes("BESTSELLER")).slice(0, 6);
export const newProducts = products.filter(p => p.badges?.includes("NEW")).slice(0, 4);
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
    image: "https://www.spiceupthecurry.com/wp-content/uploads/2018/08/rice-murukku-recipe-7.jpg",
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
      { id: "500g", label: "500g", price: 350, originalPrice: 420 },
      { id: "1kg", label: "1kg", price: 600, originalPrice: 760 }
    ]
  },
  {
    id: "mixture-deluxe",
    name: "South Indian Mixture Deluxe",
    category: "South Indian Snacks",
    price: 200,
    originalPrice: 250,
    image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/10/Madras-Mixture-1.jpg?resize=683%2C1024&ssl=1",
    rating: 4.3,
    reviewCount: 167,
    badges: ["SPICY"],
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 200, originalPrice: 250 },
      { id: "500g", label: "500g", price: 380, originalPrice: 450 },
      { id: "1kg", label: "1kg", price: 800, originalPrice: 1000 }
    ]
  },
  {
    id: "thattai-crispy",
    name: "Crispy Rice Thattai",
    category: "South Indian Snacks",
    price: 170,
    image: "https://www.awesomecuisine.com/wp-content/uploads/2018/10/thattai_saamai.jpg",
    rating: 4.4,
    reviewCount: 145,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 213 },
      { id: "500g", label: "500g", price: 425 },
      { id: "1kg", label: "1kg", price: 850 }
    ]
  },
  // Added: South Indian Snacks (8 new)
  {
    id: "ragi-murukku",
    name: "Ragi Murukku",
    category: "South Indian Snacks",
    price: 190,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGizVSPJsythh8Vq70BYYQ3k-VJwBqjzmCOA&s",
    rating: 4.4,
    reviewCount: 112,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 238 },
      { id: "500g", label: "500g", price: 475 },
      { id: "1kg", label: "1kg", price: 950 }
    ]
  },
  {
    id: "kara-sev-spicy",
    name: "Spicy Kara Sev",
    category: "South Indian Snacks",
    price: 180,
    image: "https://www.sharmispassions.com/wp-content/uploads/2011/10/kara-sev7.jpg",
    rating: 4.3,
    reviewCount: 128,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 225 },
      { id: "500g", label: "500g", price: 450 },
      { id: "1kg", label: "1kg", price: 900 }
    ]
  },
  {
    id: "butter-murukku",
    name: "Butter Murukku",
    category: "South Indian Snacks",
    price: 160,
    image: "https://snackative.com/cdn/shop/products/Butter_Murukku_303120b7-3f8a-4496-a2ba-565eb957560c_1024x1024.jpg?v=1737234471",
    rating: 4.5,
    reviewCount: 96,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 400 },
      { id: "1kg", label: "1kg", price: 800 }
    ]
  },
  {
    id: "pakoda-mix",
    name: "Pakkoda Mix",
    category: "South Indian Snacks",
    price: 200,
    image: "https://www.yummyfoodrecipes.com/resources/picture/org/Monsoon-Special-Mixed.jpg",
    rating: 4.2,
    reviewCount: 154,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 370 },
      { id: "1kg", label: "1kg", price: 800 }
    ]
  },
  {
    id: "ribbon-pakoda",
    name: "Ribbon Pakoda",
    category: "South Indian Snacks",
    price: 170,
    image: "https://rakskitchen.net/wp-content/uploads/2010/10/ola-pakoda-feat.jpg",
    rating: 4.4,
    reviewCount: 141,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 213 },
      { id: "500g", label: "500g", price: 425 },
      { id: "1kg", label: "1kg", price: 850 }
    ]
  },
  {
    id: "thenkuzhal-murukku",
    name: "Thenkuzhal Murukku",
    category: "South Indian Snacks",
    price: 190,
    image: "https://www.chettinadsnacksonline.com/cdn/shop/products/Thengulalrevised_918x.jpg?v=1678698048",
    rating: 4.6,
    reviewCount: 178,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 238 },
      { id: "500g", label: "500g", price: 475 },
      { id: "1kg", label: "1kg", price: 950 }
    ]
  },
  {
    id: "masala-thattai",
    name: "Masala Thattai",
    category: "South Indian Snacks",
    price: 185,
    image: "https://www.milletmaagicmeal.in/cdn/shop/articles/image1_59df73b3-c3d0-4952-901d-bacc7490158a.webp?v=1743141534",
    rating: 4.3,
    reviewCount: 102,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 231 },
      { id: "500g", label: "500g", price: 463 },
      { id: "1kg", label: "1kg", price: 925 }
    ]
  },
  {
    id: "mini-murukku-bites",
    name: "Mini Murukku Bites",
    category: "South Indian Snacks",
    price: 160,
    image: "https://aswinssweets.com/cdn/shop/products/Untitled-1_0004_DSC07288.jpg?v=1751623942",
    rating: 4.2,
    reviewCount: 88,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 400 },
      { id: "1kg", label: "1kg", price: 800 }
    ]
  },
  {
    id: "achappam",
    name: "Achappam",
    category: "South Indian Snacks",
    price: 180,
    image: "https://static.toiimg.com/thumb/58221296.cms?imgsize=272045&width=800&height=800",
    rating: 4.4,
    reviewCount: 110,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 225 },
      { id: "500g", label: "500g", price: 450 },
      { id: "1kg", label: "1kg", price: 900 }
    ]
  },
  {
    id: "avalose-unda",
    name: "Avalose Unda",
    category: "South Indian Snacks",
    price: 160,
    image: "https://i0.wp.com/mariasmenu.com/wp-content/uploads/Avalose-Unda.png?fit=650%2C878&ssl=1",
    rating: 4.3,
    reviewCount: 95,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 400 },
      { id: "1kg", label: "1kg", price: 800 }
    ]
  },
  {
    id: "bajji",
    name: "Bajji",
    category: "South Indian Snacks",
    price: 140,
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Bajji.webp",
    rating: 4.2,
    reviewCount: 130,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 175 },
      { id: "500g", label: "500g", price: 350 },
      { id: "1kg", label: "1kg", price: 700 }
    ]
  },
  {
    id: "bonda",
    name: "Bonda",
    category: "South Indian Snacks",
    price: 150,
    image: "https://www.kamalascorner.com/wp-content/uploads/2024/11/cabbage-bonda.jpg",
    rating: 4.5,
    reviewCount: 150,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 188 },
      { id: "500g", label: "500g", price: 375 },
      { id: "1kg", label: "1kg", price: 750 }
    ]
  },
  {
    id: "dahi-vada",
    name: "Dahi Vada",
    category: "South Indian Snacks",
    price: 170,
    image: "https://ministryofcurry.com/wp-content/uploads/2016/08/Dahi-Vada-5.jpg",
    rating: 4.4,
    reviewCount: 140,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 213 },
      { id: "500g", label: "500g", price: 425 },
      { id: "1kg", label: "1kg", price: 850 }
    ]
  },
  {
    id: "jhangri",
    name: "Jhangri",
    category: "South Indian Snacks",
    price: 190,
    image: "https://images.jdmagicbox.com/quickquotes/images_main/jangri-home-made-383993889-b3u78.png",
    rating: 4.3,
    reviewCount: 100,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 238 },
      { id: "500g", label: "500g", price: 475 },
      { id: "1kg", label: "1kg", price: 950 }
    ]
  },
  {
    id: "kozhalappam",
    name: "Kozhalappam",
    category: "South Indian Snacks",
    price: 175,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizSPKSYeECW8mq-hufFVmqOuBjU6M_Gv3RgZlvg4GQm9iD1JhWjLJFGnAc6gLARy_6T01Y6fxiiXFl8UYUi87xpUWIeRlL6EKIxiGdZ2XdlwFADkHiCL21q4CQIkVXneOVAhOUjDlnXabY/s1600/Palaharam_kuzhalappam-5.jpg",
    rating: 4.4,
    reviewCount: 115,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 219 },
      { id: "500g", label: "500g", price: 438 },
      { id: "1kg", label: "1kg", price: 875 }
    ]
  },
  {
    id: "pakkavada",
    name: "Pakkavada",
    category: "South Indian Snacks",
    price: 155,
    image: "https://authentickerala.in/wp-content/uploads/2020/09/IMG_1178-2000x1333.jpg.webp",
    rating: 4.2,
    reviewCount: 125,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 194 },
      { id: "500g", label: "500g", price: 388 },
      { id: "1kg", label: "1kg", price: 775 }
    ]
  },

  {
    id: "pazhampori",
    name: "Pazhampori",
    category: "South Indian Snacks",
    price: 165,
    image: "https://foodgood.in/wp-content/uploads/2025/06/pazhampori-500x500.jpg",
    rating: 4.4,
    reviewCount: 120,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 206 },
      { id: "500g", label: "500g", price: 413 },
      { id: "1kg", label: "1kg", price: 825 }
    ]
  },
  {
    id: "vattayappam",
    name: "Vattayappam",
    category: "South Indian Snacks",
    price: 185,
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2020/04/vattayappam-1.jpeg",
    rating: 4.4,
    reviewCount: 105,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 231 },
      { id: "500g", label: "500g", price: 463 },
      { id: "1kg", label: "1kg", price: 925 }
    ]
  },

  // Authentic Snacks
  {
    id: "bhujia-classic",
    name: "Classic Aloo Bhujia",
    category: "Authentic Snacks",
    price: 160,
    originalPrice: 200,
    image: "https://www.ohmyveg.co.uk/wp-content/uploads/2024/12/aloo-bhujia.jpg",
    rating: 4.6,
    reviewCount: 298,
    badges: ["BESTSELLER"],
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 200, originalPrice: 250 },
      { id: "500g", label: "500g", price: 375, originalPrice: 450 },
      { id: "1kg", label: "1kg", price: 720, originalPrice: 850 }
    ]
  },
  {
    id: "sev-bombay",
    name: "Bombay Thick Sev",
    category: "Authentic Snacks",
    price: 140,
    image: "https://m.media-amazon.com/images/I/61IMkl2IFZL.jpg",
    rating: 4.2,
    reviewCount: 134,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 175 },
      { id: "500g", label: "500g", price: 330 },
      { id: "1kg", label: "1kg", price: 660 }
    ]
  },
  {
    id: "namkeen-mix",
    name: "Special Namkeen Mix",
    category: "Authentic Snacks",
    price: 180,
    originalPrice: 220,
    image: "https://www.jiomart.com/images/product/original/rvfqzsojz7/btw-navratan-mix-namkeen-400g-200g-x-2-product-images-orvfqzsojz7-p606422182-2-202311301303.jpg?im=Resize=(420,420)",
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
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314736761/WJ/WT/BV/190840872/spicy-masala-peanuts.jpg",
    rating: 4.4,
    reviewCount: 210,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 320 },
      { id: "1kg", label: "1kg", price: 640 }
    ]
  },
  {
    id: "chana-jor-garam",
    name: "Chana Jor Garam",
    category: "Authentic Snacks",
    price: 150,
    image: "https://www.secondrecipe.com/wp-content/uploads/2020/06/chana-jor-garam.jpg",
    rating: 4.3,
    reviewCount: 140,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 188 },
      { id: "500g", label: "500g", price: 300 },
      { id: "1kg", label: "1kg", price: 600 }
    ]
  },
  {
    id: "moong-dal-namkeen",
    name: "Moong Dal Namkeen",
    category: "Authentic Snacks",
    price: 140,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fhjfG16vqu9CzSVAuuC6wwZa0MjwBl6zfA&s",
    rating: 4.2,
    reviewCount: 175,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 175 },
      { id: "500g", label: "500g", price: 280 },
      { id: "1kg", label: "1kg", price: 560 }
    ]
  },
  {
    id: "khara-boondi",
    name: "Khara Boondi",
    category: "Authentic Snacks",
    price: 130,
    image: "https://www.karkarafoods.com/media/items/Kara%20Boondi/telangana-snack-kara-boondi-main.jpeg",
    rating: 4.1,
    reviewCount: 102,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 163 },
      { id: "500g", label: "500g", price: 260 },
      { id: "1kg", label: "1kg", price: 520 }
    ]
  },
  {
    id: "farali-chevda",
    name: "Farali Chevda",
    category: "Authentic Snacks",
    price: 170,
    image: "https://sewasaamarth.com/wp-content/uploads/2023/12/Farali-Chivda_Closeup-scaled.jpg",
    rating: 4.3,
    reviewCount: 88,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 213 },
      { id: "500g", label: "500g", price: 320 },
      { id: "1kg", label: "1kg", price: 640 }
    ]
  },
  {
    id: "papdi-namkeen",
    name: "Papdi",
    category: "Authentic Snacks",
    price: 160,
    image: "https://vrajprasadam.com/wp-content/uploads/2023/11/tikhi-papadi.webp",
    rating: 4.2,
    reviewCount: 91,
    spiceLevel: 1,
    variants: [
      { id: "250g", label: "250g", price: 200 },
      { id: "500g", label: "500g", price: 310 },
      { id: "1kg", label: "1kg", price: 620 }
    ]
  },
  {
    id: "mathri-classic",
    name: "Classic Mathri",
    category: "Authentic Snacks",
    price: 180,
    image: "https://classicradheysweets.in/cdn/shop/products/MethiMathri.png?v=1629985227",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYXBG4c4BsyyssXKix3ctaQy1JLC9DjYAiw&s",
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
      { id: "250g", label: "250g", price: 313, originalPrice: 375 },
      { id: "500g", label: "500g", price: 563, originalPrice: 650 },
      { id: "1kg", label: "1kg", price: 1126, originalPrice: 1300 }
    ]
  },
  {
    id: "lemon-pickle",
    name: "Tangy Lemon Pickle",
    category: "Pickles",
    price: 220,
    image: "https://foodsandflavorsbyshilpi.com/wp-content/uploads/2021/06/FB-Thumnails-website-old-2021-06-26T221543.874.jpg",
    rating: 4.6,
    reviewCount: 234,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 275 },
      { id: "500g", label: "500g", price: 525 },
      { id: "1kg", label: "1kg", price: 1050 }
    ]
  },
  {
    id: "gongura-pickle",
    name: "Andhra Gongura Pickle",
    category: "Pickles",
    price: 280,
    originalPrice: 340,
    image: "https://i0.wp.com/foodonfarmpickles.com/wp-content/uploads/2024/07/Gongura-scaled.webp?fit=1920%2C1281&ssl=1",
    rating: 4.7,
    reviewCount: 189,
    badges: ["SPICY"],
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 350, originalPrice: 425 },
      { id: "500g", label: "500g", price: 650, originalPrice: 750 },
      { id: "1kg", label: "1kg", price: 1300, originalPrice: 1500 }
    ]
  },
  // Added: Pickles (8 new)
  {
    id: "garlic-pickle",
    name: "Garlic Pickle",
    category: "Pickles",
    price: 240,
    image: "https://aahaaramonline.com/wp-content/uploads/2022/07/Andhra_Garlic_Pickle_Vellulli_Avakaya.jpg",
    rating: 4.5,
    reviewCount: 156,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1100 }
    ]
  },
  {
    id: "tomato-pickle",
    name: "Tomato Pickle",
    category: "Pickles",
    price: 230,
    image: "https://blissfulbitesbytay.com/wp-content/uploads/2021/09/Tomato-pickle-2.jpg?x19442",
    rating: 4.4,
    reviewCount: 121,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 288 },
      { id: "500g", label: "500g", price: 538 },
      { id: "1kg", label: "1kg", price: 1076 }
    ]
  },
  {
    id: "amla-pickle",
    name: "Amla (Gooseberry) Pickle",
    category: "Pickles",
    price: 250,
    image: "https://palatesdesire.com/wp-content/uploads/2019/12/Amla_pickle_recipe@palates_desire-scaled.jpg",
    rating: 4.3,
    reviewCount: 98,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 313 },
      { id: "500g", label: "500g", price: 575 },
      { id: "1kg", label: "1kg", price: 1150 }
    ]
  },
  {
    id: "mixed-veg-pickle",
    name: "Mixed Vegetable Pickle",
    category: "Pickles",
    price: 240,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL2Rtkh4N1Ox3YCXMvmH4SlRxqNdLrSZECw&s",
    rating: 4.2,
    reviewCount: 110,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1100 }
    ]
  },
  {
    id: "green-chilli-pickle",
    name: "Green Chilli Pickle",
    category: "Pickles",
    price: 260,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXAWFkPwvVcyaEP2ObpoZr6YvnH9HvvUrf204FSk4gjH_3D7vV2Vr4SUgZ0hZvc_xs3LaeR3zff1gDOE10Y-t0sSHcJOq6PyC4YUUL27fNWjDxGAMaBmCOq0svPPFKDWm8Vk2YSwfj940/s1600/lemon.chili.pickle.jpg",
    rating: 4.6,
    reviewCount: 175,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 325 },
      { id: "500g", label: "500g", price: 600 },
      { id: "1kg", label: "1kg", price: 1200 }
    ]
  },
  {
    id: "ginger-pickle",
    name: "Ginger Pickle",
    category: "Pickles",
    price: 240,
    image: "https://thegrandsweets.com/wp-content/uploads/2022/10/GINGER-PICKLE.jpg",
    rating: 4.4,
    reviewCount: 99,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1100 }
    ]
  },
  {
    id: "cut-mango-pickle",
    name: "Cut Mango Pickle",
    category: "Pickles",
    price: 250,
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Kerala-Style-Mango-Pickle-2-3.jpg",
    rating: 4.5,
    reviewCount: 132,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 313 },
      { id: "500g", label: "500g", price: 588 },
      { id: "1kg", label: "1kg", price: 1176 }
    ]
  },
  {
    id: "lime-chilli-pickle",
    name: "Lime & Chilli Pickle",
    category: "Pickles",
    price: 240,
    image: "https://newellbrands.imgix.net/e521d282-07f0-3656-9995-6d786ecbd18f/e521d282-07f0-3656-9995-6d786ecbd18f.jpeg?fm=jpg",
    rating: 4.3,
    reviewCount: 87,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1100 }
    ]
  },

  // Sweets
  {
    id: "mysore-pak",
    name: "Traditional Mysore Pak",
    category: "Sweets",
    price: 320,
    originalPrice: 380,
    image: "https://bansiwala.co.in/cdn/shop/files/MysorePak_01.jpg?v=1698482887&width=533",
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
    image: "https://prashantcorner.com/cdn/shop/files/KajuKatli_0a49ddbc-016b-4cff-b4f8-9d0e5a1ba453.jpg?v=1730984954",
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
    image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2014/06/Besan-Ladoo-recipe-02.jpg",
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
    image: "https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151&width=1946",
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
    image: "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img.webp?v=1721036408&width=1500",
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
    image: "https://sinfullyspicy.com/wp-content/uploads/2014/10/1200-by-1200-images-1.jpg",
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
    image: "https://indiasweethouse.in/cdn/shop/files/BanarasiSoanPapdi.jpg?v=1685444011",
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
    image: "https://spicesnflavors.com/wp-content/uploads/2024/04/close-up-image-of-badam-halwa.jpg",
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
    image: "https://www.cookclickndevour.com/wp-content/uploads/2019/09/dry-fruits-laddu-recipe-2.jpg",
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
    image: "https://www.shreemithai.com/cdn/shop/products/spl-mysore-pak-206182.jpg?v=1707820107",
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
    image: "https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/1635412674_Kesar-Ped.jpg",
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
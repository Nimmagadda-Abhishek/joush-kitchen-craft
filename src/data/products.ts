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

  // Authentic Snacks

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

  // Pickles
  {
    id: "mango-pickle",
    name: "Authentic Mango Pickle",
    category: "Pickles",
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    id: "maagaya-pickle",
    name: "Maagaya",
    category: "Pickles",
    subcategory: "Veg Pickles",
    price: 260,
    image: "https://vellankifoods.com/cdn/shop/products/magaya_pickle_mango_thokku.jpg?v=1680180793",
    rating: 4.3,
    reviewCount: 50,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 320 },
      { id: "500g", label: "500g", price: 600 }
    ]
  },
  {
    id: "kakara-kaya-pickle",
    name: "Kakara Kaya",
    category: "Pickles",
    subcategory: "Veg Pickles",
    price: 270,
    image: "https://bandarmithai.in/cdn/shop/products/kakarakayapickle_1_1.jpg?v=1640363902",
    rating: 4.4,
    reviewCount: 45,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 330 },
      { id: "500g", label: "500g", price: 620 }
    ]
  },
  {
    id: "mullankada-pickle",
    name: "Mullankada",
    category: "Pickles",
    subcategory: "Veg Pickles",
    price: 250,
    image: "https://i.ytimg.com/vi/3fGHSo9HVCs/sddefault.jpg",
    rating: 4.2,
    reviewCount: 40,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 310 },
      { id: "500g", label: "500g", price: 580 }
    ]
  },
  {
    id: "green-chilli-pickle",
    name: "Green Chilli Pickle",
    category: "Pickles",
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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
    subcategory: "Veg Pickles",
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

  // Non-Veg Pickles
  {
    id: "chicken-pickle",
    name: "Chicken Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 320,
    image: "https://theflavorindia.com/wp-content/uploads/2024/11/chicken-pickle-with-bone.webp",
    rating: 4.6,
    reviewCount: 145,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 320 },
      { id: "500g", label: "500g", price: 600 },
      { id: "1kg", label: "1kg", price: 1150 }
    ]
  },
  {
    id: "mutton-pickle",
    name: "Mutton Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 380,
    image: "https://theflavorindia.com/wp-content/uploads/2024/11/chicken-pickle-with-bone.webp",
    rating: 4.7,
    reviewCount: 132,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 380 },
      { id: "500g", label: "500g", price: 720 },
      { id: "1kg", label: "1kg", price: 1400 }
    ]
  },
  {
    id: "prawns-pickle",
    name: "Prawns Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 350,
    image: "https://i.ytimg.com/vi/fngSotPjwUc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBfFkXBzneR8kR0_q6DjixvpYSqkg",
    rating: 4.4,
    reviewCount: 98,
    spiceLevel: 2,
    variants: [
      { id: "250g", label: "250g", price: 350 },
      { id: "500g", label: "500g", price: 650 },
      { id: "1kg", label: "1kg", price: 1250 }
    ]
  },
  {
    id: "fish-pickle",
    name: "Fish Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 300,
    image: "https://mariasmenu.com/wp-content/uploads/Fish-Pickle.png",
    rating: 4.5,
    reviewCount: 156,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1050 }
    ]
  },
  {
    id: "chicken-boneless-pickle",
    name: "Chicken Boneless Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 340,
    image: "https://m.media-amazon.com/images/X/bxt1/M/rbxt1RaiMBxzUks._SL640_QL75_FMwebp_.jpg",
    rating: 4.5,
    reviewCount: 123,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 340 },
      { id: "500g", label: "500g", price: 650 },
      { id: "1kg", label: "1kg", price: 1250 }
    ]
  },
  {
    id: "tokku-chicken-pickle",
    name: "Tokku Chicken Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 360,
    image: "https://i0.wp.com/foodonfarmpickles.com/wp-content/uploads/2025/05/1000252446.png?fit=3000%2C2002&ssl=1",
    rating: 4.6,
    reviewCount: 134,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 360 },
      { id: "500g", label: "500g", price: 680 },
      { id: "1kg", label: "1kg", price: 1300 }
    ]
  },
  {
    id: "gongura-prawns-pickle",
    name: "Gongura Prawns Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 420,
    image: "https://images.meesho.com/images/products/167421124/ddshl_512.webp?width=512",
    rating: 4.7,
    reviewCount: 89,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 420 },
      { id: "500g", label: "500g", price: 800 },
      { id: "1kg", label: "1kg", price: 1550 }
    ]
  },
  {
    id: "gongura-chicken-pickle",
    name: "Gongura Chicken Pickle",
    category: "Pickles",
    subcategory: "Non-Veg Pickles",
    price: 380,
    image: "https://images.aasaan.shop/stores/pavifoods/products/product_images/product_1652353435912.jpeg",
    rating: 4.6,
    reviewCount: 112,
    spiceLevel: 3,
    variants: [
      { id: "250g", label: "250g", price: 380 },
      { id: "500g", label: "500g", price: 720 },
      { id: "1kg", label: "1kg", price: 1400 }
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
  {
    id: "pootharekulu",
    name: "Pootharekulu",
    category: "Sweets",
    price: 350,
    image: "https://vellankifoods.com/cdn/shop/products/pootharekulu_dry_fruits_Pack_of_5pcs.jpg?v=1680181329",
    rating: 4.5,
    reviewCount: 150,
    variants: [
      { id: "250g", label: "250g", price: 350 },
      { id: "500g", label: "500g", price: 650 },
      { id: "1kg", label: "1kg", price: 1250 }
    ]
  },
  {
    id: "rasmali",
    name: "Rasmali",
    category: "Sweets",
    price: 300,
    image: "https://annapurn.com/wp-content/uploads/2025/03/ChatGPT-Image-Apr-6-2025-11_47_29-PM.png",
    rating: 4.6,
    reviewCount: 180,
    variants: [
      { id: "250g", label: "250g", price: 300 },
      { id: "500g", label: "500g", price: 550 },
      { id: "1kg", label: "1kg", price: 1050 }
    ]
  },
  {
    id: "madata-kaza",
    name: "Madata Kaza",
    category: "Sweets",
    price: 400,
    image: "https://pappaladabba.com/wp-content/uploads/2023/10/1000x1000v01mk.jpg",
    rating: 4.4,
    reviewCount: 120,
    variants: [
      { id: "250g", label: "250g", price: 400 },
      { id: "500g", label: "500g", price: 750 },
      { id: "1kg", label: "1kg", price: 1450 }
    ]
  },
  {
    id: "bobbattlu",
    name: "Bobbattlu",
    category: "Sweets",
    price: 320,
    image: "https://m.media-amazon.com/images/I/51+hkHj6ZuL._UF1000,1000_QL80_.jpg",
    rating: 4.5,
    reviewCount: 140,
    variants: [
      { id: "250g", label: "250g", price: 320 },
      { id: "500g", label: "500g", price: 600 },
      { id: "1kg", label: "1kg", price: 1150 }
    ]
  },
  {
    id: "palakova",
    name: "Palakova",
    category: "Sweets",
    price: 380,
    image: "https://athithigruhafoods.in/cdn/shop/files/Palakova-1.jpg?v=1716880548",
    rating: 4.7,
    reviewCount: 160,
    variants: [
      { id: "250g", label: "250g", price: 380 },
      { id: "500g", label: "500g", price: 720 },
      { id: "1kg", label: "1kg", price: 1380 }
    ]
  },
  {
    id: "kalakand",
    name: "Kalakand",
    category: "Sweets",
    price: 450,
    image: "https://www.nestleprofessional.in/sites/default/files/2022-07/Kalakand.jpg",
    rating: 4.6,
    reviewCount: 200,
    variants: [
      { id: "250g", label: "250g", price: 450 },
      { id: "500g", label: "500g", price: 850 },
      { id: "1kg", label: "1kg", price: 1650 }
    ]
  },
  {
    id: "mothichur-ladoo",
    name: "Mothichur Ladoo",
    category: "Sweets",
    price: 280,
    image: "https://www.murarisweets.com/cdn/shop/files/MotichoorLaddu4.png?v=1709528857&width=360",
    rating: 4.4,
    reviewCount: 130,
    variants: [
      { id: "250g", label: "250g", price: 280 },
      { id: "500g", label: "500g", price: 520 },
      { id: "1kg", label: "1kg", price: 1000 }
    ]
  },
  {
    id: "dood-peda",
    name: "Dood Peda",
    category: "Sweets",
    price: 360,
    image: "https://www.murarisweets.com/cdn/shop/files/MotichoorLaddu4.png?v=1709528857&width=360",
    rating: 4.5,
    reviewCount: 110,
    variants: [
      { id: "250g", label: "250g", price: 360 },
      { id: "500g", label: "500g", price: 680 },
      { id: "1kg", label: "1kg", price: 1300 }
    ]
  },
  {
    id: "arishelu",
    name: "Arishelu",
    category: "Sweets",
    price: 320,
    image: "https://c.ndtvimg.com/2018-10/9hmcmaig_ariselu_625x300_29_October_18.jpg",
    rating: 4.4,
    reviewCount: 95,
    variants: [
      { id: "250g", label: "250g", price: 320 },
      { id: "500g", label: "500g", price: 600 },
      { id: "1kg", label: "1kg", price: 1150 }
    ]
  },
  {
    id: "sunni-onda",
    name: "Sunni Onda",
    category: "Sweets",
    price: 280,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/1/TV/JY/MU/33671567/sunni-undalu-500x500.jpg",
    rating: 4.3,
    reviewCount: 85,
    variants: [
      { id: "250g", label: "250g", price: 280 },
      { id: "500g", label: "500g", price: 520 },
      { id: "1kg", label: "1kg", price: 1000 }
    ]
  },
  {
    id: "ravva-onda",
    name: "Ravva Onda",
    category: "Sweets",
    price: 290,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy25heV1VP9w3l3KcRcw2fSG1U2liqvhRZI6sfcFGQJIPsBd9Yc350X8FuCwJIJtabq14&usqp=CAU",
    rating: 4.3,
    reviewCount: 90,
    variants: [
      { id: "250g", label: "250g", price: 290 },
      { id: "500g", label: "500g", price: 540 },
      { id: "1kg", label: "1kg", price: 1050 }
    ]
  },

    {
    id: "gavvalu",
    name: "Gavvalu",
    category: "Sweets",
    price: 290,
    image: "https://m.media-amazon.com/images/I/61gKKEgVhhL._UF1000,1000_QL80_.jpg",
    rating: 4.3,
    reviewCount: 90,
    variants: [
      { id: "250g", label: "250g", price: 290 },
      { id: "500g", label: "500g", price: 540 },
      { id: "1kg", label: "1kg", price: 1050 }
    ]
  },

  // Dry Fruits
  {
    id: "cashews-premium",
    name: "Premium Cashews W240",
    category: "Dry Fruits",
    price: 680,
    originalPrice: 750,
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/4725/h0617g16207255576495.jpg",
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
    image: "https://www.thegreenfuels.com/cdn/shop/files/CaliforniaAlmondBold.jpg?v=1741667992&width=1445",
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
    image: "https://goqii.com/blog/wp-content/uploads/almonds-bowl-dark-background.jpg",
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
    image: "https://nuttyyogi.com/cdn/shop/products/Munakka_Raisins.jpg?v=1680765989",
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
    image: "https://www.hamiast.com/cdn/shop/files/Kashmiri_Walnut_Snow_White_Kernels_400_Grams_-_Hamiast-62389.jpg?v=1740485234",
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
    image: "https://vibrantliving.in/cdn/shop/files/AnjeerDried.png?v=1731063809&width=2048",
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
    image: "https://www.newrameshkirana.com/wp-content/uploads/2020/06/aprcot-scaled.jpg",
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
    image: "https://valleyspremium.in/wp-content/uploads/2023/02/Untitled-design-2024-04-19T204924.837.jpg",
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
    image: "https://healthymaster.in/cdn/shop/products/e5_4685ac45-a122-4dc4-b506-c905f288f2ff.jpg?v=1753700767&width=1200",
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
    image: "data:image/jpeg;base64,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",
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
    image: "https://media.post.rvohealth.io/wp-content/uploads/2022/05/brazil-nuts-1296x728-body.jpg",
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
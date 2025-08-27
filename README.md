# JoushFoods - Authentic South Indian Food E-commerce Website

A modern, responsive e-commerce website for authentic South Indian snacks and foods, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Pages
- **Home Page** (`/`) - Hero section, featured products, categories, testimonials
- **Products Page** (`/products`) - Product catalog with filtering, sorting, and search
- **About Page** (`/about`) - Company story, mission, team, and values
- **Contact Page** (`/contact`) - Contact form, location, and customer support
- **Cart Page** (`/cart`) - Shopping cart with quantity management and promo codes
- **Checkout Page** (`/checkout`) - Multi-step checkout process with payment options
- **Profile Page** (`/profile`) - User dashboard with orders, addresses, and settings

### Key Features
- 🛒 **Shopping Cart** - Add/remove items, quantity management, persistent storage
- 🔍 **Product Search & Filter** - Advanced filtering by category, price, rating
- 📱 **Responsive Design** - Mobile-first approach with beautiful UI
- 🎨 **Modern UI/UX** - Clean design with smooth animations and transitions
- 💳 **Checkout Process** - Multi-step checkout with multiple payment options
- 👤 **User Profile** - Complete user management with order history
- 🏷️ **Promo Codes** - Discount system with promotional codes
- ⭐ **Product Reviews** - Rating and review system for products
- 🚚 **Shipping Calculator** - Dynamic shipping cost calculation
- 📧 **Contact Forms** - Multiple contact methods with form validation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Context (Cart, User)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Main navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ProductCard.tsx     # Product display component
│   ├── CartDrawer.tsx      # Shopping cart sidebar
│   └── TestimonialCard.tsx # Customer testimonial component
├── pages/
│   ├── Index.tsx           # Home page
│   ├── About.tsx           # About us page
│   ├── Products.tsx        # Product catalog
│   ├── Contact.tsx         # Contact page
│   ├── Cart.tsx            # Shopping cart
│   ├── Checkout.tsx        # Checkout process
│   ├── Profile.tsx         # User profile
│   └── NotFound.tsx        # 404 error page
├── hooks/
│   ├── useCart.tsx         # Shopping cart logic
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts            # Utility functions
└── App.tsx                 # Main app component
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316) - Brand color for CTAs and highlights
- **Secondary**: Warm earth tones for authenticity
- **Accent**: Complementary colors for special elements
- **Surface**: Clean backgrounds with subtle textures

### Typography
- **Headings**: Bold, readable fonts for hierarchy
- **Body**: Clean, legible text for content
- **Brand**: Serif font for logo and special headings

### Components
- **Cards**: Elevated surfaces with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, ghost, outline)
- **Forms**: Clean inputs with proper validation states
- **Navigation**: Intuitive menu with active states

## 🛒 Shopping Cart Features

- **Persistent Storage**: Cart items saved in localStorage
- **Quantity Management**: Increase/decrease item quantities
- **Variant Support**: Different sizes/weights for products
- **Price Calculation**: Dynamic total with shipping and tax
- **Promo Codes**: Discount system with validation
- **Free Shipping**: Threshold-based free shipping

### Available Promo Codes
- `WELCOME10` - ₹10 off
- `SAVE50` - ₹50 off  
- `FIRST20` - ₹20 off

## 📦 Product Features

- **Product Variants**: Multiple sizes/weights per product
- **Ratings & Reviews**: Star ratings with review counts
- **Spice Level Indicators**: Visual spice level representation
- **Product Badges**: NEW, BESTSELLER, SPICY labels
- **High-Quality Images**: Optimized product photography
- **Detailed Descriptions**: Comprehensive product information

## 🔍 Search & Filter

- **Text Search**: Search by product name and description
- **Category Filter**: Filter by product categories
- **Price Range**: Min/max price filtering
- **Rating Filter**: Filter by customer ratings
- **Sort Options**: Price, rating, popularity, newest
- **Layout Toggle**: Grid and list view options

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablets
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Friendly**: Large touch targets for mobile
- **Fast Loading**: Optimized images and code splitting

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joush-kitchen-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 User Experience Features

### Navigation
- **Breadcrumb Navigation**: Clear page hierarchy
- **Active States**: Visual feedback for current page
- **Mobile Menu**: Collapsible navigation for mobile
- **Search Bar**: Prominent search functionality

### Interactions
- **Hover Effects**: Subtle animations on interactive elements
- **Loading States**: Visual feedback during operations
- **Toast Notifications**: Success/error message system
- **Form Validation**: Real-time form validation

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: WCAG compliant color ratios
- **Focus Indicators**: Clear focus states

## 🛡️ Security Features

- **Form Validation**: Client-side input validation
- **XSS Protection**: Sanitized user inputs
- **HTTPS Ready**: Secure connection support
- **Privacy Focused**: No unnecessary data collection

## 📈 Performance Optimizations

- **Code Splitting**: Lazy loading of routes
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Optimization**: Tree shaking and minification
- **Caching Strategy**: Efficient browser caching

## 🔧 Customization

### Adding New Products
Products are currently stored in component state. To add new products:

1. Update the `products` array in `src/pages/Products.tsx`
2. Follow the existing product structure with required fields
3. Add product images to the public directory

### Styling Customization
- Modify `tailwind.config.js` for theme customization
- Update CSS custom properties in `src/index.css`
- Customize component styles in individual component files

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@joushfoods.com
- Phone: +91 98765 43210
- Address: 123 Food Street, Chennai, Tamil Nadu 600001

---

**JoushFoods** - Bringing authentic South Indian flavors to your doorstep! 🌶️🥘
import { Search, ShoppingCart, Menu, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";

const categories = [
  "South Indian Snacks",
  "Authentic Snacks", 
  "Pickles",
  "Sweets",
  "Dry Fruits"
];

export function Header() {
  const { openCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        🎉 Free Shipping on Orders Above ₹499 | Authentic Flavors from South India
      </div>
      
      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Row */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                JoushFoods
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for snacks, pickles, sweets..." 
                  className="pl-10 rounded-full border-border"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Help</span>
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={openCart}
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center justify-center pb-4">
            <nav className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {category}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
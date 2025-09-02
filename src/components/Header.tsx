import { Search, ShoppingCart, Menu, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { SearchRecommendations } from "./SearchRecommendations";

const categories = [
  "South Indian Snacks",
  "Authentic Snacks", 
  "Pickles",
  "Sweets",
  "Dry Fruits"
];

const navigationLinks = [
  { name: "Home", path: "/" },
    {name: "categories", path: "/#categories"},
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export function Header() {
  const { openCart, getItemCount } = useCart();
  const itemCount = getItemCount();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSearchSubmit = () => {
    if (searchValue.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchValue.trim())}`);
      setShowRecommendations(false);
    } else {
      navigate('/products');
      setShowRecommendations(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleSelectRecommendation = (query: string) => {
    setSearchValue(query);
    navigate(`/products?search=${encodeURIComponent(query)}`);
    setShowRecommendations(false);
  };

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
              <Link to="/">
                <img src={logo} alt="JoshnaFoods logo" className="h-[15vh] w-auto hover:opacity-80 transition-opacity" />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for snacks, pickles, sweets..."
                  className="pl-10 rounded-full border-border"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setShowRecommendations(true);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  onFocus={() => setShowRecommendations(true)}
                  onBlur={() => setTimeout(() => setShowRecommendations(false), 200)}
                />
              </div>
              <SearchRecommendations 
                searchQuery={searchValue} 
                onSelectRecommendation={handleSelectRecommendation} 
                isVisible={showRecommendations} 
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <Link to='/contact'>
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Help</span>
              </Button>
              </Link>
              
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/cart">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
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
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center justify-center pb-2">
            <nav className="flex space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 relative group ${
                    location.pathname === link.path 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}


          {/* Mobile Search */}
          <div className="md:hidden pb-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 rounded-full"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setShowRecommendations(true);
                }}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => setShowRecommendations(true)}
                onBlur={() => setTimeout(() => setShowRecommendations(false), 200)}
              />
            </div>
            <SearchRecommendations 
              searchQuery={searchValue} 
              onSelectRecommendation={handleSelectRecommendation} 
              isVisible={showRecommendations} 
            />
          </div>
        </div>
      </header>
    </>
  );
}

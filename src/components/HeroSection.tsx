import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { Link, useLocation } from "react-router-dom";


const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export function HeroSection() {
  return (
    <section className="hero-section min-h-[60vh] flex items-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="JoushFoods Premium South Indian Snacks"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 fade-in">
            <h1 className="hero-title">
              Authentic South Indian
              <span className="block text-accent">Flavors & Traditions</span>
            </h1>
            
            <p className="hero-subtitle max-w-2xl">
              Discover the finest collection of traditional South Indian snacks, 
              handcrafted with love using time-honored recipes. From crispy murukku 
              to tangy pickles, experience authentic flavors delivered fresh to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Shop Now
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/category/south-indian-snacks">
                <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
                  Explore Categories
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 fade-in-delay">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-medium">Free Shipping ₹499+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festive Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent text-accent-foreground py-3 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-sm font-semibold">🎊 FESTIVE SPECIAL:</span>
            <span className="text-sm">Get 20% OFF on orders above ₹999</span>
            <span className="text-sm font-bold">Use code: FESTIVE20</span>
          </div>
        </div>
      </div>
    </section>
  );
}
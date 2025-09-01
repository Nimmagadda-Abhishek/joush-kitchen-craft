import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground">
      {/* Newsletter Section */}
      <div className="newsletter-section py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Stay Updated with JoshnaFoods
            </h3>
            <p className="text-primary-foreground/90">
              Get exclusive offers, new product launches, and authentic recipes delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="accent" className="px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70">
              *No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-t border-surface-foreground/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-serif text-accent mb-2">
                  JoshnaFoods
                </h2>
                <p className="text-surface-foreground/80 text-sm leading-relaxed">
                  Bringing authentic South Indian flavors to your doorstep. 
                  Crafted with love using traditional recipes and the finest ingredients.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-surface-foreground/60 hover:text-accent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-surface-foreground/60 hover:text-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-surface-foreground/60 hover:text-accent">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-surface-foreground mb-4">Quick Links</h4>
              <div className="space-y-3">
                <Link 
                  to="/about"
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link 
                  to="/products"
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Our Products
                </Link>
                <Link 
                  to="/contact"
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Contact Us
                </Link>
                <a 
                  href="#" 
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Quality & Hygiene
                </a>
                <a 
                  href="#" 
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Bulk Orders
                </a>
                <a 
                  href="#" 
                  className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-semibold text-surface-foreground mb-4">Customer Care</h4>
              <div className="space-y-3">
                {["Contact Us","Track Your Order", "FAQs", "Terms & Conditions"].map((link) => {
                  const hrefMap: Record<string, string> = {
                    "Contact Us": "/contact",
                    "Track Your Order": "/profile",
                    "FAQs": "/faq",
                    "Terms & Conditions": "/terms-and-conditions",
                  };
                  const href = hrefMap[link] || "#";
                  return href !== "#" ? (
                    <Link
                      key={link}
                      to={href}
                      className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      key={link}
                      href={href}
                      className="block text-surface-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-surface-foreground mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-surface-foreground/90 text-sm font-medium">+91 9494054102</p>
                    <p className="text-surface-foreground/60 text-xs">Mon-Sat, 9AM-7PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-surface-foreground/90 text-sm">support@joushfoods.com</p>
                    <p className="text-surface-foreground/60 text-xs">We'll respond within 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-surface-foreground/90 text-sm">Hyderabad, Telangana</p>
                    <p className="text-surface-foreground/60 text-xs">Serving across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="py-8 border-t border-surface-foreground/20 bg-surface/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="trust-badge">
              <Shield className="h-5 w-5 text-accent" />
              <span>FSSAI Certified</span>
            </div>
            <div className="trust-badge">
              <Award className="h-5 w-5 text-accent" />
              <span>ISO 22000:2018</span>
            </div>
            <div className="trust-badge">
              <span className="text-accent font-bold">100%</span>
              <span>Authentic Recipes</span>
            </div>
            <div className="trust-badge">
              <span className="text-accent font-bold">24/7</span>
              <span>Customer Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-surface-foreground/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-surface-foreground/60 text-sm text-center md:text-left">
              © 2024 JoshnaFoods. All rights reserved. Made with ❤️ for authentic food lovers.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-surface-foreground/60 hover:text-accent text-sm">
                Privacy Policy
              </a>
              <Link to="/terms-and-conditions" className="text-surface-foreground/60 hover:text-accent text-sm">
                Terms of Service
              </Link>
              <a href="#" className="text-surface-foreground/60 hover:text-accent text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
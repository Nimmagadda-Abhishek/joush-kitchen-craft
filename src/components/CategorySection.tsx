import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import southIndianSnacks from "@/assets/south-indian-snacks.jpg";
import authenticSnacks from "@/assets/authentic-snacks.jpg";
import pickles from "@/assets/pickles.jpg";
import sweets from "@/assets/sweets.jpg";
import dryFruits from "@/assets/dry-fruits.jpg";

const categories = [
  {
    id: "south-indian-snacks",
    name: "South Indian Snacks",
    description: "Traditional murukku, thattai & more",
    image: southIndianSnacks,
    itemCount: 25
  },
  {
    id: "authentic-snacks",
    name: "Authentic Snacks",
    description: "Bhujia, sev & namkeen mix",
    image: authenticSnacks,
    itemCount: 18
  },
  {
    id: "pickles",
    name: "Pickles",
    description: "Tangy mango, lemon & gongura",
    image: pickles,
    itemCount: 12
  },
  {
    id: "sweets",
    name: "Sweets",
    description: "Mysore pak, ladoo & mithai",
    image: sweets,
    itemCount: 20
  },
  {
    id: "dry-fruits",
    name: "Dry Fruits",
    description: "Premium nuts & dried fruits",
    image: dryFruits,
    itemCount: 15
  }
];

export function CategorySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From traditional South Indian snacks to premium dry fruits, 
            discover authentic flavors crafted with the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="category-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-medium text-primary-foreground/80">
                        {category.itemCount} products
                      </span>
                      <div className="flex items-center gap-1 text-sm font-medium group">
                        <span>Shop Now</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
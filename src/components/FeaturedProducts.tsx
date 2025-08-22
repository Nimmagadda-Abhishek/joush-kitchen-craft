import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Bestselling Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Our customers' favorite authentic snacks and treats
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
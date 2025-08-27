import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  const { addItem } = useCart();

  const [selectedVariantId, setSelectedVariantId] = useState<string>(() => product?.variants?.[0]?.id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-6">The product you are looking for does not exist.</p>
          <Link to="/products" className="text-primary underline">Browse all products</Link>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      originalPrice: selectedVariant.originalPrice,
      image: product.image,
      variant: selectedVariant.label,
      category: product.category,
    });
  };

  const recommendations = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const renderSpiceLevel = (level: number) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level 
              ? level === 1 ? 'bg-success' : level === 2 ? 'bg-warning' : 'bg-destructive'
              : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-primary">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-auto rounded-md object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.badges?.map((badge) => (
                    <Badge 
                      key={badge}
                      className={`${badge === 'NEW' ? 'badge-new' : badge === 'BESTSELLER' ? 'badge-bestseller' : badge === 'SPICY' ? 'badge-spicy' : ''}`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              {product.spiceLevel && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  {renderSpiceLevel(product.spiceLevel)}
                </>
              )}
            </div>

            {/* Price and Variant */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-foreground">₹{selectedVariant.price}</span>
                {selectedVariant.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">₹{selectedVariant.originalPrice}</span>
                )}
                <Badge variant="secondary">{selectedVariant.label}</Badge>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    className={`px-3 py-1 rounded-md border text-sm transition-colors ${
                      selectedVariantId === v.id ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-muted border-border'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <Button onClick={handleAddToCart} className="min-w-[160px]">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Link to="/cart" className="text-primary underline">Go to Cart</Link>
            </div>

            {/* Description placeholder */}
            <div className="pt-4 text-sm text-muted-foreground">
              Enjoy authentic flavors crafted with the finest ingredients. Freshly prepared and packed to preserve taste and quality.
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <section className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">You might also like</h2>
          {recommendations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((rec) => (
                <ProductCard key={rec.id} product={rec} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No recommendations available.</p>
          )}
        </section>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductPage;
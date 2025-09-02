import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badges?: string[];
  variants: Array<{
    id: string;
    label: string;
    price: number;
    originalPrice?: number;
  }>;
  spiceLevel?: number;
}

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
}

export function ProductCard({ product, layout = "grid" }: ProductCardProps) {
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: defaultVariant.price,
      originalPrice: defaultVariant.originalPrice,
      image: product.image,
      variant: defaultVariant.label,
      category: product.category
    });
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const renderSpiceLevel = (level: number) => {
    return (
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
  };

  if (layout === "list") {
    return (
      <Link to={`/product/${product.id}`}>
        <Card className="product-card group hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                {/* Badges */}
                <div className="absolute top-1 left-1 flex flex-col gap-1">
                  {product.badges?.slice(0, 1).map((badge) => (
                    <Badge 
                      key={badge}
                      className={`text-xs px-1 py-0 ${
                        badge === 'NEW' ? 'badge-new' : 
                        badge === 'BESTSELLER' ? 'badge-bestseller' : 
                        badge === 'SPICY' ? 'badge-spicy' : ''
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                {/* Product Name */}
                <h3 className="font-semibold text-foreground line-clamp-1">
                  {product.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-muted-foreground">
                  {product.subcategory ? `${product.category} - ${product.subcategory}` : product.category}
                </p>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                  {product.spiceLevel && (
                    <>
                      <span className="text-xs text-muted-foreground">•</span>
                      {renderSpiceLevel(product.spiceLevel)}
                    </>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    ₹{defaultVariant.price}
                  </span>
                  {defaultVariant.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{defaultVariant.originalPrice}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    ({defaultVariant.label})
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                <Button 
                  onClick={(e) => { e.preventDefault(); handleAddToCart(); }}
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="product-card group hover:shadow-md transition-shadow">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badges?.map((badge) => (
              <Badge 
                key={badge}
                className={`product-badge ${
                  badge === 'NEW' ? 'badge-new' : 
                  badge === 'BESTSELLER' ? 'badge-bestseller' : 
                  badge === 'SPICY' ? 'badge-spicy' : ''
                }`}
              >
                {badge}
              </Badge>
            ))}
            {discount > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Wishlist */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Product Name */}
            <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
              {product.name}
            </h3>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Spice Level */}
            {product.spiceLevel && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Spice:</span>
                {renderSpiceLevel(product.spiceLevel)}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                ₹{defaultVariant.price}
              </span>
              {defaultVariant.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{defaultVariant.originalPrice}
                </span>
              )}
            </div>

            {/* Variant Info */}
            <div className="text-sm text-muted-foreground">
              {defaultVariant.label}
            </div>

            {/* Add to Cart Button */}
            <Button 
              onClick={(e) => { e.preventDefault(); handleAddToCart(); }}
              className="w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  ArrowRight,
  Tag,
  Truck,
  Shield,
  Gift,
  AlertCircle
} from "lucide-react";

const Cart = () => {
  const { toast } = useToast();
  const { items, updateQuantity, removeItem, getTotal, getItemCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = getTotal();
  const shipping = subtotal >= 499 ? 0 : 50;
  const discount = promoDiscount;
  const total = subtotal + shipping - discount;

  const handleQuantityChange = (id: string, variant: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id, variant);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
      });
    } else {
      updateQuantity(id, variant, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, variant: string) => {
    removeItem(id, variant);
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleApplyPromo = () => {
    const validPromoCodes = {
      "WELCOME10": 10,
      "SAVE50": 50,
      "FIRST20": 20
    };

    const discount = validPromoCodes[promoCode as keyof typeof validPromoCodes];
    
    if (discount) {
      setAppliedPromo(promoCode);
      setPromoDiscount(discount);
      toast({
        title: "Promo code applied!",
        description: `You saved ₹${discount} with code ${promoCode}`,
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please check your promo code and try again.",
        variant: "destructive"
      });
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoDiscount(0);
    setPromoCode("");
    toast({
      title: "Promo code removed",
      description: "Promo code has been removed from your order.",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center p-8">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground">
                  Looks like you haven't added any items to your cart yet.
                </p>
              </div>
              <Button size="lg" className="btn-hero">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground">
                {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <Badge variant="secondary" className="hidden md:flex">
              {shipping === 0 ? "Free Shipping!" : `₹${shipping} shipping`}
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Free Shipping Banner */}
            {subtotal < 499 && (
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-orange-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-orange-800">
                        Add ₹{499 - subtotal} more for FREE shipping!
                      </p>
                      <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(subtotal / 499) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Cart Items List */}
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.variant}`} className="product-card">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.category}
                            </p>
                            {item.variant && (
                              <Badge variant="outline" className="mt-1">
                                {item.variant}
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id, item.variant)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.variant, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.variant, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="font-semibold text-foreground">
                              ₹{item.price * item.quantity}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice * item.quantity}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Tag className="h-5 w-5 text-primary" />
                  Promo Code
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!appliedPromo ? (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    />
                    <Button 
                      onClick={handleApplyPromo}
                      disabled={!promoCode}
                    >
                      Apply
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        {appliedPromo} applied
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRemovePromo}
                      className="text-green-600 hover:text-green-700"
                    >
                      Remove
                    </Button>
                  </div>
                )}
                
                <div className="text-xs text-muted-foreground">
                  Try: WELCOME10, SAVE50, FIRST20
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      Shipping
                      {shipping === 0 && (
                        <Badge variant="secondary" className="text-xs">
                          FREE
                        </Badge>
                      )}
                    </span>
                    <span>₹{shipping}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <Button size="lg" className="w-full btn-hero">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {/* Trust Badges */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span>Free shipping on orders above ₹499</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span>7-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <Button variant="outline" className="w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
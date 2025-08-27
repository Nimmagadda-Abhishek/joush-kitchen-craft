import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  SlidersHorizontal,
  Grid3X3,
  List,
  Star,
  ChevronDown
} from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [spiceLevel, setSpiceLevel] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "all",
    "South Indian Snacks",
    "Authentic Snacks", 
    "Pickles",
    "Sweets",
    "Dry Fruits"
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-200", label: "Under ₹200" },
    { value: "200-500", label: "₹200 - ₹500" },
    { value: "500-1000", label: "₹500 - ₹1000" },
    { value: "1000+", label: "Above ₹1000" }
  ];

  const spiceLevels = [
    { value: "all", label: "All Spice Levels" },
    { value: "1", label: "Mild" },
    { value: "2", label: "Medium" },
    { value: "3", label: "Hot" }
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest First" }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.category.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Price filter
      if (priceRange !== "all") {
        const price = product.price;
        switch (priceRange) {
          case "0-200":
            if (price >= 200) return false;
            break;
          case "200-500":
            if (price < 200 || price >= 500) return false;
            break;
          case "500-1000":
            if (price < 500 || price >= 1000) return false;
            break;
          case "1000+":
            if (price < 1000) return false;
            break;
        }
      }

      // Spice level filter
      if (spiceLevel !== "all" && product.spiceLevel?.toString() !== spiceLevel) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        filtered.sort((a, b) => (b.badges?.includes("NEW") ? 1 : 0) - (a.badges?.includes("NEW") ? 1 : 0));
        break;
      default:
        // Featured - bestsellers first
        filtered.sort((a, b) => (b.badges?.includes("BESTSELLER") ? 1 : 0) - (a.badges?.includes("BESTSELLER") ? 1 : 0));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange, spiceLevel]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
    setPriceRange("all");
    setSpiceLevel("all");
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCategory !== "all" ? selectedCategory : null,
    priceRange !== "all" ? priceRange : null,
    spiceLevel !== "all" ? spiceLevel : null
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Products
            </h1>
            <p className="text-muted-foreground">
              Discover our complete range of authentic South Indian snacks, pickles, 
              sweets, and premium dry fruits.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="text-primary"
                    >
                      Clear All ({activeFiltersCount})
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Separator />

                {/* Categories */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {category === "all" ? "All Categories" : category}
                      </button>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Spice Level */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Spice Level</label>
                  <Select value={spiceLevel} onValueChange={setSpiceLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {spiceLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
                
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-2">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="gap-2">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("all")} className="hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                )}
                {priceRange !== "all" && (
                  <Badge variant="secondary" className="gap-2">
                    {priceRanges.find(r => r.value === priceRange)?.label}
                    <button onClick={() => setPriceRange("all")} className="hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                )}
                {spiceLevel !== "all" && (
                  <Badge variant="secondary" className="gap-2">
                    Spice: {spiceLevels.find(s => s.value === spiceLevel)?.label}
                    <button onClick={() => setSpiceLevel("all")} className="hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    layout={viewMode}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Products;
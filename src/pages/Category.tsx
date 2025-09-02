import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useParams, Link } from "react-router-dom";

const slugToName: Record<string, string> = {
  "south-indian-snacks": "South Indian Snacks",
  "authentic-snacks": "Authentic Snacks",
  "pickles": "Pickles",
  "sweets": "Sweets",
  "dry-fruits": "Dry Fruits",
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = slug ? slugToName[slug] : undefined;

  // State for pickle type filter
  const [pickleTypeFilter, setPickleTypeFilter] = useState<"all" | "veg" | "non-veg">("all");

  const categoryProducts = useMemo(() => {
    const filtered = categoryName
      ? products.filter((p) => p.category === categoryName)
      : [];

    // Apply pickle type filter if category is Pickles
    if (categoryName === "Pickles" && pickleTypeFilter !== "all") {
      return filtered.filter(product => {
        if (pickleTypeFilter === "veg") {
          return product.subcategory === "Veg Pickles";
        }
        if (pickleTypeFilter === "non-veg") {
          return product.subcategory !== "Veg Pickles";
        }
        return true;
      });
    }

    return filtered;
  }, [categoryName, pickleTypeFilter]);

  const notFound = !categoryName;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {notFound ? (
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Category not found</h1>
          <p className="text-muted-foreground mb-6">
            The category you are looking for does not exist.
          </p>
          <Link to="/products" className="text-primary underline">
            Browse all products
          </Link>
        </main>
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {categoryName}
                </h1>
                <p className="text-muted-foreground">
                  Explore our selection of {categoryName.toLowerCase()}.
                </p>
              </div>
            </div>
          </section>

          <main className="container mx-auto px-4 py-10">
            {/* Pickle Type Filter - only show if category is Pickles */}
            {categoryName === "Pickles" && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Filter by Type</h2>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${
                      pickleTypeFilter === "all"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setPickleTypeFilter("all")}
                  >
                    All Pickles
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${
                      pickleTypeFilter === "veg"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setPickleTypeFilter("veg")}
                  >
                    Veg Pickles
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${
                      pickleTypeFilter === "non-veg"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setPickleTypeFilter("non-veg")}
                  >
                    Non-Veg Pickles
                  </button>
                </div>
              </div>
            )}

            {categoryProducts.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No products found in this category.
              </div>
            ) : categoryName === "Pickles" ? (
              <div className="space-y-8">
                {/* Veg Pickles Section */}
                {categoryProducts.filter(product => product.subcategory === "Veg Pickles").length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Veg Pickles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts
                        .filter(product => product.subcategory === "Veg Pickles")
                        .map(product => (
                          <ProductCard key={product.id} product={product} />
                        ))
                      }
                    </div>
                  </div>
                )}

                {/* Non-Veg Pickles Section */}
                {categoryProducts.filter(product => product.subcategory !== "Veg Pickles").length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Non-Veg Pickles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryProducts
                        .filter(product => product.subcategory !== "Veg Pickles")
                        .map(product => (
                          <ProductCard key={product.id} product={product} />
                        ))
                      }
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </>
      )}

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Category;
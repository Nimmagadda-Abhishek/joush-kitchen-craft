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

  const categoryProducts = categoryName
    ? products.filter((p) => p.category === categoryName)
    : [];

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
            {categoryProducts.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No products found in this category.
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
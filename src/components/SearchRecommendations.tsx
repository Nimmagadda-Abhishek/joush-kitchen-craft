import { useMemo } from "react";
import { products } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Star } from "lucide-react";

interface SearchRecommendationsProps {
  searchQuery: string;
  onSelectRecommendation: (query: string) => void;
  isVisible: boolean;
}

export function SearchRecommendations({
  searchQuery,
  onSelectRecommendation,
  isVisible
}: SearchRecommendationsProps) {
  const recommendations = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    const results: Array<{
      type: 'product' | 'category' | 'badge' | 'spice';
      value: string;
      label: string;
      count?: number;
    }> = [];

    // Product name matches
    const productMatches = products
      .filter(product => product.name.toLowerCase().includes(query))
      .slice(0, 5)
      .map(product => ({
        type: 'product' as const,
        value: product.name,
        label: product.name,
        count: 1
      }));

    // Category matches
    const categoryMatches = [
      "South Indian Snacks",
      "Authentic Snacks",
      "Pickles",
      "Sweets",
      "Dry Fruits"
    ]
      .filter(category => category.toLowerCase().includes(query))
      .map(category => ({
        type: 'category' as const,
        value: category,
        label: category,
        count: products.filter(p => p.category === category).length
      }));

    // Badge matches
    const badgeMatches = ["BESTSELLER", "NEW", "SPICY"]
      .filter(badge => badge.toLowerCase().includes(query))
      .map(badge => ({
        type: 'badge' as const,
        value: badge,
        label: badge,
        count: products.filter(p => p.badges?.includes(badge)).length
      }));

    // Spice level matches
    const spiceMatches = ["1", "2", "3"]
      .filter(level => level === query)
      .map(level => {
        const labels = { "1": "Mild", "2": "Medium", "3": "Hot" };
        return {
          type: 'spice' as const,
          value: level,
          label: `Spice Level: ${labels[level as keyof typeof labels]}`,
          count: products.filter(p => p.spiceLevel?.toString() === level).length
        };
      });

    // Combine and limit results
    results.push(...productMatches, ...categoryMatches, ...badgeMatches, ...spiceMatches);
    return results.slice(0, 8);
  }, [searchQuery]);

  if (!isVisible || recommendations.length === 0) return null;

  return (
    <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto shadow-lg border">
      <div className="p-2">
        <div className="px-3 py-2 text-sm text-muted-foreground border-b">
          <Search className="inline h-4 w-4 mr-2" />
          Search suggestions
        </div>
        <div className="py-1">
          {recommendations.map((rec, index) => (
            <button
              key={`${rec.type}-${rec.value}-${index}`}
              onClick={() => onSelectRecommendation(rec.value)}
              className="w-full px-3 py-2 text-left hover:bg-muted rounded-md transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                {rec.type === 'product' && <Package className="h-4 w-4 text-muted-foreground" />}
                {rec.type === 'category' && <Search className="h-4 w-4 text-muted-foreground" />}
                {rec.type === 'badge' && <Star className="h-4 w-4 text-muted-foreground" />}
                {rec.type === 'spice' && <Search className="h-4 w-4 text-muted-foreground" />}
                <span className="text-sm">{rec.label}</span>
              </div>
              {rec.count && (
                <Badge variant="secondary" className="text-xs">
                  {rec.count}
                </Badge>
              )}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}

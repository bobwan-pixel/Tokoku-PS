import { Star, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  sold: number;
  onAddToCart?: (id: string) => void;
  onClick?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  reviewCount,
  sold,
  onAddToCart,
  onClick,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card
      className="group overflow-hidden hover-elevate cursor-pointer"
      onClick={() => onClick?.(id)}
      data-testid={`card-product-${id}`}
    >
      <div className="aspect-square bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <span className="text-6xl">{imageUrl}</span>
        </div>
        {discount > 0 && (
          <Badge
            className="absolute top-2 right-2 bg-chart-3 hover:bg-chart-3"
            data-testid={`badge-discount-${id}`}
          >
            -{discount}%
          </Badge>
        )}
      </div>

      <div className="p-3 space-y-2">
        <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem]" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span data-testid={`text-rating-${id}`}>{rating}</span>
          <span>|</span>
          <span data-testid={`text-sold-${id}`}>Terjual {sold}</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary" data-testid={`text-price-${id}`}>
              Rp {price.toLocaleString('id-ID')}
            </span>
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through" data-testid={`text-original-price-${id}`}>
                Rp {originalPrice.toLocaleString('id-ID')}
              </span>
            )}
          </div>
        </div>

        <Button
          size="sm"
          className="w-full gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(id);
          }}
          data-testid={`button-add-to-cart-${id}`}
        >
          <ShoppingCart className="h-4 w-4" />
          Tambah ke Keranjang
        </Button>
      </div>
    </Card>
  );
}

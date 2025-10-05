import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
}

export default function Header({ cartCount = 0, onCartClick, onMenuClick, onSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={onMenuClick}
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl md:text-2xl font-display font-bold">
              Tokoku
            </h1>
          </div>

          <div className="flex-1 max-w-xl hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk, makanan anjing, mainan kucing..."
                className="pl-10 w-full"
                data-testid="input-search"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-user">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari produk..."
              className="pl-10 w-full"
              data-testid="input-search-mobile"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

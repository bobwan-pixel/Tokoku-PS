import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onShopNow?: () => void;
  onBrowseCategories?: () => void;
}

export default function Hero({ onShopNow, onBrowseCategories }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-muted/30 to-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Semua Kebutuhan Hewan Kesayangan Anda 🐶🐱
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Belanja makanan, mainan, dan perlengkapan berkualitas untuk anjing, kucing, burung, ikan, dan hewan peliharaan lainnya dengan harga terbaik!
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="gap-2"
              onClick={onShopNow}
              data-testid="button-shop-now"
            >
              Belanja Sekarang
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onBrowseCategories}
              data-testid="button-browse-categories"
            >
              Lihat Kategori
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <div className="space-y-1">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Produk Tersedia</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Pelanggan Puas</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">Gratis</div>
              <div className="text-sm text-muted-foreground">Ongkir Min. Rp 100k</div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 text-[20rem] opacity-5 pointer-events-none hidden lg:block">
          🐾
        </div>
      </div>
    </div>
  );
}

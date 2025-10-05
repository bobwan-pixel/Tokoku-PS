import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl">Tokoku</h3>
            <p className="text-sm text-muted-foreground">
              Toko online terpercaya untuk semua kebutuhan hewan peliharaan Anda di Indonesia.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Kategori</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Anjing</a></li>
              <li><a href="#" className="hover:text-foreground">Kucing</a></li>
              <li><a href="#" className="hover:text-foreground">Burung</a></li>
              <li><a href="#" className="hover:text-foreground">Ikan</a></li>
              <li><a href="#" className="hover:text-foreground">Kelinci</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Layanan Pelanggan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Bantuan</a></li>
              <li><a href="#" className="hover:text-foreground">Lacak Pesanan</a></li>
              <li><a href="#" className="hover:text-foreground">Pengembalian</a></li>
              <li><a href="#" className="hover:text-foreground">Hubungi Kami</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Dapatkan penawaran spesial dan info produk terbaru
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Tokoku. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-foreground">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

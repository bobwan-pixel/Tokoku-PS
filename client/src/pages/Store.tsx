import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import CartPanel from "@/components/CartPanel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Users,
  Package,
  MessageCircle,
  Share2,
  Heart,
  Plus,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Store() {
  const [, navigate] = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { toast } = useToast();

  // Todo: remove mock data
  const storeData = {
    name: "Pet Paradise Store",
    description: "Toko terpercaya untuk semua kebutuhan hewan peliharaan Anda sejak 2020",
    rating: 4.8,
    totalReviews: 2456,
    followers: 12500,
    products: 156,
    location: "Jakarta Selatan",
    responseTime: "< 1 jam",
    joinDate: "Bergabung 2020",
  };

  const storeProducts = [
    {
      id: 's1',
      name: 'Premium Cat Food Ocean Fish 2kg',
      price: 95000,
      originalPrice: 120000,
      imageUrl: '🐟',
      rating: 4.9,
      reviewCount: 234,
      sold: 567,
    },
    {
      id: 's2',
      name: 'Dog Chew Toys Set 3pcs',
      price: 85000,
      originalPrice: null,
      imageUrl: '🎾',
      rating: 4.7,
      reviewCount: 123,
      sold: 345,
    },
    {
      id: 's3',
      name: 'Bird Cage Stainless Steel Large',
      price: 450000,
      originalPrice: 550000,
      imageUrl: '🏠',
      rating: 4.8,
      reviewCount: 89,
      sold: 123,
    },
    {
      id: 's4',
      name: 'Aquarium Filter Pro 2000L/H',
      price: 380000,
      originalPrice: null,
      imageUrl: '💧',
      rating: 4.9,
      reviewCount: 156,
      sold: 234,
    },
  ];

  const stats = [
    { label: "Rating", value: storeData.rating, icon: Star },
    { label: "Produk", value: storeData.products, icon: Package },
    { label: "Pengikut", value: `${(storeData.followers / 1000).toFixed(1)}k`, icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cartCount={0}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
      />

      <main className="flex-1">
        {/* Back Button */}
        <div className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => navigate("/account")}
              data-testid="button-back"
            >
              <ChevronLeft className="h-4 w-4" />
              Kembali ke Akun
            </Button>
          </div>
        </div>

        {/* Store Header */}
        <div className="bg-card border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                  PP
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold" data-testid="text-store-name">
                        {storeData.name}
                      </h1>
                      <p className="text-sm text-muted-foreground mt-1">
                        {storeData.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{storeData.rating}</span>
                      <span>({storeData.totalReviews.toLocaleString('id-ID')} ulasan)</span>
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {storeData.location}
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{storeData.joinDate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center p-3 bg-muted/50 rounded-lg">
                        <Icon className="h-5 w-5 mx-auto mb-1 text-foreground" />
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={isFollowing ? "secondary" : "default"}
                    className="gap-2"
                    onClick={() => {
                      setIsFollowing(!isFollowing);
                      toast({
                        title: isFollowing ? "Berhenti mengikuti toko" : "Mengikuti toko",
                        description: storeData.name,
                      });
                    }}
                    data-testid="button-follow"
                  >
                    {isFollowing ? (
                      <>
                        <Users className="h-4 w-4" />
                        Mengikuti
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" />
                        Ikuti
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="gap-2" data-testid="button-chat">
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </Button>
                  <Button variant="outline" size="icon" data-testid="button-share">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" data-testid="button-settings">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Tabs defaultValue="products" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="products" data-testid="tab-products">
                Produk
              </TabsTrigger>
              <TabsTrigger value="info" data-testid="tab-info">
                Info Toko
              </TabsTrigger>
              <TabsTrigger value="reviews" data-testid="tab-reviews">
                Ulasan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Semua Produk</h2>
                <Button variant="outline" size="sm" data-testid="button-add-product">
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Produk
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {storeProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onAddToCart={() => {
                      toast({
                        title: "Ditambahkan ke keranjang",
                        description: product.name,
                      });
                    }}
                    onClick={() => console.log('Product clicked:', product.id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="info" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Informasi Toko</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Nama Toko</div>
                    <div className="font-medium">{storeData.name}</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Lokasi</div>
                    <div className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {storeData.location}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Waktu Respon</div>
                    <div className="font-medium">{storeData.responseTime}</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Bergabung</div>
                    <div className="font-medium">{storeData.joinDate}</div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Ulasan Toko</h3>
                <div className="text-center py-8 text-muted-foreground">
                  <Star className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Belum ada ulasan untuk toko ini</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartPanel
        isOpen={isCartOpen}
        items={[]}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

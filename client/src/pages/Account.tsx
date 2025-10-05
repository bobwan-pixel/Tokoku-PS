import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import CartPanel from "@/components/CartPanel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Package,
  Heart,
  MapPin,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star,
  Wallet,
  Settings,
  Store,
} from "lucide-react";

export default function Account() {
  const [, navigate] = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Todo: remove mock data
  const user = {
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "+62 812 3456 7890",
    joinDate: "Bergabung Januari 2024",
  };

  const stats = [
    { label: "Pesanan", value: 12, icon: Package },
    { label: "Wishlist", value: 24, icon: Heart },
    { label: "Poin", value: 350, icon: Star },
  ];

  const menuItems = [
    {
      section: "Akun Saya",
      items: [
        { icon: User, label: "Edit Profil", action: () => console.log("Edit profile") },
        { icon: MapPin, label: "Alamat Pengiriman", badge: "3", action: () => console.log("Address") },
        { icon: Wallet, label: "Pembayaran", action: () => console.log("Payment") },
      ],
    },
    {
      section: "Pesanan",
      items: [
        { icon: Package, label: "Pesanan Saya", badge: "2", action: () => console.log("Orders") },
        { icon: Store, label: "Toko Saya", action: () => navigate("/store") },
      ],
    },
    {
      section: "Pengaturan",
      items: [
        { icon: Bell, label: "Notifikasi", action: () => console.log("Notifications") },
        { icon: Shield, label: "Privasi & Keamanan", action: () => console.log("Privacy") },
        { icon: Settings, label: "Pengaturan Akun", action: () => console.log("Settings") },
        { icon: HelpCircle, label: "Bantuan", action: () => console.log("Help") },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cartCount={0}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
      />

      <main className="flex-1 py-6">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Profile Card */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  BS
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div>
                  <h1 className="text-2xl font-bold" data-testid="text-user-name">
                    {user.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-sm text-muted-foreground">{user.phone}</p>
                </div>
                <p className="text-xs text-muted-foreground">{user.joinDate}</p>
              </div>

              <Button variant="outline" size="sm" data-testid="button-edit-profile">
                Edit Profil
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-muted/50 hover-elevate cursor-pointer"
                    data-testid={`stat-${stat.label.toLowerCase()}`}
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-foreground" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Menu Sections */}
          {menuItems.map((section) => (
            <Card key={section.section} className="p-4">
              <h3 className="font-semibold mb-3 px-2">{section.section}</h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-md hover-elevate text-left"
                      data-testid={`button-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}

          {/* Logout Button */}
          <Card className="p-4">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-destructive hover:text-destructive"
              data-testid="button-logout"
            >
              <LogOut className="h-5 w-5" />
              Keluar
            </Button>
          </Card>
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

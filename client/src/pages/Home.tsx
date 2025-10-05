import { useState } from "react";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CartPanel from "@/components/CartPanel";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Todo: remove mock data
const mockProducts = [
  {
    id: '1',
    name: 'Royal Canin Maxi Adult Dog Food 15kg - Makanan Anjing Dewasa Ukuran Besar',
    price: 450000,
    originalPrice: 550000,
    imageUrl: '🦴',
    category: 'food',
    petType: 'dog',
    rating: 4.8,
    reviewCount: 234,
    sold: 1245,
  },
  {
    id: '2',
    name: 'Whiskas Ocean Fish Adult Cat Food 1.2kg - Makanan Kucing Rasa Ikan Laut',
    price: 85000,
    originalPrice: 95000,
    imageUrl: '🐟',
    category: 'food',
    petType: 'cat',
    rating: 4.7,
    reviewCount: 456,
    sold: 2341,
  },
  {
    id: '3',
    name: 'Kong Classic Dog Toy - Mainan Anjing Karet Tahan Gigit',
    price: 120000,
    originalPrice: null,
    imageUrl: '🎾',
    category: 'toy',
    petType: 'dog',
    rating: 4.9,
    reviewCount: 189,
    sold: 876,
  },
  {
    id: '4',
    name: 'Cat Litter Box Premium dengan Tutup - Kotak Pasir Kucing Anti Bau',
    price: 250000,
    originalPrice: 300000,
    imageUrl: '📦',
    category: 'accessory',
    petType: 'cat',
    rating: 4.6,
    reviewCount: 123,
    sold: 567,
  },
  {
    id: '5',
    name: 'Bird Cage Sangkar Burung Besi Besar 60x40x80cm',
    price: 350000,
    originalPrice: null,
    imageUrl: '🏠',
    category: 'accessory',
    petType: 'bird',
    rating: 4.5,
    reviewCount: 89,
    sold: 234,
  },
  {
    id: '6',
    name: 'Aquarium Filter Canister External 1200L/H untuk Aquarium 100-200L',
    price: 480000,
    originalPrice: 580000,
    imageUrl: '💧',
    category: 'accessory',
    petType: 'fish',
    rating: 4.8,
    reviewCount: 167,
    sold: 445,
  },
  {
    id: '7',
    name: 'Grooming Brush Set 5 in 1 untuk Anjing dan Kucing',
    price: 95000,
    originalPrice: 120000,
    imageUrl: '✨',
    category: 'grooming',
    petType: 'dog',
    rating: 4.7,
    reviewCount: 312,
    sold: 1023,
  },
  {
    id: '8',
    name: 'Rabbit Hay Timothy Premium 1kg - Rumput Kering Kelinci Berkualitas',
    price: 65000,
    originalPrice: null,
    imageUrl: '🌾',
    category: 'food',
    petType: 'rabbit',
    rating: 4.9,
    reviewCount: 78,
    sold: 234,
  },
];

interface CartItem {
  id: string;
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  // Todo: remove mock functionality
  const handleAddToCart = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.productId === productId);
    
    if (existingItem) {
      setCartItems(items =>
        items.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}`,
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
      };
      setCartItems([...cartItems, newItem]);
    }

    toast({
      title: "Ditambahkan ke keranjang",
      description: product.name,
    });
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
    toast({
      title: "Dihapus dari keranjang",
      variant: "destructive",
    });
  };

  const filteredProducts = selectedCategory === 'all'
    ? mockProducts
    : mockProducts.filter(p => p.petType === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
      />
      
      <CategoryBar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      
      <main className="flex-1">
        <Hero
          onShopNow={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          onBrowseCategories={() => window.scrollTo({ top: 200, behavior: 'smooth' })}
        />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold">
              {selectedCategory === 'all' ? 'Semua Produk' : `Produk untuk ${selectedCategory === 'dog' ? 'Anjing' : selectedCategory === 'cat' ? 'Kucing' : selectedCategory === 'bird' ? 'Burung' : selectedCategory === 'fish' ? 'Ikan' : 'Kelinci'}`}
            </h2>
            <p className="text-muted-foreground">{filteredProducts.length} produk ditemukan</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                rating={product.rating}
                onAddToCart={handleAddToCart}
                onClick={() => console.log('Product clicked:', product.id)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <CartPanel
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          toast({
            title: "Checkout",
            description: "Fitur checkout akan segera tersedia!",
          });
        }}
      />
    </div>
  );
}

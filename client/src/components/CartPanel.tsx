import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartPanelProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity?: (itemId: string, quantity: number) => void;
  onRemoveItem?: (itemId: string) => void;
  onCheckout?: () => void;
}

export default function CartPanel({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartPanelProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 100000 ? 0 : 15000;
  const total = subtotal + shipping;

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={onClose}
        data-testid="overlay-cart"
      />

      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-card border-l z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold" data-testid="text-cart-title">
            Keranjang Belanja ({items.length})
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-cart">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground" data-testid="text-empty-cart">
              Keranjang belanja Anda masih kosong
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3" data-testid={`cart-item-${item.id}`}>
                    <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">{item.imageUrl}</span>
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <h3 className="text-sm font-medium line-clamp-2" data-testid={`text-item-name-${item.id}`}>
                        {item.productName}
                      </h3>
                      <p className="text-sm font-semibold text-primary" data-testid={`text-item-price-${item.id}`}>
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity?.(item.id, Math.max(1, item.quantity - 1))}
                            data-testid={`button-decrease-${item.id}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm" data-testid={`text-quantity-${item.id}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                            data-testid={`button-increase-${item.id}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive"
                          onClick={() => onRemoveItem?.(item.id)}
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span data-testid="text-subtotal">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ongkir</span>
                  <span data-testid="text-shipping">
                    {shipping === 0 ? 'GRATIS' : `Rp ${shipping.toLocaleString('id-ID')}`}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary" data-testid="text-total">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={onCheckout}
                data-testid="button-checkout"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

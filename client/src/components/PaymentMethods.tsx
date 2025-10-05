import { Card } from "@/components/ui/card";
import { CreditCard, Building2, Smartphone, Wallet, QrCode } from "lucide-react";
import { useState } from "react";

const paymentMethods = [
  { id: 'qris', name: 'QRIS', icon: QrCode, description: 'Scan & Pay' },
  { id: 'gopay', name: 'GoPay', icon: Wallet, description: 'E-Wallet' },
  { id: 'dana', name: 'DANA', icon: Wallet, description: 'E-Wallet' },
  { id: 'ovo', name: 'OVO', icon: Wallet, description: 'E-Wallet' },
  { id: 'shopeepay', name: 'ShopeePay', icon: Wallet, description: 'E-Wallet' },
  { id: 'bca', name: 'BCA', icon: Building2, description: 'Transfer Bank' },
  { id: 'mandiri', name: 'Mandiri', icon: Building2, description: 'Transfer Bank' },
  { id: 'bri', name: 'BRI', icon: Building2, description: 'Transfer Bank' },
  { id: 'bni', name: 'BNI', icon: Building2, description: 'Transfer Bank' },
  { id: 'seabank', name: 'SeaBank', icon: Building2, description: 'Transfer Bank' },
];

interface PaymentMethodsProps {
  onSelect?: (methodId: string) => void;
  selectedMethod?: string;
}

export default function PaymentMethods({ onSelect, selectedMethod }: PaymentMethodsProps) {
  const [selected, setSelected] = useState(selectedMethod);

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Pilih Metode Pembayaran</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = selected === method.id;
          
          return (
            <Card
              key={method.id}
              className={`p-4 cursor-pointer hover-elevate ${
                isSelected ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
              onClick={() => handleSelect(method.id)}
              data-testid={`card-payment-${method.id}`}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className={`p-3 rounded-full ${
                  isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm" data-testid={`text-payment-name-${method.id}`}>
                    {method.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{method.description}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

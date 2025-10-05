import CartPanel from '../CartPanel';

export default function CartPanelExample() {
  const mockItems = [
    {
      id: '1',
      productId: 'p1',
      productName: 'Royal Canin Maxi Adult Dog Food 15kg',
      price: 450000,
      quantity: 2,
      imageUrl: '🦴',
    },
    {
      id: '2',
      productId: 'p2',
      productName: 'Whiskas Ocean Fish 1.2kg',
      price: 85000,
      quantity: 1,
      imageUrl: '🐟',
    },
  ];

  return (
    <CartPanel
      isOpen={true}
      items={mockItems}
      onClose={() => console.log('Close cart')}
      onUpdateQuantity={(id, qty) => console.log('Update quantity:', id, qty)}
      onRemoveItem={(id) => console.log('Remove item:', id)}
      onCheckout={() => console.log('Checkout clicked')}
    />
  );
}

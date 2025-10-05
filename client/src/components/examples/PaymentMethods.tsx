import PaymentMethods from '../PaymentMethods';

export default function PaymentMethodsExample() {
  return (
    <div className="p-6">
      <PaymentMethods
        selectedMethod="qris"
        onSelect={(method) => console.log('Selected payment method:', method)}
      />
    </div>
  );
}

import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="w-64">
      <ProductCard
        id="1"
        name="Royal Canin Maxi Adult Dog Food 15kg - Makanan Anjing Dewasa"
        price={450000}
        originalPrice={550000}
        imageUrl="🦴"
        rating={4.8}
        reviewCount={234}
        sold={1245}
        onAddToCart={(id) => console.log('Add to cart:', id)}
        onClick={(id) => console.log('Product clicked:', id)}
      />
    </div>
  );
}

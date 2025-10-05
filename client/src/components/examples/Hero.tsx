import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      onShopNow={() => console.log('Shop now clicked')}
      onBrowseCategories={() => console.log('Browse categories clicked')}
    />
  );
}

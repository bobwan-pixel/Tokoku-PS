import CategoryBar from '../CategoryBar';

export default function CategoryBarExample() {
  return (
    <CategoryBar 
      selectedCategory="cat"
      onCategorySelect={(id) => console.log('Selected category:', id)}
    />
  );
}

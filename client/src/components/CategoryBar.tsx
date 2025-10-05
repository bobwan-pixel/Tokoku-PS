import { Cat, Dog, Bird, Fish, Rabbit, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", name: "Semua", icon: Home },
  { id: "dog", name: "Anjing", icon: Dog },
  { id: "cat", name: "Kucing", icon: Cat },
  { id: "bird", name: "Burung", icon: Bird },
  { id: "fish", name: "Ikan", icon: Fish },
  { id: "rabbit", name: "Kelinci", icon: Rabbit },
];

interface CategoryBarProps {
  onCategorySelect?: (categoryId: string) => void;
  selectedCategory?: string;
}

export default function CategoryBar({ onCategorySelect, selectedCategory = "all" }: CategoryBarProps) {
  const [selected, setSelected] = useState(selectedCategory);

  const handleSelect = (id: string) => {
    setSelected(id);
    onCategorySelect?.(id);
  };

  return (
    <div className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selected === category.id;
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "ghost"}
                size="sm"
                className="flex-shrink-0 gap-2"
                onClick={() => handleSelect(category.id)}
                data-testid={`button-category-${category.id}`}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

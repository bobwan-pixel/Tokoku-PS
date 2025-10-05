import { X, User, Package, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [, navigate] = useLocation();

  if (!isOpen) return null;

  const menuItems = [
    { 
      id: 'account', 
      name: 'Account', 
      icon: User, 
      action: () => {
        navigate('/account');
        onClose();
      }
    },
    { 
      id: 'lacak', 
      name: 'Lacak', 
      icon: Package, 
      action: () => {
        console.log('Lacak clicked');
        onClose();
      }
    },
    { 
      id: 'chat', 
      name: 'Chat', 
      icon: MessageCircle, 
      action: () => {
        console.log('Chat clicked');
        onClose();
      }
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
        onClick={onClose}
        data-testid="overlay-menu"
      />

      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold" data-testid="text-menu-title">
            Menu
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start gap-3"
                  onClick={item.action}
                  data-testid={`button-menu-${item.id}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        <Separator />
        
        <div className="p-4 text-xs text-muted-foreground text-center">
          © 2024 Tokoku
        </div>
      </div>
    </>
  );
}

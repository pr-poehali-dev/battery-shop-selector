import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Icon name="Zap" className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold gradient-text">PowerCell</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
          <a href="#selection" className="text-sm font-medium hover:text-primary transition-colors">Подбор</a>
          <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-xs flex items-center justify-center">3</span>
          </Button>
          <Button className="gradient-primary text-white hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            8 800 555-35-35
          </Button>
        </div>
      </div>
    </header>
  );
}

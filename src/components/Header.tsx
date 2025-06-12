
import { Button } from "@/components/ui/button";
import { Menu, X, Ghost } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Ghost className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">GhastHosting.com</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleScrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleScrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Notified
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleScrollToSection('features')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => handleScrollToSection('pricing')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleScrollToSection('about')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Get Notified
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

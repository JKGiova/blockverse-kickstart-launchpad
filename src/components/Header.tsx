
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleGetNotified = () => {
    navigate('/newsletter');
    setIsMenuOpen(false);
  };

  const handleJoinKickstarter = () => {
    window.open('https://www.kickstarter.com', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/60 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/')} className="text-xl font-bold hover:opacity-80 transition-opacity">
              GHAST<span className="nether-gradient bg-clip-text text-transparent">HOSTING</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleScrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => handleScrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </button>
            <Button
              onClick={handleGetNotified}
              variant="outline"
              className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-200 font-semibold"
            >
              Get Notified
            </Button>
            <Button 
              onClick={handleJoinKickstarter}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
              size="default"
            >
              Join Kickstarter
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/50 rounded-md transition-colors"
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
                className="text-muted-foreground hover:text-foreground transition-colors text-left font-medium py-2"
              >
                Features
              </button>
              <button 
                onClick={() => handleScrollToSection('pricing')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left font-medium py-2"
              >
                Pricing
              </button>
              <Button 
                onClick={handleGetNotified}
                variant="outline"
                className="w-full border-primary/20 hover:bg-primary/10 font-semibold"
              >
              Get Notified
              </Button>
              <Button 
                onClick={handleJoinKickstarter}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full shadow-lg font-semibold"
              >
                Join Kickstarter
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

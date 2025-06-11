
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MC</span>
              </div>
              <span className="text-xl font-bold">CraftHost</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The next generation of Minecraft server hosting. Built by gamers, for gamers. 
              Join our Kickstarter to be part of the revolution.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2 max-w-sm">
                <Input placeholder="Enter your email" className="bg-background" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 CraftHost. All rights reserved. Minecraft is a trademark of Mojang Studios.
          </p>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Youtube className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

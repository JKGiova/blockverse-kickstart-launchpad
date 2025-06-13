import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
      <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm">Coming Soon to Kickstarter</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Unleash the{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Nether's Power
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Blazing-fast Minecraft servers that harness the raw energy of the Nether. Built by gamers, for gamers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              onClick={() => window.open('https://www.kickstarter.com', '_blank')}
            >
              Join Kickstarter
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-200 font-semibold">
            <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">&lt; 1s</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-lg animate-float hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;

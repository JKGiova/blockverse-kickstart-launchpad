
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 mb-12">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-base font-medium">Coming Soon to Kickstarter</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            Unleash the{" "}
            <span className="hero-gradient bg-clip-text text-transparent block md:inline">
              Nether's Power
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Blazing-fast Minecraft servers that harness the raw energy of the Nether. Built by gamers, for gamers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
              onClick={() => window.open('https://www.kickstarter.com', '_blank')}
            >
              Join Kickstarter
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Play className="mr-3 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">99.9%</div>
              <div className="text-lg text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">&lt; 1s</div>
              <div className="text-lg text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">24/7</div>
              <div className="text-lg text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">∞</div>
              <div className="text-lg text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-lg animate-float hidden lg:block"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-secondary/20 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-accent/20 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;

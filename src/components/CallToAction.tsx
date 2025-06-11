
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-primary block">Minecraft Experience?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of gamers who are backing the future of Minecraft hosting. 
            Early supporters get exclusive perks and lifetime discounts!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Bell className="mr-2 w-5 h-5" />
              Get Notified on Launch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Join Our Discord
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Left to Launch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,341</div>
              <div className="text-sm text-muted-foreground">Early Supporters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$50K</div>
              <div className="text-sm text-muted-foreground">Funding Goal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

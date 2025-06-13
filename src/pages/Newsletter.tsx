
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Bell, Check } from "lucide-react";
import NewsletterHeader from "@/components/NewsletterHeader";
import Footer from "@/components/Footer";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsletterHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Stay Updated with{" "}
              <span className="hero-gradient bg-clip-text text-transparent">
                GhastHosting
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the first to know about our Kickstarter launch, exclusive updates, and early bird offers.
            </p>

            {/* Newsletter Form */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Join Our Newsletter</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    placeholder="Enter your email address" 
                    className="bg-background"
                    type="email"
                  />
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                    size="lg"
                  >
                    <Bell className="mr-2 w-4 h-4" />
                    Subscribe Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Updates</h3>
                <p className="text-muted-foreground">Be the first to know when we go live on Kickstarter</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusive Perks</h3>
                <p className="text-muted-foreground">Access to special offers and early bird pricing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Behind the Scenes</h3>
                <p className="text-muted-foreground">Development updates and insider information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Promise</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We respect your inbox. No spam, no daily emails, just important updates about GhastHosting. 
              You can unsubscribe at any time with a single click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                <span>Max 2 emails per month</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                <span>Easy unsubscribe</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-primary mr-2" />
                <span>No spam ever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      description: "Perfect for small groups",
      features: [
        "Up to 10 players",
        "2GB RAM",
        "20GB SSD Storage",
        "Basic DDoS Protection",
        "Plugin Support",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Popular",
      price: "$9.99",
      description: "Most popular choice",
      features: [
        "Up to 25 players",
        "4GB RAM",
        "50GB SSD Storage",
        "Advanced DDoS Protection",
        "Mod Support",
        "Priority Support",
        "Free Domain",
        "Automatic Backups"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "$19.99",
      description: "For large communities",
      features: [
        "Up to 50 players",
        "8GB RAM",
        "100GB SSD Storage",
        "Enterprise DDoS Protection",
        "Full Mod/Plugin Support",
        "Dedicated IP",
        "Custom Domain",
        "Daily Backups",
        "White-glove Setup"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Early bird pricing for Kickstarter backers. Get lifetime discounts!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col ${
                plan.popular ? 'border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                  onClick={() => window.open('https://www.kickstarter.com', '_blank')}
                >
                  Back on Kickstarter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

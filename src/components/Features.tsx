
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Gauge, HeadphonesIcon, Cpu, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Instant Server Deployment",
      description: "Get your Minecraft server running in under 60 seconds with our one-click deployment system."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "DDoS Protection",
      description: "Enterprise-grade security keeps your server safe from attacks and ensures stable gameplay."
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "High Performance",
      description: "Latest Intel processors and NVMe SSD storage deliver lag-free gaming experiences."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: "24/7 Expert Support",
      description: "Our Minecraft-savvy support team is always ready to help you with any issues."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Easy Mod Management",
      description: "Install popular modpacks and plugins with just a few clicks through our intuitive panel."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Network",
      description: "Servers located worldwide ensure low latency for players no matter where they are."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">CraftHost</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the most advanced Minecraft hosting platform with features that matter to gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

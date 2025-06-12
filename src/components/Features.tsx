
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Gauge, HeadphonesIcon, Cpu, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Instant Server Summoning",
      description: "Spawn your Minecraft server faster than a Ghast's fireball with our one-click deployment system."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Nether-Grade Protection",
      description: "Enterprise-level security shields your server from attacks like obsidian walls protect against explosions."
    },
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Blazing Performance",
      description: "Powered by the latest hardware, delivering performance hotter than Nether lava flows."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
      title: "24/7 Expert Support",
      description: "Our Minecraft-savvy support team watches over your server like a guardian spirit."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Easy Mod Enchantments",
      description: "Install popular modpacks and plugins with magical ease through our intuitive control panel."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Nether Portals",
      description: "Servers located worldwide ensure low latency connections no matter where your players roam."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Us</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've forged the most powerful Minecraft hosting platform in the fires of the Nether.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="mb-4 transition-transform duration-300">
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

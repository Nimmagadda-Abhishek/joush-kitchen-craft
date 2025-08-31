import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Award, 
  Users, 
  Leaf, 
  Shield, 
  Clock,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations, preserving the authentic taste of South India."
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "We source the finest natural ingredients directly from local farmers and trusted suppliers."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "FSSAI certified facility with strict quality control measures ensuring food safety and hygiene."
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "ISO 22000:2018 certified processes maintaining the highest standards in food production."
    }
  ];

  const milestones = [
    { year: "2017", title: "Founded", description: "Started with a passion for authentic South Indian flavors" },
    { year: "2017", title: "First Product Launch", description: "Introduced traditional murukku and pickles" },
    { year: "2024", title: "FSSAI Certification", description: "Achieved food safety certification" },
    { year: "2025", title: "Pan-India Delivery", description: "Expanded delivery across all major cities" },
    { year: "2025", title: "ISO Certification", description: "Achieved ISO 22000:2018 certification" },
    { year: "2025", title: "50,000+ Happy Customers", description: "Serving authentic flavors nationwide" }
  ];

  const team = [
    {
      name: "Priya Krishnan",
      role: "Founder & CEO",
      description: "A passionate food enthusiast from Chennai, dedicated to bringing authentic South Indian flavors to every home.",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Kumar",
      role: "Head Chef",
      description: "25+ years of experience in traditional South Indian cuisine, ensuring every recipe maintains its authentic taste.",
      image: "/placeholder.svg"
    },
    {
      name: "Meera Nair",
      role: "Quality Manager",
      description: "Food technology expert ensuring the highest quality standards and food safety protocols.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="hero-title">
              Bringing Authentic South Indian Flavors to Your Doorstep
            </h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Founded with a passion for preserving traditional recipes and sharing the rich culinary heritage 
              of South India with food lovers across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Journey Started in a Home Kitchen
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2017, Joshna Foods is a new-age food & beverage brand with a passion for bringing authentic flavors to modern tables. From hand-crafted snacks to traditional pickles and refreshing beverages, every product is made to deliver a taste that feels like home while meeting today’s standards of quality and hygiene.
                </p>
                <p>
                  The brand was envisioned by K.V. Ramana Rao Garu, a Mechanical Engineer with 20+ years of industrial expertise and the proud owner of Uday Group Industries. Known for building strong foundations in the construction industry, he now brings the same values of precision, reliability, and innovation into the world of food.
                </p>
                <p>
                  At Joshna Foods, we believe food is not just about eating—it’s about memories, culture, and togetherness. That’s why every recipe is crafted with care, ensuring that our customers enjoy pure flavors, uncompromised quality, and a touch of tradition in every bite.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Our kitchen" 
                className="rounded-2xl shadow-large w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to delivering 
              the final product to your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="product-card text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small home kitchen to serving customers across India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind JouhFoods, dedicated to bringing you 
              the finest authentic South Indian flavors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="product-card text-center">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">50,000+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">25+</div>
              <div className="text-primary-foreground/80">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Cities Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">4.8</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Experience Authentic Flavors?
            </h2>
            <p className="text-muted-foreground">
              Join thousands of satisfied customers who trust JoushFoods for 
              authentic South Indian snacks, pickles, and sweets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
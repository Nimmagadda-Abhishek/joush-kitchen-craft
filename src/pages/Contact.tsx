import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Headphones,
  Truck,
  Shield
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      subtitle: "Mon-Sat, 9AM-7PM",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@joushfoods.com", "orders@joushfoods.com"],
      subtitle: "We'll respond within 24h",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Food Street", "Chennai, Tamil Nadu 600001"],
      subtitle: "Mon-Fri, 10AM-6PM",
      color: "text-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: ["Available on website", "Quick responses"],
      subtitle: "Mon-Sat, 9AM-9PM",
      color: "text-orange-600"
    }
  ];

  const supportCategories = [
    {
      icon: Truck,
      title: "Order & Shipping",
      description: "Track orders, shipping info, delivery updates",
      topics: ["Order Status", "Shipping Delays", "Delivery Issues", "Returns"]
    },
    {
      icon: Shield,
      title: "Product Quality",
      description: "Quality concerns, freshness, packaging issues",
      topics: ["Quality Issues", "Freshness", "Packaging", "Ingredients"]
    },
    {
      icon: Headphones,
      title: "General Support",
      description: "Account help, payment issues, general inquiries",
      topics: ["Account Issues", "Payment Problems", "Website Help", "Bulk Orders"]
    }
  ];

  const faqs = [
    {
      question: "What are your delivery timings?",
      answer: "We deliver Monday to Saturday between 9 AM to 7 PM. Sunday deliveries are available in select cities."
    },
    {
      question: "Do you offer same-day delivery?",
      answer: "Yes, same-day delivery is available for orders placed before 12 PM in major cities like Chennai, Bangalore, and Hyderabad."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for unopened products. For quality issues, we provide full refund or replacement."
    },
    {
      question: "Are your products preservative-free?",
      answer: "Most of our traditional snacks and pickles are made without artificial preservatives, using natural preservation methods."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              We're Here to Help
            </h1>
            <p className="text-muted-foreground">
              Have questions about our products or need assistance with your order? 
              Our friendly customer support team is ready to help you.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">
                What can we help you with?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supportCategories.map((category, index) => (
                  <Card key={index} className="product-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {category.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-foreground">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs text-muted-foreground mt-1">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    * Customer support available via email 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <CheckCircle className="h-12 w-12 mx-auto" />
                <h3 className="font-semibold">Quick Response Guarantee</h3>
                <p className="text-sm text-primary-foreground/90">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="product-card">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Still have questions?
          </h2>
          <p className="text-muted-foreground">
            Can't find what you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Contact;
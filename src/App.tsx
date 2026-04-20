/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Car, 
  History, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import heroImage from './assets/marty-motors-1.png';
import aboutImage from './assets/marty-motors-2.png';

const services = [
  {
    title: "Restoration",
    description: "Full nut-and-bolt restorations for classic VW campervans. We bring history back to life with period-correct precision.",
    icon: History,
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Servicing & Repairs",
    description: "Expert maintenance for all vehicles, specializing in air-cooled engines and classic mechanical systems.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sales & Sourcing",
    description: "Looking for your dream bus? We source high-quality classic VWs and often have restored models for sale.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800"
  }
];

const stats = [
  { label: "Years Experience", value: "45+" },
  { label: "Restorations", value: "200+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Awards", value: "12" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif text-xl font-bold">
              M
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight">Martin Motors</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Restorations', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <Button size="sm" className="rounded-full px-6">Book a Service</Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  {['Services', 'Restorations', 'About', 'Contact'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="text-2xl font-heading font-bold hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                  <Button className="w-full mt-4 rounded-full">Book a Service</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src={heroImage} 
            alt="Martin Motors Classic VW Campervan" 
            className="w-full h-full object-cover md:object-contain object-center opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm uppercase tracking-widest">
              Established 1976
            </Badge>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Classic VW <br /> <span className="italic font-light">Specialists</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-light leading-relaxed">
              Expert restoration, servicing, and maintenance for your beloved classic campervans. 
              Preserving automotive heritage in Newtownards for over four decades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                View Restorations <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg bg-white/10 border-white/30 hover:bg-white/20 text-white">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Badge className="mb-4">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Comprehensive Care for <br /> Your Classic Vehicle
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md pb-2">
              From routine maintenance to complete structural restoration, we provide the highest standard of craftsmanship for all VW enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-none bg-secondary/50 hover:bg-secondary transition-colors duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group/btn">
                      Learn More <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-square rounded-3xl overflow-hidden bg-black/5">
                <img 
                  src={aboutImage} 
                  alt="Martin Motors Workshop and Services" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-3xl p-8 text-primary-foreground hidden lg:flex flex-col justify-center">
                <Star className="w-10 h-10 mb-6" />
                <p className="text-xl font-heading font-medium leading-snug">
                  "Over 50 years of combined experience delivering uncompromised excellence."
                </p>
              </div>
            </div>
            
            <div className="space-y-16">
              <div>
                <Badge className="mb-4">Our Story</Badge>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                  A Father & Son Team <br /> Since 1976
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    MartinMotors is a Newtownards-based Workshop specialising in wide-span vehicle servicing and maintenance. Shane and Marty O'Neill are the father and son team behind our success, continuing to drive the business forward to offer customers the most modern and friendly service available.
                  </p>
                  <p>
                    Established in 1976, the pair share over fifty years of experience between them. Shane trained as a mechanic with the Royal Artillery in Germany and was the Volkswagen foreman for MT Garage in Bangor for many years before branching out on his own. He brought his wealth of experience and knowledge to his new business, bringing Marty on board in later years to build the legacy.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">Philosophy & Mission</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Inspired by core values such as honesty, quality precision in engineering, and craftsmanship, we at MartinMotors strive to ensure our clients' expectations are exceeded in everything we do. This is underlined by our first-class team—this is not merely a job for us, this is what we love doing. 
                  </p>
                  <p>
                    <strong className="text-foreground font-semibold">When passion meets exceptional craftsmanship, satisfaction is guaranteed.</strong>
                  </p>
                  <p>
                    Our mission is to continue to be firmly established as a reliable, value-for-money service provider for local motorists in the Ards and Greater Belfast area. Whether it be a performance upgrade or a regular service, MartinMotors provides the same uncompromising levels of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-24 bg-border/50" />

          {/* Why Choose Us & Extra Info */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">The Martin Motors Difference</Badge>
              <h3 className="text-3xl font-heading font-bold mb-6">What Makes Us Stand Out</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We take enormous pride in our workshop and immense care with all of our customers' cars. Here is why you can trust you are in good hands:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "WHICH Recommended service centre",
                "Free collection & delivery (MOT prep)",
                "Free wash and clean with service/MOT",
                "Female friendly environment",
                "Free roadside assistance for customers"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-2xl border shadow-sm">
                  <div className="p-1.5 bg-primary/10 rounded-full text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                Ready to Start Your <br /> Restoration Journey?
              </h2>
              <p className="text-lg md:text-xl opacity-80 mb-12 font-light">
                Whether it's a simple service or a complete overhaul, we're here to help you keep your classic on the road for years to come.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg w-full sm:w-auto">
                  Get a Quote
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg border-primary-foreground/30 hover:bg-white/10 text-primary-foreground w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/50 pt-24 pb-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif text-lg font-bold">
                  M
                </div>
                <span className="font-heading text-2xl font-bold tracking-tight">Martin Motors</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                Newtownards' premier classic VW restoration and service centre. Preserving the past, engineering the future.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <Star className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#restorations" className="hover:text-primary transition-colors">Restorations</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>123 Main Street, Newtownards, <br /> BT23 4AA, Northern Ireland</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>028 9181 1234</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>info@martinmotors.co.uk</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Mon - Fri: 8:30 - 17:30</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>© 2024 Martin Motors. All rights reserved.</p>
            <p>Website by <a href="https://www.useyoured.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">UseYourEd</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Globe, Award, ThumbsUp, Users, CheckCircle } from "lucide-react";

export default function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-primary/70 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About ExploreX</h1>
            <p className="text-xl text-white/90 mb-8">
              We're passionate about bringing unforgettable travel experiences to adventurers around the world.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  ExploreX began in 2015 with a simple idea: to connect travelers with authentic local experiences around the world. Our founders, avid travelers themselves, were frustrated with cookie-cutter tours that missed the true essence of destinations.
                </p>
                <p className="text-muted-foreground">
                  Starting with just three destinations and a handful of partner agencies, we've grown to feature hundreds of carefully vetted tours across six continents. Our mission remains the same: to help travelers discover the world in meaningful ways through responsible tourism and authentic cultural exchange.
                </p>
              </div>
              <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2670&auto=format&fit=crop" 
                  alt="Our Story" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-8">
              We believe travel has the power to transform lives, broaden perspectives, and create positive change in the world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Cultures</h3>
                <p className="text-muted-foreground">
                  Creating meaningful exchanges between travelers and local communities around the world.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Promote Quality</h3>
                <p className="text-muted-foreground">
                  Upholding the highest standards for our tour partners and experiences we offer.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Sustainability</h3>
                <p className="text-muted-foreground">
                  Encouraging responsible travel practices that benefit both communities and environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              We're a diverse group of travel enthusiasts dedicated to making your adventures unforgettable.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[
              {
                name: "Sarah Johnson",
                position: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"
              },
              {
                name: "Michael Chen",
                position: "Chief Travel Officer",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop"
              },
              {
                name: "Elena Rodriguez",
                position: "Partnerships Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2622&auto=format&fit=crop"
              },
              {
                name: "David Okafor",
                position: "Customer Experience",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-md group"
                variants={fadeInUp}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Why Travelers Choose Us</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Curated Experiences",
                  description: "We personally vet every tour and agency partner to ensure the highest quality experiences."
                },
                {
                  title: "24/7 Support",
                  description: "Our dedicated team is available around the clock to assist with any issues or questions during your travels."
                },
                {
                  title: "Local Expertise",
                  description: "We partner with knowledgeable local guides who provide authentic insights into destinations."
                },
                {
                  title: "Best Price Guarantee",
                  description: "Find the same tour for a lower price? We'll match it and give you an additional discount."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

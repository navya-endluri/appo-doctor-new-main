import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Clock, Shield, Users, Heart, Brain, Baby, Bone } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const specialties = [
  { name: "Cardiology", icon: Heart, color: "text-red-500" },
  { name: "Dermatology", icon: Users, color: "text-orange-500" },
  { name: "Neurology", icon: Brain, color: "text-purple-500" },
  { name: "Pediatrics", icon: Baby, color: "text-blue-500" },
  { name: "Orthopedics", icon: Bone, color: "text-green-500" },
];

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 127,
    experience: 15,
    fee: 150,
    available: true,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 94,
    experience: 12,
    fee: 120,
    available: true,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 156,
    experience: 18,
    fee: 130,
    available: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical consultation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Book Trusted Doctors Near You
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Find experienced specialists, book appointments instantly, and take control of your health journey.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 bg-white p-3 rounded-xl shadow-xl max-w-2xl">
              <Input 
                placeholder="Search doctors, specialties..." 
                className="flex-1 border-0 focus-visible:ring-0"
              />
              <Button variant="hero" size="lg" className="sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Book appointments anytime, anywhere with our easy-to-use platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Verified Doctors</h3>
                <p className="text-sm text-muted-foreground">
                  All our doctors are verified professionals with proven credentials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Trusted by Thousands</h3>
                <p className="text-sm text-muted-foreground">
                  Join thousands of satisfied patients who trust us with their health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Browse by Specialty</h2>
            <p className="text-lg text-muted-foreground">
              Find the right specialist for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {specialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <Card key={specialty.name} className="hover:shadow-lg transition-smooth cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-3 ${specialty.color} group-hover:scale-110 transition-smooth`} />
                    <h3 className="font-semibold">{specialty.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Doctors</h2>
            <p className="text-lg text-muted-foreground">
              Meet our top-rated healthcare professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join Appointy today and experience hassle-free healthcare appointment booking.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

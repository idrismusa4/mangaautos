"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, PenTool as Tool, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  const featuredCars = [
    {
      id: "1",
      name: "2024 Mercedes-Benz S-Class",
      price: "$115,000",
      image: "https://images.unsplash.com/photo-1622200284414-a1f0b23a0d86?auto=format&fit=crop&q=80&w=1024",
      category: "Luxury",
    },
    {
      id: "2",
      name: "2024 BMW M8 Gran Coupe",
      price: "$130,000",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1024",
      category: "Performance",
    },
    {
      id: "3",
      name: "2024 Porsche 911 GT3",
      price: "$175,000",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1024",
      category: "Sports",
    },
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Certified Pre-Owned",
      description: "Rigorous inspection and certification process",
    },
    {
      icon: <Tool className="h-8 w-8" />,
      title: "Service Center",
      description: "State-of-the-art maintenance facility",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in customer service",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section with Video */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/demo.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="space-y-6 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Luxury & Performance
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Experience the finest collection of premium vehicles
              </p>
              <Link href="/vehicles">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Inventory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Vehicles Grid */}
        <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Vehicles</h2>
            <Link href="/vehicles">
              <Button variant="outline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Link key={car.id} href={`/vehicles/${car.id}`}>
                <Card className="group cursor-pointer overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                          {car.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{car.name}</h3>
                      <p className="text-primary font-bold text-lg">{car.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Experience Luxury</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
                alt="Luxury Car"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
                alt="Sports Car"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
                alt="Showroom"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                alt="Interior"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
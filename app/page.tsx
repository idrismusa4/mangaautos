"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, PenTool as Tool, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Correct import
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  const featuredCars = [
    {
      id: "1",
      name: "2016 Mercedes-Benz 63s AMG",
      price: "$78,000,000",
      image: "/c63s.jpg",
      category: "Luxury",
    },
    {
      id: "2",
      name: "2024 Lexus ES350",
      price: "N325,000,000",
      image: "/lexus suv.jpg",
      category: "Performance",
    },
    {
      id: "3",
      name: "2018 Ford Mustang",
      price: "N31,000,000",
      image: "/ford mustang.jpg",
      category: "Sports",
    },
    {
      id: "7",
      name: "2024 Lexus is300",
      price: "N75,000,000",
      image: "/is3002024.jpg",
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
        {/* Hero Section with Image */}
        <section className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="https:/MBS.jpg"
            alt="Luxury Car"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="space-y-6 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                MBS AUTOMOBILES
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
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={1024}
                        height={768}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
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
      </main>
    </>
  );
}

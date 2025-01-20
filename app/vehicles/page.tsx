"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Vehicles() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const vehicles = [
    {
      id: "1",
      name: "2016 Mercedes-Benz C63s",
      price: "N78,000000",
      image: "/c63s.jpg",
      category: "Luxury",
    },
    {
      id: "2",
      name: "2024 Lexus LX600 Signature",
      price: "N325,000,000",
      image: "/lexus suv.jpg",
      category: "Luxury",
    },
    {
      id: "3",
      name: "2018 Ford Mustang",
      price: "N31,500,000",
      image: "/ford mustang.jpg",
      category: "Sports",
    },
    {
      id: "4",
      name: "2019 lexus ES350",
      price: "N48,500,000",
      image: "/lexus es350.jpg",
      category: "Sports",
    },
    {
      id: "5",
      name: "2024 camry SE",
      price: "N98,500,000",
      image: "/2024camry.jpg",
      category: "luxury",
    },
    {
      id: "6",
      name: "2017 dodge challenger tunned",
      price: "N48,500,000",
      image: "/dodge challenger 2017.jpg",
      category: "Sports",
    },
    {
      id: "7",
      name: "2024 Lexus is300",
      price: "N75,000,000",
      image: "/is3002024.jpg",
      category: "Sports",
    },
    {
      id: "8",
      name: "2017 c43 AMG coupe",
      price: "N69,000,000",
      image: "/c43amg.jpg",
      category: "Sports",
    },
    
  ];

  const filteredVehicles = vehicles
    .filter(v => filter === "all" || v.category.toLowerCase() === filter)
    .filter(v => 
      searchQuery === "" || 
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.price.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-4xl font-bold">Available Vehicles</h1>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-[250px]"
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No vehicles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
                  <Card className="group cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                            {vehicle.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-2">{vehicle.name}</h3>
                        <p className="text-primary font-bold text-lg">{vehicle.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
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
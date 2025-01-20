import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

// This data should ideally come from a CMS or database
const vehicles = [
  {
    id: "1",
    name: "2016 Mercedes-Benz C63s",
    price: "N78,000,000",
    category: "Performance",
    description: "Experience unparalleled luxury & performance with the  Mercedes-Benz C63 AMG. This flagship sedan sets new standards in automotive excellence.",
    specs: {
      engine: "4.0L V8 Biturbo",
      power: "496 hp",
      acceleration: "0-60 mph in 4.4s",
      transmission: "9-speed automatic",
      drivetrain: "4MATIC rare-Wheel Drive",
    },
    images: [
      "/c63s.jpg",
      "/c632.jpg",
      "/cbbs.jpg",
    ],
  },
  {
    id: "2",
    name: "2024 Lexus LX600 Signature",
    price: "N325,000,000",
    category: "Luxury",
    description: "The Lexus lx600 combines exceptional performance with luxurious comfort. Experience the perfect blend of power and sophistication.",
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "617 hp",
      acceleration: "0-60 mph in 4.8s",
      transmission: "8-speed automatic",
      drivetrain: " all wheel Drive All-Wheel Drive",
    },
    images: [
      "/lexus suv.jpg",
      "/lexusinterior.jpg",
      "/lexuxinterior2.jpg",
    ],
  },
  {
    id: "3",
    name: "2018 Ford Mustang",
    price: "N31,500,000",
    category: "Sports",
    description: "The 2018 Ford Mustang EcoBoost is a stylish and powerful sports coupe that offers excellent performance and modern features.",
    specs: {
      engine: "V4 eco boost",
      power: "265 hp",
      acceleration: "0-60 mph in 6.2s",
      transmission: "7-speed PDK",
      drivetrain: "Rear-Wheel Drive",
    },
    images: [
      "/ford mustang.jpg",
      "/fordinterior1.jpg",
      "/fordback.jpg",
    ],
  },
  {
    id: "4",
    name: "2019 Lexus ES350",
    price: "N48,500,000",
    category: "Sports",
    description: "The 2019 Lexus ES 350 is a front-wheel-drive luxury sedan powered by a 3.5-liter V6 engine that delivers 302 horsepower at 6,600 rpm and 267 lb-ft of torque at 4,700 rpm.",
    specs: {
      engine: "4.0L Flat-Six",
      power: "302 hp",
      acceleration: "0-60 mph in 6.6s",
      transmission: "8-speed direct-drive trainshift automtic",
      drivetrain: "front-Wheel Drive",
    },
    images: [
      "/lexus es350.jpg",
      "/es350 interior.jpg",
      "/lxsback.jpg",
    ],
  },
  {
    id: "5",
    name: "2024 Camry SE",
    price: "N98,500,000",
    category: "Luxury",
    description: "The 2024 Toyota Camry SE is a sleek and sporty midsize sedan that combines comfort, performance, and reliability. Positioned as a higher trim in the Camry lineup, the SE features bold styling cues and enhanced driving dynamics.",
    specs: {
      engine: "2.5L 4-cylinder engine,",
      power: "203 hp",
      acceleration: "0-60 mph in 6.6s",
      transmission: "8-speed automtic transmission",
      drivetrain: "front-Wheel Drive",
    },
    images: [
      "/2024camry.jpg",
      "/camry interior.jpg",
      "/camryback.jpg",
    ],
  },
  {
    id: "6",
    name: "2017 dodge challenger",
    price: "N38,500,000",
    category: "Sports",
    description: "The 2019 Lexus ES 350 is a front-wheel-drive luxury sedan powered by a 3.5-liter V6 engine that delivers 302 horsepower at 6,600 rpm and 267 lb-ft of torque at 4,700 rpm.",
    specs: {
      engine: "4.0L Flat-Six",
      power: "302 hp",
      acceleration: "0-60 mph in 6.6s",
      transmission: "8-speed direct-drive trainshift automtic",
      drivetrain: "front-Wheel Drive",
    },
    images: [
      "/dodge challenger 2017.jpg",
      "/DG2.jpg",
      "/dodgeinterior.jpg",
    ],
  },
  {
    id: "7",
    name: "2024  is300 Fsport",
    price: "N75,000,000",
    category: "Sports",
    description: "The 2019 Lexus ES 350 is a front-wheel-drive luxury sedan powered by a 3.5-liter V6 engine that delivers 302 horsepower at 6,600 rpm and 267 lb-ft of torque at 4,700 rpm.",
    specs: {
      engine: "4.0L Flat-Six",
      power: "302 hp",
      acceleration: "0-60 mph in 6.6s",
      transmission: "8-speed direct-drive trainshift automtic",
      drivetrain: "front-Wheel Drive",
    },
    images: [
      "/is3002024.jpg",
      "/is300int1.jpg",
      "/is300int2.jpg",
    ],
  },
  {
    id: "8",
    name: "2017  Mercedes c43 amg",
    price: "69,000,000",
    category: "Sports",
    description: "The 2019 Lexus ES 350 is a front-wheel-drive luxury sedan powered by a 3.5-liter V6 engine that delivers 302 horsepower at 6,600 rpm and 267 lb-ft of torque at 4,700 rpm.",
    specs: {
      engine: "4.0L v6",
      power: "310 hp",
      acceleration: "0-60 mph in 4.6s",
      transmission: "8-speed direct-drive trainshift automtic",
      drivetrain: "front-Wheel Drive",
    },
    images: [
      "/c43amg.jpg",
      "/c43int1.jpg",
      "/c43int2.jpg",
    ],
  },
];

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export default function VehicleDetail({ params }: { params: { id: string } }) {
  const vehicle = vehicles.find(v => v.id === params.id) || vehicles[0];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/vehicles">
              <Button variant="ghost" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Vehicles
              </Button>
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {vehicle.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${vehicle.name} - View ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{vehicle.name}</h1>
                <p className="text-2xl text-primary font-bold">{vehicle.price}</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Specifications</CardTitle>
                  <CardDescription>Technical details and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(vehicle.specs).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm text-muted-foreground capitalize">{key}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-muted-foreground">{vehicle.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" /> Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
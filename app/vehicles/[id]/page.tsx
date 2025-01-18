import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

// This data should ideally come from a CMS or database
const vehicles = [
  {
    id: "1",
    name: "2024 Mercedes-Benz S-Class",
    price: "$115,000",
    category: "Luxury",
    description: "Experience unparalleled luxury with the all-new Mercedes-Benz S-Class. This flagship sedan sets new standards in automotive excellence.",
    specs: {
      engine: "4.0L V8 Biturbo",
      power: "496 hp",
      acceleration: "0-60 mph in 4.4s",
      transmission: "9-speed automatic",
      drivetrain: "4MATIC All-Wheel Drive",
    },
    images: [
      "https://images.unsplash.com/photo-1622200284414-a1f0b23a0d86?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1024",
    ],
  },
  {
    id: "2",
    name: "2024 BMW M8 Gran Coupe",
    price: "$130,000",
    category: "Performance",
    description: "The BMW M8 Gran Coupe combines exceptional performance with luxurious comfort. Experience the perfect blend of power and sophistication.",
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "617 hp",
      acceleration: "0-60 mph in 3.1s",
      transmission: "8-speed automatic",
      drivetrain: "xDrive All-Wheel Drive",
    },
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1627454819213-0e8d8a69c48f?auto=format&fit=crop&q=80&w=1024",
    ],
  },
  {
    id: "3",
    name: "2024 Porsche 911 GT3",
    price: "$175,000",
    category: "Sports",
    description: "The Porsche 911 GT3 represents the pinnacle of sports car engineering. Pure driving pleasure meets race-bred performance.",
    specs: {
      engine: "4.0L Flat-Six",
      power: "502 hp",
      acceleration: "0-60 mph in 3.2s",
      transmission: "7-speed PDK",
      drivetrain: "Rear-Wheel Drive",
    },
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&q=80&w=1024",
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
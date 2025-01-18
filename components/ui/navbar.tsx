"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Menu, Phone, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Vehicles", href: "/vehicles" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6" />
            <span className="font-bold text-xl">Manga Autos</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Contact Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prestige Motors</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Luxury Lane, Beverly Hills, CA 90210
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@prestigemotors.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/vehicles" className="hover:text-primary transition-colors">
                  Available Vehicles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Vehicle Sales</li>
              <li>Financing Options</li>
              <li>Premium Maintenance</li>
              <li>Trade-In Evaluation</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prestige Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
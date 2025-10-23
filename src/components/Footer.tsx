import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary p-2">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Appointy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making healthcare accessible. Book appointments with top doctors in your area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cardiology</li>
              <li>Dermatology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@appointy.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Healthcare Ave, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Appointy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

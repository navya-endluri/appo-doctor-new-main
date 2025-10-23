import { Button } from "@/components/ui/button";
import { Stethoscope, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-primary p-2">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Appointy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Home
            </Link>
            <Link to="/doctors" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Find Doctors
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t">
            <Link to="/" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/doctors" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Find Doctors
            </Link>
            <Link to="/about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button variant="default" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  experience: number;
  fee: number;
  available: boolean;
}

const DoctorCard = ({ id, name, specialty, image, rating, reviews, experience, fee, available }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-smooth">
      <CardContent className="p-0">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          {available && (
            <Badge className="absolute top-3 right-3 bg-accent">
              Available Today
            </Badge>
          )}
        </div>
        <div className="p-6 space-y-3">
          <div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{experience} years experience</span>
            <span className="font-semibold text-primary">${fee}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/doctor/${id}`} className="w-full">
          <Button className="w-full" variant="default">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;

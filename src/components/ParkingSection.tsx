'use client';

import { Car, Bike, MapPin, Users } from 'lucide-react';

export interface ParkingArea {
  id: string;
  name: string;
  type: string;
  location: string;
  icon: React.ReactNode;
  description: string;
}

export const parkingData: ParkingArea[] = [
  {
    id: "area-a",
    name: "Parking Area A",
    type: "Motorcycles & Scooters",
    location: "Basement Level B1",
    icon: <Bike className="w-8 h-8" />,
    description: "Secure underground parking for motorcycles and scooters. Available from 7:30 AM with staff assistance."
  },
  {
    id: "area-b",
    name: "Parking Area B",
    type: "Cars & Coaches",
    location: "Outdoor Zone (Level 0)",
    icon: <Car className="w-8 h-8" />,
    description: "Spacious outdoor parking for personal cars and coach vehicles. Well-lit and monitored throughout the event."
  },
  {
    id: "entrance",
    name: "Main Entrance",
    type: "Drop-off Point",
    location: "Gate #2",
    icon: <MapPin className="w-8 h-8" />,
    description: "Primary vehicle drop-off and pickup location. Reserved lanes for VIP guests and event staff."
  },
  {
    id: "staff",
    name: "Assistance & Support",
    type: "Parking Staff",
    location: "All Zones",
    icon: <Users className="w-8 h-8" />,
    description: "Trained parking attendants stationed at each area to provide directions and assistance. Questions? Ask any staff member."
  }
];

export function ParkingSection() {
  return (
    <section className="section-wrapper bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12 animate-fade-in-up">
          Parking & Transportation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {parkingData.map((area) => (
            <div
              key={area.id}
              className="bg-gradient-to-br from-cream to-white border-2 border-navy/10 p-6 rounded-lg hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="text-gold flex-shrink-0 mt-1">
                  {area.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-navy font-bold mb-1">
                    {area.name}
                  </h3>
                  <p className="text-sm font-semibold text-gold uppercase tracking-wide mb-2">
                    {area.type}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    📍 {area.location}
                  </p>
                  <p className="text-gray-700">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional parking guidelines */}
        <div className="bg-gradient-to-r from-navy/5 to-gold/5 border-l-4 border-gold p-6 rounded-lg">
          <h3 className="font-serif text-xl text-navy font-bold mb-3">
            Important Parking Guidelines
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Arrival recommended: 7:30 AM (ceremony starts at 8:00 AM)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              <span>All parking is complimentary for event attendees</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              <span>Valid ID or invitation card required for parking entry</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              <span>24-hour security monitoring and camera coverage</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              <span>For accessibility needs, contact event coordinator in advance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { MapPin, Navigation, Clock, AlertCircle } from "lucide-react";

export interface DirectionsData {
  userAddress: string;
  schoolAddress: string;
  estimatedTime: string;
  distance: string;
  mapUrl: string;
}

const SCHOOL_ADDRESS =
  "Khu Công nghệ cao TP.HCM, Đường D1, P. Long Thạnh Mỹ, Thành phố Hồ Chí Minh";
const SCHOOL_COORDS = "10.8408075,106.8088987";

export function DirectionsSection() {
  const [userAddress, setUserAddress] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [estimatedTime, setEstimatedTime] = useState<string>("45");
  const [distance, setDistance] = useState<string>("12.5");
  const [mapUrl, setMapUrl] = useState<string>("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddress(e.target.value);
  };

  const generateGoogleMapsUrl = (address: string) => {
    // Encode the address for URL
    const encodedUserAddress = encodeURIComponent(address);
    const encodedSchoolAddress = encodeURIComponent(SCHOOL_ADDRESS);
    return `https://www.google.com/maps/dir/${encodedUserAddress}/${encodedSchoolAddress}/data=!4m14!4m13!1m5!1m1!1s!2m2!1d0!2d0!1m5!1m1!1s0x3175274f07046f89:0x3a9cb196c5e1a7de!2m2!1d106.8088987!2d10.8408075`;
  };

  const calculateArrivalTime = (
    userAddress: string
  ): { time: string; minutes: number } => {
    // Simulated time calculation - in a real app, you'd use Google Maps API
    // This gives a reasonable estimate between 30-60 minutes
    const baseTime = 45;
    const variation = Math.floor(Math.random() * 30) - 15;
    const minutes = Math.max(30, baseTime + variation);

    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return { time: timeString, minutes };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userAddress.trim()) {
      alert("Please enter your address");
      return;
    }

    // Generate map URL
    const url = generateGoogleMapsUrl(userAddress);
    setMapUrl(url);

    // Calculate estimated time (simulated)
    const { minutes } = calculateArrivalTime(userAddress);
    setEstimatedTime(minutes.toString());
    setDistance((12.5 + Math.random() * 10).toFixed(1));

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserAddress("");
    setIsSubmitted(false);
    setMapUrl("");
    setEstimatedTime("45");
    setDistance("12.5");
  };

  return (
    <section className="section-wrapper bg-gradient-to-b from-cream to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4 animate-fade-in-up">
          Get Directions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Enter your current address to calculate the route to our graduation
          ceremony venue and see estimated arrival time.
        </p>

        {!isSubmitted ? (
          // Address Input Form
          <div className="bg-white rounded-lg border-2 border-gold/30 p-8 shadow-lg hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  Your Current Address <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  value={userAddress}
                  onChange={handleAddressChange}
                  placeholder="e.g., 352 Nguyễn Oanh, Phường 17, Gò Vấp, Hồ Chí Minh City"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 text-gray-700 placeholder-gray-400"
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 Tip: Be as specific as possible with your address for
                  accurate directions
                </p>
              </div>

              <div className="bg-gradient-to-r from-gold/10 to-navy/10 border border-gold/20 rounded-lg p-4">
                <p className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>School Address:</strong> {SCHOOL_ADDRESS}
                  </span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-navy font-bold py-3 px-6 rounded-lg transition-all duration-300 hover-lift flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Calculate Route
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Results Display
          <div className="space-y-6">
            {/* Route Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Distance Card */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-lg border border-gold/30 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-gold" />
                  <h3 className="font-serif text-xl text-navy font-semibold">
                    Distance
                  </h3>
                </div>
                <p className="text-3xl font-bold text-gold">{distance} km</p>
                <p className="text-sm text-gray-600 mt-2">From your location</p>
              </div>

              {/* Time Card */}
              <div className="bg-gradient-to-br from-navy/10 to-navy/5 p-6 rounded-lg border border-navy/30 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-navy" />
                  <h3 className="font-serif text-xl text-navy font-semibold">
                    Est. Travel Time
                  </h3>
                </div>
                <p className="text-3xl font-bold text-navy">
                  {estimatedTime} min
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Normal traffic conditions
                </p>
              </div>

              {/* Arrival Time Card */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-300 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="font-serif text-xl text-navy font-semibold">
                    Suggested Departure
                  </h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">7:00 AM</p>
                <p className="text-sm text-gray-600 mt-2">
                  To arrive by 8:00 AM check-in
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl hover-lift border-2 border-gold/20">
              <iframe
                title="Route to Graduation Ceremony"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2503907270027!2d106.8088987!3d10.8408075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175274f07046f89%3A0x3a9cb196c5e1a7de!2sKhu%20C%C3%B4ng%20ngh%E1%BB%87%20cao%20TP.HCM!5e0!3m2!1sen!2sus!4v1700000000"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">
                  Graduation Ceremony Venue Location
                </p>
              </div>
            </div>

            {/* Personalized Timeline */}
            <div className="bg-white border-2 border-gold/30 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-navy font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-gold" />
                Your Personalized Timeline
              </h3>

              <div className="space-y-4">
                {/* Departure */}
                <div className="flex gap-4">
                  <div className="w-24 text-right pt-1">
                    <p className="font-bold text-navy">7:00 AM</p>
                    <p className="text-xs text-gray-500">(Suggested)</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-3 h-3 bg-gold rounded-full mt-1.5 -ml-3"></div>
                    <div className="bg-gold/10 border-l-4 border-gold p-4 rounded ml-2 mt-2">
                      <p className="font-semibold text-navy">
                        Depart from Your Location
                      </p>
                      <p className="text-sm text-gray-600">📍 {userAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Travel */}
                <div className="flex gap-4">
                  <div className="w-24 text-right pt-1">
                    <p className="font-bold text-navy">
                      7:{String(parseInt(estimatedTime)).padStart(2, "0")} AM
                    </p>
                    <p className="text-xs text-gray-500">
                      ({estimatedTime} min drive)
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 -ml-3"></div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded ml-2 mt-2">
                      <p className="font-semibold text-navy">Arrive at Venue</p>
                      <p className="text-sm text-gray-600">
                        🚗 {distance} km travel
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event Starts */}
                <div className="flex gap-4">
                  <div className="w-24 text-right pt-1">
                    <p className="font-bold text-navy">8:00 AM</p>
                    <p className="text-xs text-gray-500">(Buffer time)</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 -ml-3"></div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded ml-2 mt-2">
                      <p className="font-semibold text-navy">Check-in Starts</p>
                      <p className="text-sm text-gray-600">
                        ✓ Receive guest card & souvenirs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rest of schedule continues */}
                <div className="flex gap-4">
                  <div className="w-24 text-right pt-1">
                    <p className="font-bold text-navy">9:00 AM</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 -ml-3"></div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded ml-2 mt-2">
                      <p className="font-semibold text-navy">
                        Official Ceremony Begins
                      </p>
                      <p className="text-sm text-gray-600">
                        🎓 Main event starts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Important Reminders
                  </h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>
                      ✓ Depart earlier to account for unexpected traffic delays
                    </li>
                    <li>
                      ✓ Bring your invitation card or valid ID for parking entry
                    </li>
                    <li>✓ Wear appropriate formal attire</li>
                    <li>
                      ✓ Contact event coordinator if you have accessibility
                      needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-navy font-semibold rounded-lg transition-all duration-300"
              >
                Change Address
              </button>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-navy font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover-lift"
              >
                <Navigation className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

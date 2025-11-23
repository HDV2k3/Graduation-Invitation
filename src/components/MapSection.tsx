"use client";

export function MapSection() {
  return (
    <section className="section-wrapper bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12 animate-fade-in-up">
          Location Map
        </h2>

        {/* Google Maps Placeholder */}
        <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl hover-lift">
          <iframe
            title="Riverside Convention Center Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.126430353351!2d106.78303267580561!3d10.85573815798989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2sHUTECH%20-%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20C%C3%B4ng%20ngh%E1%BB%87%20TP.HCM%20(Thu%20Duc%20Campus)!5e0!3m2!1svi!2svi!4v1700000000000!5m2!1svi!2svi"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay with event details */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white font-semibold text-lg">
              Grand Hall – Riverside Convention Center
            </p>
            <p className="text-gray-200">
              125 Harmony Avenue, Riverbridge City
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg border border-gold/20 shadow-md">
            <h3 className="font-serif text-xl text-navy font-bold mb-3">
              Getting There
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                🚗 <strong>By Car:</strong> Exit 42 from Highway 9, follow signs
                to Harmony Avenue
              </li>
              <li>
                🚌 <strong>By Public Transport:</strong> Take Metro Line 5 to
                Riverside Station
              </li>
              <li>
                🚕 <strong>Taxi/Rideshare:</strong> Ask driver for Riverside
                Convention Center
              </li>
              <li>
                🅿️ <strong>Parking:</strong> Free parking available at venue
                (see Parking section)
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gold/20 shadow-md">
            <h3 className="font-serif text-xl text-navy font-bold mb-3">
              Contact Information
            </h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold text-gold">Event Coordinator</p>
                <p>Dr. Emily Richardson</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-gold">Venue Contact</p>
                <p>Riverside Convention Center</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

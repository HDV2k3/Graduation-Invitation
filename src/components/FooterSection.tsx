"use client";

import { Heart, Mail, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">
              Graduation Ceremony
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A celebration of achievement, growth, and the promising futures of
              our remarkable graduates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#banner" className="hover:text-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#graduate" className="hover:text-gold transition">
                  Graduate Info
                </a>
              </li>
              <li>
                <a href="#event" className="hover:text-gold transition">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-gold transition">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#parking" className="hover:text-gold transition">
                  Parking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Get in Touch</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a
                  href="mailto:events@university.edu"
                  className="hover:text-gold transition"
                >
                  events@university.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-gold transition"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gold/30 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Graduation Ceremony. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-gold" /> for our graduates
          </p>
        </div>
      </div>
    </footer>
  );
}

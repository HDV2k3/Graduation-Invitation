'use client';

import { CheckCircle, Download } from 'lucide-react';

export function ActionSection() {
  const handleRSVP = () => {
    alert('Thank you for your interest! Please fill out the RSVP form below or contact the event coordinator.');
    // In a real app, this would navigate to a form or open a modal
  };

  const handleDownloadPDF = () => {
    alert('PDF download feature coming soon. Please check back closer to the event date.');
    // In a real app, this would trigger a PDF download
  };

  return (
    <section className="section-wrapper bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12 animate-fade-in-up">
          Confirm Your Attendance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* RSVP Button */}
          <button
            onClick={handleRSVP}
            className="group relative px-8 py-12 bg-gradient-to-br from-gold to-gold/90 text-navy rounded-lg hover-lift shadow-lg overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-3">
              <CheckCircle className="w-12 h-12" />
              <h3 className="font-serif text-2xl font-bold">RSVP Now</h3>
              <p className="text-sm">Confirm your attendance</p>
              <span className="text-xs font-semibold uppercase tracking-wider mt-2">Click to respond</span>
            </div>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownloadPDF}
            className="group relative px-8 py-12 bg-gradient-to-br from-navy to-navy/90 text-white rounded-lg hover-lift shadow-lg overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Download className="w-12 h-12" />
              <h3 className="font-serif text-2xl font-bold">Download PDF</h3>
              <p className="text-sm">Get invitation details</p>
              <span className="text-xs font-semibold uppercase tracking-wider mt-2">Save for later</span>
            </div>
          </button>
        </div>

        {/* RSVP Form */}
        <div className="bg-white border-2 border-gold/30 p-8 rounded-lg">
          <h3 className="font-serif text-2xl text-navy font-bold mb-6">
            RSVP Form
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Guests <span className="text-gold">*</span>
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                  required
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Dietary Preferences (Optional)
              </label>
              <textarea
                placeholder="Let us know about any dietary restrictions or preferences..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              ></textarea>
            </div>

            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded accent-gold"
                  required
                />
                <span className="text-gray-700">
                  I confirm my attendance and agree to the event terms
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-navy font-bold py-3 px-6 rounded-lg transition-all duration-300 hover-lift"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

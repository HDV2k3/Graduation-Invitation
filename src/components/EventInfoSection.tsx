"use client";

import { Calendar, MapPin, Clock } from "lucide-react";

export interface EventInfo {
  venue: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
}

export const eventData: EventInfo = {
  venue: "Trung tâm Đào tạo Nhân lực chất lượng cao HUTECH",
  location:
    "Phân khu Đào tạo E1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP.HCM",
  date: "January 20, 2025",
  startTime: "10:30 AM",
  endTime: "Over Night",
  description:
    "Hãy cùng chúng tôi tham dự một buổi lễ đáng nhớ, ghi nhận những thành tựu, sự trưởng thành và khởi đầu cho những tương lai tươi sáng. Buổi lễ danh giá này sẽ tôn vinh những thành tựu của các cựu sinh viên và đánh dấu sự khởi đầu cho hành trình sự nghiệp của họ.",
};

export function EventInfoSection() {
  return (
    <section className="section-wrapper bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-4 animate-fade-in-up">
          Required Event Details
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {eventData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Venue Card */}
          <div className="bg-gradient-to-br from-gold/10 to-navy/10 p-8 rounded-lg hover-lift border border-gold/20">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-navy mb-2 font-semibold">
                  Hutech University
                </h3>
                <p className="font-semibold text-navy mb-1">
                  {eventData.venue}
                </p>
                <p className="text-gray-600">{eventData.location}</p>
              </div>
            </div>
          </div>
          {/* Date Card */}
          <div className="bg-gradient-to-br from-gold/10 to-navy/10 p-8 rounded-lg hover-lift border border-gold/20">
            <div className="flex items-start gap-4">
              <Calendar className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-navy mb-2 font-semibold">
                  Date & Time
                </h3>
                <p className="font-semibold text-navy mb-1">{eventData.date}</p>
                <p className="text-gray-600">
                  {eventData.startTime} – {eventData.endTime}
                </p>
              </div>
            </div>
          </div>

          {/* Time Duration Card */}
          <div className="bg-gradient-to-br from-gold/10 to-navy/10 p-8 rounded-lg hover-lift border border-gold/20 md:col-span-2">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-navy mb-2 font-semibold">
                  Khoảng thời gian
                </h3>
                <p className="text-gray-600">
                  Một ngày với nhiều hoạt động hấp dẫn, giao lưu và những khoảnh
                  khắc đáng nhớ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

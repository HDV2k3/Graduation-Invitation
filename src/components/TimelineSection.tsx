"use client";

import { Clock } from "lucide-react";

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    time: "08:30 – 10:30",
    title: "Ăn sáng & Chuẩn bị",
    description:
      "Tập trung ăn sáng cùng mọi người. Thư giãn và chuẩn bị tinh thần cho buổi lễ. Kiểm tra trang phục, mũ tốt nghiệp và các vật dụng cần thiết.",
  },
  {
    time: "10:30 – 12:00",
    title: "Check-in & Gặp mặt",
    description:
      "Có mặt tại địa điểm tổ chức. Check-in, nhận thẻ khách và chụp ảnh tự do. Gặp mặt bạn bè, giảng viên và gia đình để cùng mở đầu ngày trọng đại.",
  },
  {
    time: "12:00 – 14:00",
    title: "Chụp ảnh kỷ niệm",
    description:
      "Chụp ảnh nhóm, ảnh cá nhân, ảnh gia đình và lưu giữ những khoảnh khắc đáng nhớ. Nhiếp ảnh gia hỗ trợ chụp các góc đẹp và tự nhiên nhất.",
  },
  {
    time: "14:00 – 17:00",
    title: "Ăn uống & Giao lưu",
    description:
      "Tiệc nhẹ, ăn uống cùng nhau, trò chuyện và chia sẻ kỷ niệm thời sinh viên. Cùng nhau tận hưởng thời gian vui vẻ bên bạn bè và người thân.",
  },
  {
    time: "17:00 – 20:00",
    title: "Karaoke & Tiệc vui buổi tối",
    description:
      "Quẩy hết mình với karaoke, âm nhạc sôi động và không khí náo nhiệt. Tiệc vui kéo dài đến khi mọi người cảm thấy trọn vẹn ngày tốt nghiệp.",
  },
];

export function TimelineSection() {
  return (
    <section className="section-wrapper bg-gradient-to-b from-navy/5 to-gold/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12 animate-fade-in-up">
          Event Schedule
        </h2>

        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="flex gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-navy" />
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-gold to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-6 pt-2 flex-1">
                <div className="bg-white p-6 rounded-lg border-l-4 border-gold shadow-md hover-lift">
                  <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                    {event.time}
                  </p>
                  <h3 className="font-serif text-2xl text-navy font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

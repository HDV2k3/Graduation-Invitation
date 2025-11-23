"use client";

export interface Graduate {
  name: string;
  major: string;
  avatar: string;
}

export const graduateData: Graduate = {
  name: "Huỳnh Đắc Việt",
  major: "Information Technology",
  avatar: "/assets/avatadksh.jpg",
};

export function GraduateInfoSection() {
  return (
    <section className="section-wrapper bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12 animate-fade-in-up">
          Meet Our Graduate
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 hover-lift">
          {/* Avatar */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-gold shadow-2xl">
              <img
                src={graduateData.avatar}
                alt={graduateData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-6">
              <div>
                <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
                  Graduate
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-navy font-bold">
                  {graduateData.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-gold pl-4 py-2">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">
                    Field of Study
                  </p>
                  <p className="font-serif text-xl text-navy mt-1">
                    {graduateData.major}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 italic text-lg leading-relaxed">
                &quot;Fact: may mắn được tốt nghiệp mời cả nhà chung zui&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

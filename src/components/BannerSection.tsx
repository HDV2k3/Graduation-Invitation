"use client";

export interface Banner {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export const bannerData: Banner = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1622594881310-4e85f8a8b0f5?w=1200&h=600&fit=crop')",
  title: "Lời mời dự lễ tốt nghiệp",
  subtitle: "Một cột mốc ý nghĩa đáng để cùng nhau ăn mừng",
};

export function BannerSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: bannerData.backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 drop-shadow-lg">
          {bannerData.title}
        </h1>
        <p className="text-xl md:text-2xl text-gold font-light drop-shadow-md">
          {bannerData.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

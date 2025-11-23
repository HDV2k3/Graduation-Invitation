import { BannerSection } from "../components/BannerSection";
import { GraduateInfoSection } from "../components/GraduateInfoSection";
import { EventInfoSection } from "../components/EventInfoSection";
import { TimelineSection } from "../components/TimelineSection";
import { ParkingSection } from "../components/ParkingSection";
import { MapSection } from "../components/MapSection";
import { FooterSection } from "../components/FooterSection";

export default function InvitationPage() {
  return (
    <main className="bg-cream">
      <BannerSection />
      <GraduateInfoSection />
      <EventInfoSection />
      <TimelineSection />
      <ParkingSection />
      <MapSection />
      <FooterSection />
    </main>
  );
}

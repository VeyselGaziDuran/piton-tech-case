import HeroSection from "../components/HeroSection";
import Into from "../components/Into";
import MeetTheTeam from "../components/MeetTheTeam";
import SuccessMetrics from "../components/SuccessMetrics";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Into />
      <MeetTheTeam />
      <SuccessMetrics />
      <ContactForm />
    </main>
  );
}

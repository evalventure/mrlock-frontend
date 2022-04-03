import Head from "next/head";
import { Header } from "../components/Header";
import { HowItWorks } from "../components/HowItWorks";
import { LandingSection } from "../components/LandingSection";
import { Requirements } from "../components/Requirements";
import { Reviews } from "../components/Reviews";
import { FollowUs } from "../components/FollowUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { WebsiteHead } from "../components/WebsiteHead";

export default function Home() {
  return (
    <div>
      <WebsiteHead />
      <Header />
      <main>
        <LandingSection />
        <Services />
        <HowItWorks />
        <Requirements />
        <Reviews />
        <FollowUs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

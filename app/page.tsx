import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { SignatureSection } from "@/components/Signature/SignatureSection";
import { MenuPreviewSection } from "@/components/MenuPreview/MenuPreviewSection";
import { ChefsSection } from "@/components/Chefs/ChefsSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { AboutSection } from "@/components/About/AboutSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <SignatureSection />
        <MenuPreviewSection />
        <ChefsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

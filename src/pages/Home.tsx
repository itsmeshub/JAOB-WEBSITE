import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { AdmissionBanner } from "@/components/sections/AdmissionBanner";
import { QuickServices } from "@/components/sections/QuickServices";
import { NoticesNews } from "@/components/sections/NoticesNews";
import { AboutBoard } from "@/components/sections/AboutBoard";
import { ChairmanMessage } from "@/components/sections/ChairmanMessage";
import { Statistics } from "@/components/sections/Statistics";
import { Gallery } from "@/components/sections/Gallery";
import { ImportantLinks } from "@/components/sections/ImportantLinks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function Home() {
  return (
    <PageLayout showBreadcrumb={false}>
      <HeroSlider />
      <AdmissionBanner />
      <QuickServices />
      <NoticesNews />
      <AboutBoard />
      <ChairmanMessage />
      <Statistics />
      <Gallery />
      <ImportantLinks />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </PageLayout>
  );
}

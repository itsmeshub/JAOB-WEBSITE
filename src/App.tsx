import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { Home } from "@/pages/Home";
import { About } from "@/pages/about/About";
import { History } from "@/pages/about/History";
import { AimObjective } from "@/pages/about/AimObjective";
import { Mission } from "@/pages/about/Mission";
import { Vision } from "@/pages/about/Vision";
import { ChairmanMessagePage } from "@/pages/about/ChairmanMessage";
import { Authorities } from "@/pages/about/Authorities";
import { AdmissionProcess } from "@/pages/admission/AdmissionProcess";
import { Eligibility } from "@/pages/admission/Eligibility";
import { FeeStructure } from "@/pages/admission/FeeStructure";
import { RequiredDocuments } from "@/pages/admission/RequiredDocuments";
import { Reservation } from "@/pages/admission/Reservation";
import { Examination } from "@/pages/admission/Examination";
import { Helpdesk } from "@/pages/admission/Helpdesk";
import { Downloads } from "@/pages/downloads/Downloads";
import { Register } from "@/pages/student/Register";
import { ForgotPassword } from "@/pages/student/ForgotPassword";
import { Dashboard } from "@/pages/student/Dashboard";
import { Profile } from "@/pages/student/Profile";
import { Contact } from "@/pages/contact/Contact";
import { Gallery } from "@/pages/Gallery";
import { GovernmentLetters } from "@/pages/administration/GovernmentLetters";
import { RulesRegulations } from "@/pages/administration/RulesRegulations";
import { ExternalRedirect } from "@/components/ExternalRedirect";
import { LARAVEL_APPLY_URL, LARAVEL_STUDENT_LOGIN_URL } from "@/config/externalLinks";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="jaob-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/aim-objective" element={<AimObjective />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/chairman-message" element={<ChairmanMessagePage />} />
          <Route path="/about/authorities" element={<Authorities />} />

          {/* Admission Routes */}
          {/* Apply Online now lives on the existing Laravel admission page, not the old React form */}
          <Route path="/admission/apply" element={<ExternalRedirect to={LARAVEL_APPLY_URL} />} />
          <Route path="/admission/process" element={<AdmissionProcess />} />
          <Route path="/admission/eligibility" element={<Eligibility />} />
          <Route path="/admission/fee-structure" element={<FeeStructure />} />
          <Route path="/admission/documents" element={<RequiredDocuments />} />
          <Route path="/admission/reservation" element={<Reservation />} />
          <Route path="/admission/examination" element={<Examination />} />
          <Route path="/admission/helpdesk" element={<Helpdesk />} />

          {/* Administration Routes */}
          <Route path="/administration/government-letters" element={<GovernmentLetters />} />
          <Route path="/administration/rules-regulations" element={<RulesRegulations />} />

          {/* Downloads */}
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/downloads/prospectus" element={<Downloads />} />
          <Route path="/downloads/application-form" element={<Downloads />} />
          <Route path="/downloads/certificate-forms" element={<Downloads />} />
          <Route path="/downloads/syllabus" element={<Downloads />} />
          <Route path="/downloads/notifications" element={<Downloads />} />

          {/* Student Zone */}
          {/* Student Login now lives on the existing Laravel student portal, not the old React page */}
          <Route path="/student/login" element={<ExternalRedirect to={LARAVEL_STUDENT_LOGIN_URL} />} />
          <Route path="/student/register" element={<Register />} />
          <Route path="/student/forgot-password" element={<ForgotPassword />} />
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/profile" element={<Profile />} />

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

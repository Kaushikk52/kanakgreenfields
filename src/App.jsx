import EnquiryButton from "./components/EnquiryButton";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SidePanel from "./components/SidePanel";
import TermsOfUse from "./components/TermsOfUse";
import LandingPage from "./views/LandingPage"
import OurStory from "./views/OurStory"
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <SidePanel />
      <EnquiryButton />
      <Routes>
        <Route path="/" element={<OurStory />} />
        <Route path="/explore" element={<LandingPage />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

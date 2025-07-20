import SidePanel from "./components/SidePanel";
import LandingPage from "./views/LandingPage"
import OurStory from "./views/OurStory"
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  

  return (
    <>
    <BrowserRouter>
      <SidePanel />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ourstory" element={<OurStory />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

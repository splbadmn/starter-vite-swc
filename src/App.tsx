import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import OurServices from "./components/pages/OurServices";
import CompanyHistory from "./components/pages/CompanyHistory";
import routes from "tempo-routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./lib/theme-context";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="flex flex-col min-h-screen dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/our-services" element={<OurServices />} />
              <Route path="/company-history" element={<CompanyHistory />} />
              {import.meta.env.VITE_TEMPO === "true" && (
                <Route path="/tempobook/*" />
              )}
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </main>
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

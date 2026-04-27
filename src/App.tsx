import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Impressum, Datenschutz } from "./components/LegalPages";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            <Hero />
            <Services />
            <About />
            <Contact />
          </>
        )}
        
        {currentPage === "impressum" && (
          <Impressum onBack={() => handleNavigate("home")} />
        )}
        
        {currentPage === "datenschutz" && (
          <Datenschutz onBack={() => handleNavigate("home")} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}


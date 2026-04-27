import React from "react";
import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  onBack: () => void;
}

export function Impressum({ onBack }: LegalPageProps) {
  return (
    <div className="pt-48 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 tracking-tight">Impressum</h1>
        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">Angaben gemäß § 5 TMG</h2>
            <p className="font-medium">Hatice Çerçioğlu Can</p>
            <p>CAN Gebäudereinigung</p>
            <p>Berliner Str. 33</p>
            <p>21493 Schwarzenbek</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">Kontakt</h2>
            <p>Telefon: +49 173 717 84 68</p>
            <p>E-Mail: metehan_bacak [at] hotmail.de</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Falls vorhanden hier einfügen]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-100 pb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Hatice Çerçioğlu Can<br />Berliner Str. 33<br />21493 Schwarzenbek</p>
          </section>
        </div>
        
        <button 
          onClick={onBack}
          className="mt-20 flex items-center space-x-2 text-blue-600 font-semibold hover:translate-x-[-4px] transition-transform cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Startseite</span>
        </button>
      </div>
    </div>
  );
}

export function Datenschutz({ onBack }: LegalPageProps) {
  return (
    <div className="pt-48 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 tracking-tight">Datenschutzerklärung</h1>
        <div className="space-y-8 text-gray-600 leading-relaxed font-light">
          <p className="text-xl font-medium text-gray-900 mb-6 font-sans">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben.
          </p>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">2. Datenerfassung auf unserer Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p className="mt-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">3. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</p>
          </section>
        </div>

        <button 
          onClick={onBack}
          className="mt-20 flex items-center space-x-2 text-blue-600 font-semibold hover:translate-x-[-4px] transition-transform cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Startseite</span>
        </button>
      </div>
    </div>
  );
}

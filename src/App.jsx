import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-5xl mx-auto w-full px-4 py-8">
        <MainContent activeTab={activeTab} />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

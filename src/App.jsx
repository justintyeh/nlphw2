import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto w-full px-4 py-8">
        <MainContent />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

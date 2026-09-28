import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded page components for code splitting & optimal performance
const Home = lazy(() => import("./Pages/Home"));
const Teams = lazy(() => import("./Pages/Teams"));
const Events = lazy(() => import("./components/EventsPage"));
const EventDetail = lazy(() => import("./components/EventDetails"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-[#ffde59]/20 border-t-[#ffde59] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <SocialSidebar />
      <Navbar />
      <ScrollToTop />
      <main className="min-h-screen bg-black">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

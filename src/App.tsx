import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ScorecardPage from './pages/ScorecardPage';
import ResultsPage from './pages/ResultsPage';
import BookingPage from './components/BookingPage';
import LeadMagnetPage from './pages/LeadMagnetPage';
import SEOGuidePage from './pages/SEOGuidePage';
import ROICalculatorPage from './pages/ROICalculatorPage';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/scorecard" element={<ScorecardPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/lead-magnet" element={<LeadMagnetPage />} />
            <Route path="/seo-guide" element={<SEOGuidePage />} />
            <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

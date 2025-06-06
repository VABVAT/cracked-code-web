import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLandingPage from './AppLandingPage';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationRefund from './pages/CancellationRefund';
import ShippingDelivery from './pages/ShippingDelivery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cancellation-refund" element={<CancellationRefund />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

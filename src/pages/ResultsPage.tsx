import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ScorecardResults from '../components/ScorecardResults';
import { ScorecardResult } from '../utils/scorecardScoring';

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result as ScorecardResult | undefined;

  useEffect(() => {
    if (!result) {
      navigate('/');
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  const handleBookConsultation = () => {
    navigate('/booking');
  };

  return <ScorecardResults result={result} onBookConsultation={handleBookConsultation} />;
}

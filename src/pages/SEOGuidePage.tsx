import { useNavigate } from 'react-router-dom';
import SEOGuideContent from '../components/SEOGuideContent';

export default function SEOGuidePage() {
  const navigate = useNavigate();

  const handleTakeScorecard = () => {
    navigate('/scorecard');
  };

  const handleCalculateROI = () => {
    navigate('/roi-calculator');
  };

  return (
    <SEOGuideContent
      onTakeScorecard={handleTakeScorecard}
      onCalculateROI={handleCalculateROI}
    />
  );
}

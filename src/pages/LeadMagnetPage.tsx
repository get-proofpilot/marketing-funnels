import { useNavigate } from 'react-router-dom';
import LeadMagnetLanding from '../components/LeadMagnetLanding';

export default function LeadMagnetPage() {
  const navigate = useNavigate();

  const handleAccessContent = () => {
    navigate('/seo-guide');
  };

  return <LeadMagnetLanding onAccessContent={handleAccessContent} />;
}

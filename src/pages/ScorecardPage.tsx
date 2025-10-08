import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Scorecard from '../components/Scorecard';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { calculateScorecardResults } from '../utils/scorecardScoring';
import { supabase, QuizResponse } from '../lib/supabase';

type Stage = 'scorecard' | 'lead-capture';

export default function ScorecardPage() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>('scorecard');
  const [scorecardScores, setScorecardScores] = useState<Record<string, number> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScorecardComplete = (scores: Record<string, number>) => {
    setScorecardScores(scores);
    setStage('lead-capture');
  };

  const handleLeadSubmit = async (leadData: {
    business_name: string;
    contact_name: string;
    email: string;
    phone: string;
    business_type: string;
  }) => {
    if (!scorecardScores) return;

    setIsSubmitting(true);

    try {
      let effectiveLeadId: string | null = null;

      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .insert([leadData])
        .select()
        .maybeSingle();

      if (leadError) {
        if (leadError.code === '23505') {
          const { data: existingLead, error: selectError } = await supabase
            .from('leads')
            .select('id')
            .eq('email', leadData.email)
            .maybeSingle();

          if (selectError) {
            console.error('Error fetching existing lead:', selectError);
            throw new Error('Unable to process your information. Please try again.');
          }

          if (existingLead) {
            effectiveLeadId = existingLead.id;
          } else {
            throw new Error('Unable to process your information. Please try again.');
          }
        } else {
          console.error('Lead insert error:', leadError);
          throw new Error('Unable to save your information. Please check your details and try again.');
        }
      } else if (lead) {
        effectiveLeadId = lead.id;
      } else {
        throw new Error('Unable to save your information. Please try again.');
      }

      const result = calculateScorecardResults(scorecardScores);

      if (effectiveLeadId) {
        const responseData: Omit<QuizResponse, 'id' | 'completed_at'> = {
          lead_id: effectiveLeadId,
          responses: scorecardScores,
          score: result.overallScore,
          recommendations: result.recommendations.map((r) => r.title),
        };

        const { error: responseError } = await supabase
          .from('quiz_responses')
          .insert([responseData]);

        if (responseError) {
          console.error('Quiz response insert error:', responseError);
        }
      }

      navigate('/results', { state: { result } });
    } catch (error) {
      console.error('Error submitting lead:', error);
      const errorMessage = error instanceof Error ? error.message : 'There was an error saving your information. Please try again.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {stage === 'scorecard' && <Scorecard onComplete={handleScorecardComplete} />}
      {stage === 'lead-capture' && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <LeadCaptureForm
              onSubmit={handleLeadSubmit}
              businessType={undefined}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      )}
    </>
  );
}

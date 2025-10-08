import { QuizAnswers, QuizResult, Recommendation } from '../types/quiz';
import { quizQuestions } from '../data/quizQuestions';

export function calculateQuizResults(answers: QuizAnswers): QuizResult {
  let totalScore = 0;
  let maxScore = 0;
  const painPoints: string[] = [];
  const benefits: string[] = [];
  const categoryScores: Record<string, number> = {
    seo: 0,
    ads: 0,
    website: 0,
    social: 0,
    general: 0,
  };

  quizQuestions.forEach((question) => {
    const answer = answers[question.id];
    if (!answer) return;

    const selectedOptions = Array.isArray(answer) ? answer : [answer];

    selectedOptions.forEach((value) => {
      const option = question.options.find((opt) => opt.value === value);
      if (option) {
        totalScore += option.points;
        categoryScores[question.category] += option.points;

        if (option.painPoint) painPoints.push(option.painPoint);
        if (option.benefit) benefits.push(option.benefit);
      }
    });

    const maxPoints = Math.max(...question.options.map((opt) => opt.points));
    maxScore += maxPoints;
  });

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const recommendations = generateRecommendations(categoryScores, percentage);

  return {
    score: totalScore,
    maxScore,
    percentage,
    recommendations,
    painPoints,
    benefits,
  };
}

function generateRecommendations(
  categoryScores: Record<string, number>,
  overallPercentage: number
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (categoryScores.seo >= 15) {
    recommendations.push({
      service: 'Local SEO',
      priority: 'high',
      reason: 'Your local search visibility needs immediate attention. You\'re losing customers to competitors every single day.',
      impact: 'Expect 3-5x increase in organic leads within 6 months. Most clients see ROI within 90 days.',
    });
  } else if (categoryScores.seo >= 8) {
    recommendations.push({
      service: 'Local SEO',
      priority: 'medium',
      reason: 'You have some visibility, but there\'s significant room for improvement to capture more market share.',
      impact: 'Double your organic lead flow and reduce cost per acquisition by 40%.',
    });
  }

  if (categoryScores.website >= 15) {
    recommendations.push({
      service: 'Website Design & Development',
      priority: 'high',
      reason: 'Your website is either missing, outdated, or not converting. It\'s your most important marketing asset.',
      impact: 'Modern, conversion-optimized websites convert 300-500% better. This is foundational to everything else.',
    });
  } else if (categoryScores.website >= 8) {
    recommendations.push({
      service: 'Website Optimization',
      priority: 'medium',
      reason: 'Your website needs optimization for speed, mobile, and conversions to maximize your marketing investment.',
      impact: 'Increase conversion rates by 50-150% with strategic improvements.',
    });
  }

  if (categoryScores.ads >= 15) {
    recommendations.push({
      service: 'Google & Facebook Ads',
      priority: 'high',
      reason: 'Paid advertising can deliver immediate results while your SEO builds. You\'re missing quick wins.',
      impact: 'Generate qualified leads within days. Typical ROI is 3:1 to 8:1 for home service businesses.',
    });
  } else if (categoryScores.ads >= 10) {
    recommendations.push({
      service: 'Paid Advertising Management',
      priority: 'medium',
      reason: 'Your current ad strategy could be optimized for much better ROI and lead quality.',
      impact: 'Reduce cost per lead by 30-50% and improve lead quality dramatically.',
    });
  }

  if (categoryScores.social >= 12) {
    recommendations.push({
      service: 'Social Media Marketing',
      priority: 'medium',
      reason: 'Your social presence is weak or non-existent. This hurts trust and brand awareness.',
      impact: 'Build community trust, increase brand recall, and create social proof that amplifies all marketing.',
    });
  }

  if (overallPercentage >= 70) {
    recommendations.push({
      service: 'Comprehensive Marketing Strategy',
      priority: 'high',
      reason: 'Multiple areas need attention. A coordinated, comprehensive approach will deliver the best results.',
      impact: 'Integrated marketing delivers 2-3x better results than individual tactics. Transform your entire lead generation.',
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      service: 'Marketing Audit & Strategy',
      priority: 'medium',
      reason: 'You\'re doing well in some areas, but an expert audit will reveal hidden opportunities.',
      impact: 'Identify quick wins and long-term strategies to maintain and accelerate your growth.',
    });
  }

  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

export function getScoreMessage(percentage: number): { title: string; message: string } {
  if (percentage >= 70) {
    return {
      title: 'URGENT: Your Marketing Needs Immediate Attention',
      message: 'Your business is leaving significant money on the table every single day. The good news? The opportunities for growth are massive. Let\'s fix this.',
    };
  } else if (percentage >= 50) {
    return {
      title: 'Major Growth Opportunities Identified',
      message: 'You\'re doing some things right, but there are clear gaps holding you back from the next level. Fixing these will dramatically accelerate your growth.',
    };
  } else if (percentage >= 30) {
    return {
      title: 'Good Foundation, Room for Optimization',
      message: 'You have solid marketing fundamentals, but optimizing and integrating your efforts will take you from good to great.',
    };
  } else {
    return {
      title: 'You\'re On the Right Track',
      message: 'You\'re ahead of most competitors. Let\'s ensure you stay there and continue to improve your market position.',
    };
  }
}

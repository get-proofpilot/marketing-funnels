import { scorecardSections } from '../data/scorecardSections';

export interface ScorecardResult {
  overallScore: number;
  overallGrade: string;
  tierMessage: {
    tier: 'critical' | 'struggling' | 'growing' | 'strong' | 'excellent';
    headline: string;
    message: string;
    urgency: string;
  };
  estimatedMonthlyLoss: number;
  sectionScores: {
    id: string;
    title: string;
    score: number;
    percentage: number;
  }[];
  strengths: {
    section: string;
    area: string;
    score: number;
  }[];
  weaknesses: {
    section: string;
    area: string;
    score: number;
    recommendation: string;
  }[];
  recommendations: {
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    impact: string;
  }[];
}

export function calculateScorecardResults(scores: Record<string, number>): ScorecardResult {
  // Calculate section scores
  const sectionScores = scorecardSections.map(section => {
    const criteriaScores = section.criteria
      .map(c => scores[c.id] || 0)
      .filter(s => s > 0);

    const averageScore = criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) / criteriaScores.length
      : 0;

    return {
      id: section.id,
      title: section.title,
      score: averageScore,
      percentage: (averageScore / 10) * 100
    };
  });

  // Calculate overall score
  const overallScore = sectionScores.reduce((sum, section) => sum + section.score, 0) / sectionScores.length;
  const overallGrade = getGrade(overallScore);

  // Find strengths (scores 8+)
  const strengths: ScorecardResult['strengths'] = [];
  scorecardSections.forEach(section => {
    section.criteria.forEach(criteria => {
      const score = scores[criteria.id] || 0;
      if (score >= 8) {
        strengths.push({
          section: section.title,
          area: criteria.question,
          score
        });
      }
    });
  });

  // Find weaknesses (scores below 6)
  const weaknesses: ScorecardResult['weaknesses'] = [];
  scorecardSections.forEach(section => {
    section.criteria.forEach(criteria => {
      const score = scores[criteria.id] || 0;
      if (score > 0 && score < 6) {
        weaknesses.push({
          section: section.title,
          area: criteria.question,
          score,
          recommendation: getRecommendation(section.id, criteria.id)
        });
      }
    });
  });

  // Sort by score (lowest first for weaknesses)
  weaknesses.sort((a, b) => a.score - b.score);
  strengths.sort((a, b) => b.score - a.score);

  // Generate recommendations based on weak areas
  const recommendations = generateRecommendations(sectionScores, weaknesses);

  // Calculate tier message and estimated loss
  const tierMessage = getTierMessage(overallScore);
  const estimatedMonthlyLoss = calculateEstimatedLoss(sectionScores, weaknesses);

  return {
    overallScore,
    overallGrade,
    tierMessage,
    estimatedMonthlyLoss,
    sectionScores,
    strengths: strengths.slice(0, 3), // Top 3 strengths
    weaknesses: weaknesses.slice(0, 5), // Top 5 weaknesses
    recommendations
  };
}

function getGrade(score: number): string {
  if (score >= 9) return 'A+';
  if (score >= 8.5) return 'A';
  if (score >= 8) return 'A-';
  if (score >= 7.5) return 'B+';
  if (score >= 7) return 'B';
  if (score >= 6.5) return 'B-';
  if (score >= 6) return 'C+';
  if (score >= 5.5) return 'C';
  if (score >= 5) return 'C-';
  if (score >= 4) return 'D';
  return 'F';
}

function getRecommendation(sectionId: string, criteriaId: string): string {
  const recommendations: Record<string, Record<string, string>> = {
    website: {
      website_trust: 'Invest in a modern, professional website redesign that builds instant trust with photos, reviews, and credentials',
      website_calls: 'Optimize your website for conversions with prominent phone numbers, clear CTAs, and mobile-friendly design',
      website_info: 'Add detailed service pages with pricing, process, and clear differentiators that answer customer questions'
    },
    lead_flow: {
      lead_volume: 'Implement a multi-channel marketing strategy to fill your calendar with consistent work',
      lead_consistency: 'Build predictable marketing systems that generate steady leads month after month',
      lead_quality: 'Improve targeting and positioning to attract ready-to-buy customers, not tire-kickers',
      lead_tracking: 'Set up proper tracking to know which marketing is making you money vs. wasting it'
    },
    google: {
      google_ranking: 'Invest in SEO to dominate search results and show up before your competitors in all areas you serve',
      google_reviews: 'Implement a systematic review generation process to build social proof that wins customers',
      google_profile: 'Fully optimize your Google Business Profile with photos, posts, and complete information to look active and professional'
    },
    ads: {
      ads_running: 'Start running strategic Google Ads to fill your calendar when you need work',
      ads_roi: 'Optimize ad campaigns for profitability with expert management and tracking',
      ads_optimization: 'Get active ad management to constantly improve performance and reduce cost per lead'
    }
  };

  return recommendations[sectionId]?.[criteriaId] || 'Focus on improving this area for better results';
}

function generateRecommendations(
  sectionScores: ScorecardResult['sectionScores'],
  weaknesses: ScorecardResult['weaknesses']
): ScorecardResult['recommendations'] {
  const recommendations: ScorecardResult['recommendations'] = [];

  // Find the weakest section
  const weakestSection = [...sectionScores].sort((a, b) => a.score - b.score)[0];

  // High priority recommendations based on weakest section
  if (weakestSection.id === 'website' && weakestSection.score < 6) {
    recommendations.push({
      priority: 'high',
      title: 'Fix Your Website First',
      description: 'Your website is the foundation of all your marketing. A poor website kills leads from all other channels.',
      impact: 'A professional, converting website can 3-5x your lead conversion rate'
    });
  }

  if (weakestSection.id === 'google' && weakestSection.score < 6) {
    recommendations.push({
      priority: 'high',
      title: 'Invest in SEO Now',
      description: 'You\'re invisible to customers searching for your services. SEO takes time, so start today.',
      impact: 'Ranking on page 1 can generate 30-50 qualified leads per month organically'
    });
  }

  if (weakestSection.id === 'lead_flow' && weakestSection.score < 6) {
    recommendations.push({
      priority: 'high',
      title: 'Build Predictable Lead Systems',
      description: 'Stop the feast-or-famine cycle with marketing systems that deliver consistent leads.',
      impact: 'Predictable leads mean predictable revenue and the ability to plan growth'
    });
  }

  if (weakestSection.id === 'ads' && weakestSection.score < 6) {
    recommendations.push({
      priority: 'high',
      title: 'Start Running Strategic Ads',
      description: 'While SEO builds, ads can generate leads immediately with the right strategy.',
      impact: 'Well-managed ads typically return $3-8 for every $1 spent'
    });
  }

  // Medium priority: Second weakest area
  const secondWeakest = sectionScores.filter(s => s.id !== weakestSection.id).sort((a, b) => a.score - b.score)[0];

  if (secondWeakest && secondWeakest.score < 7) {
    if (secondWeakest.id === 'google') {
      recommendations.push({
        priority: 'medium',
        title: 'Improve Your Google Presence',
        description: 'Optimize your Google Business Profile and build more reviews to show up in local searches.',
        impact: 'Better Google rankings drive consistent, free organic traffic'
      });
    }

    if (secondWeakest.id === 'website') {
      recommendations.push({
        priority: 'medium',
        title: 'Upgrade Your Website',
        description: 'Your website should be converting visitors into customers. Make sure it\'s modern, fast, and mobile-friendly.',
        impact: 'A better website improves results from all your other marketing efforts'
      });
    }
  }

  // Low priority: General improvements
  if (weaknesses.some(w => w.area.toLowerCase().includes('track'))) {
    recommendations.push({
      priority: 'medium',
      title: 'Implement Proper Tracking',
      description: 'Know exactly which marketing efforts are working and which are wasting money.',
      impact: 'Tracking lets you double down on what works and cut what doesn\'t'
    });
  }

  // If overall score is high, still give them something
  if (recommendations.length === 0) {
    recommendations.push({
      priority: 'low',
      title: 'Keep Optimizing',
      description: 'You\'re doing well! Focus on continuous improvement and staying ahead of competitors.',
      impact: 'Small optimizations compound over time for massive results'
    });
  }

  return recommendations.slice(0, 3); // Return top 3 recommendations
}

function getTierMessage(score: number): ScorecardResult['tierMessage'] {
  if (score < 4) {
    return {
      tier: 'critical',
      headline: 'Your Marketing Is In Crisis Mode',
      message: 'Be honest - you know something needs to change. Your competitors are eating your lunch while you struggle to get consistent work. Every day you wait is another day of lost revenue and missed opportunities.',
      urgency: 'This is not sustainable. Without immediate action, you\'re not just stuck - you\'re falling behind.'
    };
  }

  if (score < 5.5) {
    return {
      tier: 'struggling',
      headline: 'You\'re Leaving Serious Money On The Table',
      message: 'You\'re getting some work, but it\'s inconsistent and stressful. You know you could be busier. Your competitors with better marketing are booking jobs that should be yours.',
      urgency: 'The gap between you and market leaders is widening every month. The time to act is now.'
    };
  }

  if (score < 7) {
    return {
      tier: 'growing',
      headline: 'You\'re On The Right Track, But Missing Key Pieces',
      message: 'You\'re doing some things right, but there are clear gaps holding you back from the next level. Small fixes in the right areas could double your results.',
      urgency: 'You\'re close to breaking through. Don\'t let these fixable issues keep you stuck at this level.'
    };
  }

  if (score < 8.5) {
    return {
      tier: 'strong',
      headline: 'You\'re Ahead Of Most, But There\'s Room To Dominate',
      message: 'You\'re doing better than most businesses in your market. But the top performers are pulling ahead by optimizing the details you\'re overlooking.',
      urgency: 'Fine-tuning your strong foundation could take you from successful to dominant in your market.'
    };
  }

  return {
    tier: 'excellent',
    headline: 'You\'re A Marketing Leader In Your Market',
    message: 'Your marketing is working well. You understand what it takes and you\'re executing. The question now is: how do you stay ahead and continue to scale?',
    urgency: 'Even leaders need to innovate. Markets change, competitors improve, and staying on top requires constant evolution.'
  };
}

function calculateEstimatedLoss(
  sectionScores: ScorecardResult['sectionScores'],
  weaknesses: ScorecardResult['weaknesses']
): number {
  let totalLoss = 0;

  sectionScores.forEach(section => {
    const gap = 10 - section.score;

    if (section.id === 'website' && section.score < 7) {
      totalLoss += gap * 800;
    }

    if (section.id === 'google' && section.score < 7) {
      totalLoss += gap * 1200;
    }

    if (section.id === 'lead_flow' && section.score < 7) {
      totalLoss += gap * 1500;
    }

    if (section.id === 'ads' && section.score < 7) {
      totalLoss += gap * 1000;
    }
  });

  return Math.round(totalLoss / 100) * 100;
}

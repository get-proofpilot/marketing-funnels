export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  type: 'single' | 'multiple' | 'scale';
  options: QuizOption[];
  category: 'seo' | 'ads' | 'website' | 'social' | 'general';
}

export interface QuizOption {
  value: string;
  label: string;
  points: number;
  painPoint?: string;
  benefit?: string;
}

export interface QuizAnswers {
  [questionId: string]: string | string[];
}

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  recommendations: Recommendation[];
  painPoints: string[];
  benefits: string[];
}

export interface Recommendation {
  service: string;
  priority: 'high' | 'medium' | 'low';
  reason: string;
  impact: string;
}

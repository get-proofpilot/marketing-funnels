import { AlertCircle, TrendingUp, CheckCircle, Calendar, ArrowRight, Award } from 'lucide-react';
import { QuizResult } from '../types/quiz';
import { getScoreMessage } from '../utils/quizScoring';

interface ResultsProps {
  result: QuizResult;
  onBookConsultation: () => void;
}

export default function Results({ result, onBookConsultation }: ResultsProps) {
  const scoreMessage = getScoreMessage(result.percentage);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-700 bg-red-100 border-red-300';
      case 'medium':
        return 'text-amber-700 bg-amber-100 border-amber-300';
      case 'low':
        return 'text-emerald-700 bg-emerald-100 border-emerald-300';
      default:
        return 'text-slate-700 bg-slate-100 border-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-orange-200">
            <CheckCircle className="w-4 h-4" />
            <span>Assessment Complete</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {scoreMessage.title}
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            {scoreMessage.message}
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Award className="w-6 h-6 text-orange-600" />Your Marketing Score</h2>
            <div className="text-right">
              <div className="text-4xl font-bold text-orange-600">{result.percentage}%</div>
              <div className="text-sm text-slate-600">Opportunity Score</div>
            </div>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-orange-600 to-orange-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${result.percentage}%` }}
            />
          </div>

          <p className="text-slate-700 leading-relaxed">
            Higher score = bigger opportunity. Your score indicates significant room for growth.
            The areas we've identified below represent real money you're leaving on the table.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Your Personalized Action Plan
          </h2>

          <div className="space-y-4">
            {result.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{rec.service}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase border ${getPriorityColor(
                      rec.priority
                    )}`}
                  >
                    {rec.priority} Priority
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">The Problem:</p>
                      <p className="text-slate-700">{rec.reason}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">The Impact:</p>
                      <p className="text-slate-700">{rec.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {result.painPoints.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Critical Issues Identified
            </h3>
            <ul className="space-y-2">
              {result.painPoints.slice(0, 5).map((point, index) => (
                <li key={index} className="text-slate-700 flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0 text-lg">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.benefits.length > 0 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              What Success Looks Like
            </h3>
            <ul className="space-y-2">
              {result.benefits.slice(0, 5).map((benefit, index) => (
                <li key={index} className="text-slate-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Working With Another Agency?
          </h3>
          <p className="text-slate-700 text-center mb-6 max-w-2xl mx-auto leading-relaxed">
            We'll give you an honest opinion about whether they're doing a good job or not.
            <span className="block mt-2 font-semibold">
              If they're great, we'll tell you. If they're dropping the ball, we'll show you what's missing.
            </span>
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-slate-900 mb-1">No Pressure</p>
              <p className="text-sm text-slate-600">Just an honest conversation</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-slate-900 mb-1">Second Opinion</p>
              <p className="text-sm text-slate-600">See what you might be missing</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-slate-900 mb-1">Real Talk</p>
              <p className="text-sm text-slate-600">Plain English, no BS</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-orange-50 mb-6 text-lg max-w-2xl mx-auto">
            Book a free 30-minute strategy call with our team. We'll show you exactly how to
            implement these recommendations and start seeing results within 30-60 days.
          </p>

          <button
            onClick={onBookConsultation}
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-orange-600 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-orange-50 text-sm mt-4 font-medium">
            ✓ No obligation  ✓ No high-pressure sales  ✓ Just actionable insights
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm font-medium">
            We've helped 100+ home service businesses just like yours achieve 3-5x growth
          </p>
        </div>
      </div>
    </div>
  );
}

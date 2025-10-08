import { AlertCircle, TrendingUp, CheckCircle, Calendar, ArrowRight, Award, Target, AlertTriangle } from 'lucide-react';
import { ScorecardResult } from '../utils/scorecardScoring';

interface ScorecardResultsProps {
  result: ScorecardResult;
  onBookConsultation: () => void;
}

export default function ScorecardResults({ result, onBookConsultation }: ScorecardResultsProps) {
  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-amber-600 bg-amber-100';
    if (grade.startsWith('D')) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

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

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'from-green-500 to-green-600';
    if (percentage >= 60) return 'from-blue-500 to-blue-600';
    if (percentage >= 40) return 'from-amber-500 to-amber-600';
    return 'from-orange-500 to-orange-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-orange-200">
            <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
            <span>Scorecard Complete</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            {result.tierMessage.headline}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-semibold leading-relaxed">
            {result.tierMessage.message}
          </p>
        </div>

        {/* Estimated Loss Banner */}
        {result.estimatedMonthlyLoss > 0 && (
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-8 shadow-2xl text-white text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" strokeWidth={2} />
            <h2 className="text-3xl font-black mb-2">
              Estimated Monthly Revenue Loss
            </h2>
            <div className="text-6xl font-black mb-3">
              ${result.estimatedMonthlyLoss.toLocaleString()}
            </div>
            <p className="text-xl font-semibold text-red-100 max-w-2xl mx-auto mb-4">
              Based on your scores, you could be missing out on approximately this much revenue every single month
            </p>
            <p className="text-lg font-bold text-white">
              That's ${(result.estimatedMonthlyLoss * 12).toLocaleString()} per year walking out the door
            </p>
          </div>
        )}

        {/* Urgency Message */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
            <div>
              <h3 className="text-xl font-black text-amber-900 mb-2">The Reality:</h3>
              <p className="text-amber-900 font-semibold leading-relaxed text-lg">
                {result.tierMessage.urgency}
              </p>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2 mb-2">
                <Award className="w-7 h-7 text-orange-600" strokeWidth={2.5} />
                Overall Score
              </h2>
              <p className="text-slate-600 font-semibold">Based on {result.sectionScores.length} key marketing areas</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className={`text-6xl font-black ${getGradeColor(result.overallGrade).split(' ')[0]}`}>
                  {result.overallGrade}
                </div>
                <div className="text-sm text-slate-600 font-bold mt-1">Grade</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-orange-600">
                  {result.overallScore.toFixed(1)}
                </div>
                <div className="text-sm text-slate-600 font-bold mt-1">Out of 10</div>
              </div>
            </div>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
            <div
              className={`bg-gradient-to-r h-4 rounded-full transition-all duration-1000 ${getScoreColor((result.overallScore / 10) * 100)}`}
              style={{ width: `${(result.overallScore / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" strokeWidth={2.5} />
            Score by Section
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {result.sectionScores.map((section) => (
              <div
                key={section.id}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-slate-900">{section.title}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-black text-orange-600">
                      {section.score.toFixed(1)}
                    </div>
                    <div className="text-xs text-slate-600 font-bold">/ 10</div>
                  </div>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r h-3 rounded-full transition-all ${getScoreColor(section.percentage)}`}
                    style={{ width: `${section.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths and Weaknesses */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          {result.strengths.length > 0 && (
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                Your Strengths
              </h2>

              <div className="space-y-4">
                {result.strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-2 border-green-200 rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold text-green-600 uppercase tracking-wide">
                        {strength.section}
                      </span>
                      <span className="text-sm font-black text-green-600">
                        {strength.score}/10
                      </span>
                    </div>
                    <p className="text-slate-900 font-bold leading-snug">
                      {strength.area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weaknesses */}
          {result.weaknesses.length > 0 && (
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" strokeWidth={2.5} />
                Areas to Improve
              </h2>

              <div className="space-y-4">
                {result.weaknesses.map((weakness, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                        {weakness.section}
                      </span>
                      <span className="text-sm font-black text-orange-600">
                        {weakness.score}/10
                      </span>
                    </div>
                    <p className="text-slate-900 font-bold leading-snug mb-2">
                      {weakness.area}
                    </p>
                    <p className="text-sm text-slate-700 font-semibold">
                      {weakness.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-600" strokeWidth={2.5} />
            Your Action Plan
          </h2>

          <div className="space-y-4">
            {result.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-black text-slate-900">{rec.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getPriorityColor(
                      rec.priority
                    )}`}
                  >
                    {rec.priority} Priority
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">What's Happening:</p>
                      <p className="text-slate-700 font-semibold">{rec.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">The Impact:</p>
                      <p className="text-slate-700 font-semibold">{rec.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reality Check */}
        <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">
            Here's What's Happening Right Now In Your Market
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Your Competitors</h3>
              <p className="text-sm text-slate-600 font-semibold">
                Are investing in professional marketing right now and taking market share you could be capturing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-600" strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">Your Customers</h3>
              <p className="text-sm text-slate-600 font-semibold">
                Are searching for your services today and calling whoever shows up first in their search results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
              </div>
              <h3 className="font-black text-slate-900 mb-2">The Opportunity</h3>
              <p className="text-sm text-slate-600 font-semibold">
                Is slipping away every single day you don't have a proven marketing system working for you
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 text-center shadow-2xl border-4 border-orange-500">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-green-500/40">
              <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
              <span>100% Free - No Obligation</span>
            </div>

            <Calendar className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={2} />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Get Your Free Marketing Audit & Strategy Session
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold leading-relaxed mb-4">
              You've identified the gaps. Now let's figure out exactly how to fix them - together, for free.
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-semibold leading-relaxed">
              We do these calls to help home service businesses succeed. No sales pitch. No pressure. Just real guidance from someone who's helped hundreds of businesses like yours grow.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
            <h3 className="text-lg font-black text-white mb-4">What Happens On Your Free Strategy Call:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'We review your scorecard results in detail',
                'Identify your 3 biggest opportunities',
                'Create a prioritized action plan you can use',
                'Answer any marketing questions you have',
                'Give honest advice whether you hire us or not',
                'Show you what to avoid and what to invest in'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-slate-300 font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-black text-white mb-3">Why We Do This For Free</h3>
            <p className="text-slate-300 font-semibold leading-relaxed">
              Too many home service businesses waste money with the wrong agencies because they didn't know what questions to ask. We want to help you understand what you actually need - even if you go with someone else. Our goal is to make sure you're equipped to make the right decision for your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-lg text-xl font-black transition-all shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105"
            >
              Schedule Your Free Strategy Call
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm mb-6">
            {['100% Free', 'No Sales Pitch', 'Zero Commitment', 'Instant Calendar Access'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm font-semibold max-w-2xl mx-auto mb-4">
              <span className="text-white font-black">What happens after you book:</span> You'll get instant calendar access to choose a time that works for you. We'll send a confirmation email with all the details. The call typically lasts 30-45 minutes, and you can ask anything about your marketing.
            </p>
            <p className="text-slate-500 text-sm font-semibold italic max-w-xl mx-auto">
              "We've helped hundreds of home service businesses grow. We know what works, what doesn't, and what's a waste of money. Let's make sure you invest in the right things - whether that's with us or someone else."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

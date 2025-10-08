import { useState, useEffect } from 'react';
import { Monitor, Phone, Search, Target, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { scorecardSections } from '../data/scorecardSections';

interface ScorecardProps {
  onComplete: (scores: Record<string, number>) => void;
}

const iconMap = {
  monitor: Monitor,
  phone: Phone,
  search: Search,
  target: Target
};

export default function Scorecard({ onComplete }: ScorecardProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [hoveredCriteria, setHoveredCriteria] = useState<string | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const currentSection = scorecardSections[currentSectionIndex];
  const Icon = iconMap[currentSection.icon as keyof typeof iconMap];
  const progress = ((currentSectionIndex + 1) / scorecardSections.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex]);

  const handleRatingClick = (criteriaId: string, rating: number) => {
    setScores(prev => ({ ...prev, [criteriaId]: rating }));
  };

  const allCriteriaRated = currentSection.criteria.every(c => scores[c.id] !== undefined);

  const handleNext = () => {
    if (currentSectionIndex < scorecardSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      onComplete(scores);
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const getEffectiveRating = (criteriaId: string) => {
    if (hoveredCriteria === criteriaId && hoveredRating !== null) {
      return hoveredRating;
    }
    return scores[criteriaId] || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-slate-600">
              Section {currentSectionIndex + 1} of {scorecardSections.length}
            </p>
            <p className="text-sm font-bold text-orange-600">{Math.round(progress)}% Complete</p>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          {/* Section Header */}
          <div className="flex items-start gap-4 mb-8 pb-6 border-b-2 border-slate-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                {currentSection.title}
              </h2>
              <p className="text-lg text-slate-600 font-semibold">
                {currentSection.description}
              </p>
            </div>
          </div>

          {/* Criteria Rating Section */}
          <div className="space-y-10 mb-8">
            {currentSection.criteria.map((criteria, index) => {
              const rating = getEffectiveRating(criteria.id);
              const isHovered = hoveredCriteria === criteria.id;
              const isRated = scores[criteria.id] !== undefined;

              return (
                <div key={criteria.id} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      isRated ? 'bg-orange-500' : 'bg-slate-200'
                    }`}>
                      {isRated ? (
                        <CheckCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                      ) : (
                        <span className={`text-sm font-black ${isRated ? 'text-white' : 'text-slate-500'}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 mb-2">
                        {criteria.question}
                      </h3>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {criteria.criteria}
                      </p>
                    </div>
                  </div>

                  {/* Rating Scale */}
                  <div className="pl-11">
                    <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
                      {/* Labels */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-slate-500">
                          {criteria.lowLabel}
                        </span>
                        <span className="text-sm font-bold text-slate-500">
                          {criteria.highLabel}
                        </span>
                      </div>

                      {/* Rating Buttons */}
                      <div className="grid grid-cols-10 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                          const isSelected = scores[criteria.id] === num;
                          const isHoveredNum = isHovered && hoveredRating !== null && hoveredRating >= num;
                          const shouldHighlight = isSelected || isHoveredNum;

                          return (
                            <button
                              key={num}
                              onClick={() => handleRatingClick(criteria.id, num)}
                              onMouseEnter={() => {
                                setHoveredCriteria(criteria.id);
                                setHoveredRating(num);
                              }}
                              onMouseLeave={() => {
                                setHoveredCriteria(null);
                                setHoveredRating(null);
                              }}
                              className={`
                                aspect-square rounded-xl font-black text-lg transition-all duration-200 ease-out
                                ${shouldHighlight
                                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg transform hover:scale-110 active:scale-95'
                                  : 'bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 border-2 border-slate-200 hover:border-slate-300 active:scale-95'
                                }
                              `}
                            >
                              {num}
                            </button>
                          );
                        })}
                      </div>

                      {/* Current Rating Display - Always reserve space */}
                      <div className="mt-4 text-center h-8 flex items-center justify-center">
                        {(rating > 0 || (isHovered && hoveredRating !== null)) && (
                          <p className="text-sm font-bold text-slate-600 transition-all">
                            Your Rating: <span className="text-orange-600 text-lg">{isHovered && hoveredRating !== null ? hoveredRating : rating}/10</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t-2 border-slate-100">
            {currentSectionIndex > 0 ? (
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              disabled={!allCriteriaRated}
              className={`
                inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg
                ${allCriteriaRated
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:scale-105'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }
              `}
            >
              {currentSectionIndex === scorecardSections.length - 1 ? 'Get My Results' : 'Next Section'}
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Completion Helper */}
          {!allCriteriaRated && (
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500 font-semibold">
                Rate all {currentSection.criteria.length} items to continue
              </p>
            </div>
          )}
        </div>

        {/* Section Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {scorecardSections.map((section, index) => (
            <div
              key={section.id}
              className={`
                h-2 rounded-full transition-all
                ${index === currentSectionIndex
                  ? 'w-12 bg-orange-500'
                  : index < currentSectionIndex
                  ? 'w-2 bg-orange-300'
                  : 'w-2 bg-slate-300'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';
import { QuizAnswers } from '../types/quiz';

interface QuizProps {
  onComplete: (answers: QuizAnswers) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentStep === quizQuestions.length - 1;
  const hasAnswer = answers[currentQuestion.id] !== undefined;

  const handleAnswer = (value: string) => {
    if (currentQuestion.type === 'multiple') {
      const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
      const newAnswers = currentAnswers.includes(value)
        ? currentAnswers.filter((v) => v !== value)
        : [...currentAnswers, value];

      setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: value });
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isSelected = (value: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-600">
              Question {currentStep + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold text-orange-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-xl">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              {currentQuestion.question}
            </h2>
            {currentQuestion.subtitle && (
              <p className="text-slate-600">{currentQuestion.subtitle}</p>
            )}
          </div>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isSelected(option.value)
                    ? 'border-orange-600 bg-orange-50 text-slate-900 shadow-md'
                    : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-orange-300 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected(option.value)
                        ? 'border-orange-600 bg-orange-600'
                        : 'border-slate-400'
                    }`}
                  >
                    {isSelected(option.value) && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 0
                  ? 'text-slate-400 cursor-not-allowed'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswer}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                hasAnswer
                  ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isLastQuestion ? 'See My Results' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

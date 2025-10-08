import { ArrowRight, CheckCircle, Download, TrendingUp, Search, Brain, Zap, Target, Star } from 'lucide-react';

interface LeadMagnetLandingProps {
  onAccessContent: () => void;
}

export default function LeadMagnetLanding({ onAccessContent }: LeadMagnetLandingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 40%, 25% 60%, 50% 40%, 75% 60%, 100% 40%, 100% 100%, 0 100%)'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500 rounded-lg px-4 py-2 mb-8">
            <Download className="w-4 h-4 text-white" strokeWidth={2.5} />
            <span className="text-sm font-bold text-white uppercase tracking-wide">
              Free Download
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
            The 2025 SEO Blueprint
            <br />
            <span className="text-orange-500">for Home Services</span>
          </h1>

          <p className="text-2xl text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto font-bold">
            Why Every Plumber, HVAC Tech, and Electrician Needs SEO This Year—Or Risk Getting Left Behind
          </p>

          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            The game has changed. AI is rewriting how customers find you. Download this free guide and discover why traditional marketing won't cut it anymore.
          </p>

          <button
            onClick={onAccessContent}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 mb-8"
          >
            Get Free Instant Access
            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            {['No Email Required', 'Instant Access', '15-Min Read'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                <span className="text-sm font-bold">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 mt-8 border-t border-white/10">
            <div className="flex -space-x-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-sm text-slate-400 font-semibold">
                Downloaded by 500+ home service pros
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Inside This Guide
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              What You'll Discover Inside
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about modern SEO and why it's the difference between thriving and barely surviving in 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Why 2025 Is Different",
                description: "AI has fundamentally changed how customers find businesses. Google's new AI results mean traditional SEO tactics don't work anymore. Learn what does.",
                icon: Brain,
              },
              {
                title: "The AI Search Revolution",
                description: "ChatGPT, Google AI, and voice assistants are now answering questions directly. If you're not optimized for AI, you're invisible.",
                icon: Zap,
              },
              {
                title: "Content That Actually Works",
                description: "Forget keyword stuffing. Learn how to create real, valuable content that customers actually search for and AI systems recommend.",
                icon: Target,
              },
              {
                title: "Service Pages Done Right",
                description: "The exact structure and content your service pages need to rank in 2025—for both traditional search and AI results.",
                icon: CheckCircle,
              },
              {
                title: "Local SEO Mastery",
                description: "Why service area pages are more critical than ever, and how to dominate every neighborhood you serve.",
                icon: Search,
              },
              {
                title: "Build vs Hire",
                description: "Should you build an internal SEO team or hire an agency? Get the honest truth about costs, results, and what actually works.",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-orange-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem/Agitation Section */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0 60%)'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-6">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
            </div>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
              The Hard Truth
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            If You're Not Doing SEO in 2025,
            <br />
            <span className="text-orange-500">You're Already Behind</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
            {[
              "Your competitors are showing up in AI results. You're not.",
              "Customers are finding answers to their questions. Just not from you.",
              "Google's showing AI overviews at the top. Your website is buried below.",
              "You're spending money on ads while competitors get free organic traffic.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-black">{i + 1}</span>
                </div>
                <p className="text-lg text-white font-bold leading-snug">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-2xl text-slate-300 font-bold mb-10">
            This guide shows you exactly how to fix it.
          </p>

          <button
            onClick={onAccessContent}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-orange-500/30"
          >
            Get Free Instant Access
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              This Guide Is For You If:
            </h2>
          </div>

          <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 lg:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "You run a plumbing, HVAC, electrical, or home service business",
                "Your phone isn't ringing as much as it should be",
                "You're tired of paying for ads that barely work",
                "Your competitors seem to show up everywhere online",
                "You're not sure if you need an SEO team or an agency",
                "You want to understand what SEO actually does",
                "You're ready to invest in long-term growth",
                "You want customers finding YOU instead of chasing them",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-lg text-slate-900 font-bold leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-slate-50" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0 60%)'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Dominate
            <br />
            <span className="text-orange-500">Your Local Market?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download the free 2025 SEO Blueprint and learn exactly how to get found by customers who are ready to buy—without spending another dollar on ads.
          </p>

          <button
            onClick={onAccessContent}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg text-xl font-bold transition-all shadow-2xl hover:shadow-orange-500/30 mb-10"
          >
            Get Free Instant Access
            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            {['No Email Required', 'Instant Access', 'Takes 15 Minutes to Read'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                <span className="text-sm font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

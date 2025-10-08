import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Search, X, HardHat, Star, TrendingUp, Shield, Zap, AlertCircle } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartScorecard = () => {
    navigate('/scorecard');
  };

  const handleAccessLeadMagnet = () => {
    navigate('/lead-magnet');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Organic wavy bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 40%, 25% 60%, 50% 40%, 75% 60%, 100% 40%, 100% 100%, 0 100%)'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge with icon */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 mb-8">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <HardHat className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-white/90 tracking-wide">
                  FOR PLUMBERS, HVAC, ELECTRICIANS & HOME SERVICES
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
                You're Great at
                <br />
                What You Do.
                <br />
                <span className="relative inline-block mt-2">
                  But Are Customers
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4C100 2 300 2 398 4" stroke="#F97316" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="text-orange-500">Finding You?</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                Most home service pros are amazing at their craft but struggle with marketing. Take our 2-minute Marketing Scorecard and discover exactly where you're losing money.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={handleStartScorecard}
                  className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/30"
                >
                  <span>Get My Free Marketing Scorecard</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                  <span className="font-semibold">Takes 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                  <span className="font-semibold">Zero jargon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                  <span className="font-semibold">Instant results</span>
                </div>
              </div>

              {/* Trust bar */}
              <div className="flex items-center gap-6 pt-8 mt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 font-semibold">
                    Trusted by 100+ home service businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-700 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-slate-700/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg px-4 py-2 mb-6">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
              </div>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                The 3 Biggest Marketing Mistakes
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We work with home service pros every day. Here are the top 3 reasons you're leaving money on the table:
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Phone's Not Ringing",
                description: "Your calendar has gaps while your competitors are fully booked. Customers need your services right now—they're just calling someone else instead.",
                icon: Phone,
                stat: "73%",
                statLabel: "of calls go to the first business found"
              },
              {
                title: "Invisible on Google",
                description: "When someone in your area searches for what you do, you're buried on page 2 or 3. Your competition owns page 1 and gets all the leads.",
                icon: Search,
                stat: "92%",
                statLabel: "never look past page 1"
              },
              {
                title: "Wasting Money on Marketing",
                description: "You've tried ads, maybe a new website, spent money here and there... but nothing moves the needle. You're not sure what's working.",
                icon: X,
                stat: "$1,000s",
                statLabel: "wasted each year on bad marketing"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-orange-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-3xl font-black text-orange-500 mb-1">{item.stat}</div>
                  <div className="text-sm text-slate-600 font-semibold">{item.statLabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 text-center">
            <p className="text-2xl font-black text-slate-900 mb-2">
              If this sounds like you, you're not alone.
            </p>
            <p className="text-lg text-slate-600 font-semibold">
              But there's a clear path to fix it—and it starts with knowing exactly where you stand.
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Discover Section */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        {/* Organic wavy top border */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0 60%)'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
              <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                Your Custom Marketing Roadmap
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Here's Exactly What You'll Discover
              <br />
              <span className="text-orange-500">in Your Free Marketing Scorecard:</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get crystal-clear answers about where you're losing money and what to fix first
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { text: "Where your phone leads are actually coming from (or why they're not coming at all)", emoji: '📞' },
              { text: "If people can find you when they search for your services locally", emoji: '🔍' },
              { text: "Whether your website is helping or hurting your business", emoji: '💻' },
              { text: "What your competitors are doing that you're not (and how they're stealing your customers)", emoji: '🎯' },
              { text: "The ONE thing to focus on first that will make the biggest impact", emoji: '⚡' },
              { text: "A clear action plan in plain English—no confusing marketing speak", emoji: '📋' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <p className="text-white font-bold leading-snug pt-1">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleStartScorecard}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-orange-500/30"
            >
              Get My Free Marketing Scorecard Now
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <p className="text-slate-400 text-sm mt-4 font-semibold">
              Takes 2 minutes • No credit card • Instant results
            </p>
          </div>
        </div>
      </div>

      {/* Agency Second Opinion Section */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content card with border */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-12 lg:p-16 shadow-lg">
            <div className="text-center mb-12">
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
                <span className="text-xs font-bold text-orange-900 uppercase tracking-wider">
                  Honest Second Opinion
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6">
                Already Paying a Marketing Agency?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3 leading-relaxed">
                We'll give you an honest review of whether you're getting what you're paying for—or if you're just throwing money down the drain.
              </p>
              <p className="text-lg font-bold text-slate-900">
                No pressure, no sales pitch—just the truth about what agency work should actually look like.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: "Are they actually moving the needle?", desc: "Or just sending you reports that look impressive but don't grow your business" },
                { q: "Do they understand home services?", desc: "Generic agencies don't get your industry—and it shows in the results" },
                { q: "Are you paying too much for too little?", desc: "We'll show you what fair pricing looks like in your market" },
                { q: "Should you fire them or give them more time?", desc: "Get clear, honest guidance on what to do next" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="pt-1">
                    <p className="font-black text-slate-900 leading-tight mb-1">{item.q}</p>
                    <p className="text-sm text-slate-600 font-semibold leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Here's What Other Home Service Pros Are Saying:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-black flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="font-black text-slate-900">Michael Rodriguez</p>
                  <p className="text-sm text-slate-600 font-semibold">Rodriguez HVAC Services</p>
                </div>
              </div>
              <p className="text-lg text-slate-900 font-semibold leading-relaxed">
                "This scorecard showed me exactly where I was wasting money. I was spending $800/month on Google Ads that weren't even showing up for the right searches. Now I know what to fix first."
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-black flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="font-black text-slate-900">Sarah Chen</p>
                  <p className="text-sm text-slate-600 font-semibold">Chen's Plumbing</p>
                </div>
              </div>
              <p className="text-lg text-slate-900 font-semibold leading-relaxed">
                "I thought I was doing everything right, but this scorecard revealed I wasn't showing up on Google Maps at all. Fixed that one issue and got 3 new customers in the first week."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        {/* Organic wavy top border */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0 60%)'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Stop Guessing.
            <br />
            <span className="text-orange-500">Start Growing.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Take the 2-minute Marketing Scorecard and get your personalized home service marketing plan to fix what's broken—and finally start getting the customers you deserve.
          </p>

          <button
            onClick={handleStartScorecard}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg text-xl font-bold transition-all shadow-2xl hover:shadow-orange-500/30 mb-10"
          >
            Get My Free Marketing Scorecard
            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            {['100% Free', 'No Credit Card Required', 'Instant Results'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                <span className="text-sm font-bold">{text}</span>
              </div>
            ))}
          </div>

          {/* Alternative CTA for SEO Guide */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-slate-400 text-lg mb-4 font-semibold">
              Want to learn about SEO for home services first?
            </p>
            <button
              onClick={handleAccessLeadMagnet}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold transition-all"
            >
              <span className="underline">Download Our Free 2025 SEO Blueprint</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

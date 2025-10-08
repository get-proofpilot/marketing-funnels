import { ArrowRight, CheckCircle, TrendingUp, Search, Brain, Zap, Target, Users, MapPin, FileText, Clock, AlertTriangle, DollarSign, Award, BookOpen, Monitor, Link, ClipboardCheck, Calculator } from 'lucide-react';

interface SEOGuideContentProps {
  onTakeScorecard?: () => void;
  onCalculateROI?: () => void;
}

export default function SEOGuideContent({ onTakeScorecard, onCalculateROI }: SEOGuideContentProps = {}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500 rounded-lg px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} />
            <span className="text-sm font-bold text-white uppercase tracking-wide">
              Free Guide
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            The 2025 SEO Blueprint for Home Services
          </h1>
          <p className="text-xl text-slate-300 font-semibold">
            Everything you need to know to dominate your local market this year
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Chapter 1 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 1</div>
              <h2 className="text-3xl font-black text-slate-900">Why 2025 Is Different</h2>
              <p className="text-slate-600 font-semibold">Everything just changed (and most businesses don't know it yet)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              Let's be blunt: <strong>If you're not investing in SEO right now, you're getting left behind.</strong> Not slowly. Not gradually. Dramatically.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              In 2024, Google rolled out their biggest change in 25 years: <strong>AI-powered search overviews.</strong> When someone searches "best HVAC company near me" or "emergency plumber," Google now shows an AI-generated answer at the very top, before any traditional search results.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
              <p className="text-lg font-bold text-slate-900 mb-4">Here's what that means for you:</p>
              <p className="text-lg font-black text-slate-900 mb-3">If you're not optimized for AI, you're invisible to 60% of searchers</p>
              <p className="text-slate-800 font-semibold mb-4">
                ChatGPT now has 200+ million weekly users asking for service recommendations. Voice assistants are answering questions without users ever seeing your website. Traditional SEO stuffing keywords into pages and building spammy backlinks doesn't work anymore. AI systems are smart enough to see through that garbage.
              </p>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">SEO Works Like a 401k (Start Early or Pay More Later)</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              The earlier you start, the more you end up with long term. Right now we're in an era where home service businesses are finally catching up to tech companies and software companies who invested in SEO years ago.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              Everyone is about to jump on SEO. You need to get ahead NOW while there's still time to be a differentiator. But you need to get ahead with quality, not just quantity.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-2xl my-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0" strokeWidth={2} />
                <div>
                  <p className="text-xl font-black mb-3">Most agencies will cut corners</p>
                  <p className="text-slate-200 leading-relaxed">
                    They'll tell you "just start posting, just do this." What they won't tell you is that it matters WHY you're doing it and HOW you're doing it. A lot of agencies will create content just to create content. Go look at that content. It's stuff no one will ever read. It doesn't help answer a question. It doesn't help anyone understand anything.
                  </p>
                </div>
              </div>
              <p className="text-orange-400 font-bold text-lg mt-4">
                That's the difference between a good agency and a bad agency.
              </p>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Starting Late Means Working Twice as Hard</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Left behind means not competing well with your competition. You're going to have to put in so much more energy and so much more money because you started the race at a different point than everyone else.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              It doesn't mean you can't win. It doesn't mean you can't get to the top. But it does mean you have to work harder and spend more to catch up.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              Now is the prime time before everyone jumps on this. You can be a differentiator. You can get ahead before everyone tries to copy what everyone else is doing.
            </p>

            <div className="bg-orange-500 text-white p-6 rounded-xl my-8 text-center">
              <p className="text-xl font-black">
                The Bottom Line:
              </p>
              <p className="text-lg mt-3">
                Your competitors who are investing in modern SEO are getting recommended by AI. They're showing up in voice searches. They're being featured in Google's AI overviews. And they're getting the customers while you're stuck paying for ads that get more expensive every month.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Brain className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 2</div>
              <h2 className="text-3xl font-black text-slate-900">Understanding the AI Search Revolution</h2>
              <p className="text-slate-600 font-semibold">How customers are finding businesses in 2025</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              Customers aren't searching like they used to. They're having <strong>conversations</strong> with AI systems. They're asking complex questions. And AI is giving them direct recommendations.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 my-8">
              {[
                { stat: "60%", desc: "of searches show AI overviews" },
                { stat: "200M+", desc: "ChatGPT weekly users" },
                { stat: "50%", desc: "of searches are voice-based" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 text-center">
                  <p className="text-3xl font-black text-orange-500 mb-2">{item.stat}</p>
                  <p className="text-sm text-slate-700 font-semibold leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">People aren't typing keywords anymore. They're asking questions.</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              When a customer asks Google, ChatGPT, or Alexa: <em>"I need an emergency plumber in Austin, who should I call?"</em> — these AI systems scan hundreds of websites, reviews, and data points in milliseconds.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold mb-4">They're looking for:</p>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 my-6 space-y-4">
              {[
                { num: "1", title: "Comprehensive, helpful content", desc: "Not keyword-stuffed garbage, but real answers to real questions" },
                { num: "2", title: "Up-to-date information", desc: "Fresh content that proves you're active and current" },
                { num: "3", title: "Local relevance", desc: "Service area pages that prove you actually serve their neighborhood" },
                { num: "4", title: "Trust signals", desc: "Reviews, credentials, years in business, certifications" },
                { num: "5", title: "Technical excellence", desc: "Fast websites, mobile-friendly, proper schema markup" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-black">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{item.title}</p>
                    <p className="text-slate-700 font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-500 text-white p-6 rounded-xl my-8 text-center">
              <p className="text-xl font-black">
                If your website has all of this, AI recommends you. If it doesn't, AI recommends your competitor. It's that simple.
              </p>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Your competitors are already getting ChatGPT leads</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Business owners are getting leads from ChatGPT right now. People are asking AI for recommendations and AI is filtering through all the noise to recommend businesses with the best content, the best reviews, and the clearest proof they serve specific areas.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              This isn't coming. This is happening today.
            </p>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 3</div>
              <h2 className="text-3xl font-black text-slate-900">Creating Content Customers Actually Want</h2>
              <p className="text-slate-600 font-semibold">No more keyword stuffing or fluff</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              Let's talk about what <strong>real</strong> content looks like. Not the garbage that SEO agencies used to write in 2015. Not thin, pointless blog posts stuffed with keywords.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              We're talking about content that actually helps people.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Stop writing for Google. Start writing for people.</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-red-600 font-black text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">❌</span> OLD WAY (Doesn't Work)
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="font-semibold">"Best plumber in Austin" repeated 47 times</li>
                  <li className="font-semibold">Thin 300-word blog posts with no value</li>
                  <li className="font-semibold">Generic service pages with no details</li>
                  <li className="font-semibold">Content written for search engines</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-black text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span> NEW WAY (Works Great)
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="font-semibold">Answers to questions customers actually ask</li>
                  <li className="font-semibold">Detailed guides that solve real problems</li>
                  <li className="font-semibold">Service pages with pricing, process, FAQs</li>
                  <li className="font-semibold">Content written for real humans</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Turn every phone question into a page on your website</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Think about the questions your customers actually ask you on the phone. Every single one of those questions should be a page or blog post on your website.
            </p>

            <div className="bg-slate-50 rounded-xl p-6 my-8 space-y-6">
              {[
                {
                  title: "For HVAC Companies:",
                  questions: [
                    "How much does it cost to replace an HVAC system?",
                    "What size AC unit do I need for my house?",
                    "Should I repair or replace my furnace?",
                    "How often should I service my AC unit?",
                    "Why is my AC blowing warm air?"
                  ]
                },
                {
                  title: "For Plumbers:",
                  questions: [
                    "What causes low water pressure?",
                    "How do I know if I need to replace my water heater?",
                    "What's the difference between tank and tankless water heaters?",
                    "Why does my drain keep clogging?",
                    "When should I call a plumber for a leak?"
                  ]
                },
                {
                  title: "For Electricians:",
                  questions: [
                    "How long does it take to rewire a house?",
                    "Do I need to upgrade my electrical panel?",
                    "What causes circuit breakers to trip?",
                    "How much does it cost to install a ceiling fan?",
                    "When should I replace outlets?"
                  ]
                }
              ].map((section, i) => (
                <div key={i}>
                  <p className="font-black text-slate-900 mb-3">{section.title}</p>
                  <ul className="space-y-2">
                    {section.questions.map((q, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700 font-semibold">
                        <span className="text-orange-500 font-black mt-0.5">•</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              When you answer these questions thoroughly and honestly, AI systems recognize you as an expert. They recommend you. Customers trust you before they even call.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Keywords matter. But helping people matters more.</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              People think just putting keywords in certain areas will do a lot for them. Keywords matter. Optimization matters. But the content itself matters more.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              Are you actually helping people find what they need? Are you establishing your authority? Does your homepage convert people?
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
              <p className="text-lg leading-relaxed">
                A lot of businesses have content on their website that doesn't get someone to book a job. It doesn't build trust. It doesn't build authority. It doesn't help answer or call out what visitors are looking for. So they never do anything. They lose that lead. And that person goes to the next business.
              </p>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              People are in an era of not wanting to waste their time calling, emailing, following up. They want their stuff answered right away. That's what helps them choose a good company.
            </p>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Monitor className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 4</div>
              <h2 className="text-3xl font-black text-slate-900">Fix Your Website First</h2>
              <p className="text-slate-600 font-semibold">Before anything else, your site needs to convert</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              Your service pages are where customers land, decide to trust you, and pick up the phone. But most home service websites have a fundamental problem: they don't convert.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              You can rank #1 on Google, but if your website doesn't answer the three questions homeowners ask, they'll call your competitor instead.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Three questions every homeowner asks before they call</h3>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 my-6">
              <p className="text-lg font-bold text-slate-900 mb-4">The real things homeowners want answered:</p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-orange-500">1.</span>
                  <span className="text-slate-800 font-semibold text-lg">Can they trust you?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-orange-500">2.</span>
                  <span className="text-slate-800 font-semibold text-lg">Are you a good person or good company to work with?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl font-black text-orange-500">3.</span>
                  <span className="text-slate-800 font-semibold text-lg">Will you do quality work?</span>
                </li>
              </ol>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              Most businesses don't answer these questions well enough. Your website has about 10 seconds to build trust before they click the back button.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">What your website needs to convert visitors</h3>

            <div className="space-y-4 my-8">
              {[
                { title: "Clear Service Information", desc: "Don't make people hunt for what you do. Your homepage should immediately show your main services and your service area." },
                { title: "Pricing Information (Yes, Really)", desc: "Homeowners want pricing. Even ranges help. \"AC installations typically range from $X to $Y depending on size.\" You'll lose more leads by hiding pricing than by showing it." },
                { title: "Trust Signals Throughout", desc: "Reviews, certifications, years in business, guarantees, photos of your team. These should be visible on every page, not buried in an \"About\" section." },
                { title: "Easy Ways to Contact You", desc: "Phone number in the header. Click-to-call button on mobile. Contact form that doesn't ask for 15 fields. Make it stupid simple." },
                { title: "Fast Load Times", desc: "If your site takes more than 3 seconds to load, people leave. This is especially true on mobile, where most of your traffic comes from." },
                { title: "Mobile Experience", desc: "Pull up your website on your phone right now. Can you easily click the phone number? Can you find your services? Can you see pricing? If not, you're losing leads every single day." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-slate-200 rounded-xl p-5">
                  <p className="font-black text-slate-900 text-lg mb-1">{item.title}</p>
                  <p className="text-slate-700 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 5 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 5</div>
              <h2 className="text-3xl font-black text-slate-900">Create Content That Ranks and Converts</h2>
              <p className="text-slate-600 font-semibold">On-page SEO that actually works</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              Once your website converts, you need content that gets people there in the first place. This is your on-page SEO: everything that lives on your website.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">One generic "Services" page won't cut it anymore</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              You need a separate, comprehensive page for every major service you offer. Not one page that lists everything. Individual pages that go deep.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
              <p className="text-lg font-bold text-slate-900 mb-4">Each service page needs:</p>
              <ul className="space-y-3">
                {[
                  "Clear description of what you do and how you do it",
                  "Pricing information that helps people budget",
                  "Step-by-step process walkthrough",
                  "Common problems this service solves",
                  "Frequently asked questions",
                  "Trust signals specific to this service"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed font-bold mb-4">
              You need individual pages for services like:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                "AC Installation",
                "AC Repair",
                "Furnace Installation",
                "Furnace Repair",
                "Water Heater Replacement",
                "Emergency Plumbing",
                "Drain Cleaning",
                "Electrical Panel Upgrade"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-bold text-slate-900">{service}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Don't forget service area pages</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              You also need pages for the cities and neighborhoods you serve. When someone searches "plumber in Scottsdale," Google wants to show businesses that explicitly serve Scottsdale.
            </p>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 my-6">
              <p className="text-lg font-bold text-slate-900 mb-4">These pages should include:</p>
              <ul className="space-y-2">
                {[
                  "Why you serve this area and how long",
                  "Response times to that area",
                  "Reviews from customers in that neighborhood",
                  "Services you offer there"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-black">•</span>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              But don't go overboard. Create these pages where people actually search, not just for every zip code.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Keywords matter. But helping people matters more.</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              People think just putting keywords in certain areas will do a lot for them. Keywords matter. Optimization matters. But the content itself matters more.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              Are you actually helping people find what they need? Are you establishing your authority?
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              A lot of businesses have content on their website that doesn't get someone to book a job. It doesn't build trust. It doesn't build authority. It doesn't help answer what visitors are looking for. So they never do anything. They lose that lead. And that person goes to the next business.
            </p>
          </div>
        </section>

        {/* Chapter 6 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Link className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 6</div>
              <h2 className="text-3xl font-black text-slate-900">Build Trust Outside Your Website</h2>
              <p className="text-slate-600 font-semibold">Off-page SEO that drives rankings and calls</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              On-page SEO is what's on your website. Off-page SEO is everything that happens outside your website that tells Google you're legitimate and trustworthy.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              This is the part most business owners don't see, but it's critical for rankings.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Your Google Business Profile is everything</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              This isn't just a listing. For home service businesses, your Google Business Profile is often more important than your website.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              When someone searches "emergency plumber near me," Google shows three businesses in the map pack. That's your Google Business Profile.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
              <p className="text-lg font-bold text-slate-900 mb-4">What needs to be optimized:</p>
              <ul className="space-y-2">
                {[
                  "Complete business information (hours, services, service areas)",
                  "Regular posts and updates",
                  "Photos of your work, your team, your trucks",
                  "Reviews (quantity and quality both matter)",
                  "Responses to every review",
                  "Service categories selected correctly"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-black">•</span>
                    <span className="text-slate-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              Most businesses set this up once and forget it. Big mistake. This should be updated weekly.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Citations and directories matter more than you think</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              A citation is anywhere your business name, address, and phone number appear online. These send trust signals to Google.
            </p>

            <div className="bg-slate-50 rounded-xl p-6 my-6">
              <p className="text-lg font-bold text-slate-900 mb-4">You need consistent citations on:</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Yelp",
                  "BBB",
                  "Angie's List",
                  "HomeAdvisor",
                  "Thumbtack",
                  "Facebook",
                  "Industry-specific directories",
                  "Chamber of Commerce sites"
                ].map((dir, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-slate-800 font-semibold">{dir}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              The key word is consistent. If your business name is "ABC Plumbing" on Google but "ABC Plumbing LLC" on Yelp, that confuses Google and hurts your rankings.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Reviews are ranking signals (not just trust signals)</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Reviews do two things:
            </p>

            <ol className="space-y-2 my-4">
              <li className="flex items-start gap-3">
                <span className="text-xl font-black text-orange-500">1.</span>
                <span className="text-slate-800 font-semibold">They build trust with potential customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl font-black text-orange-500">2.</span>
                <span className="text-slate-800 font-semibold">They send ranking signals to Google</span>
              </li>
            </ol>

            <p className="text-lg text-slate-800 leading-relaxed">
              More reviews equals higher rankings. Better reviews equals higher rankings. Recent reviews equals higher rankings.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              You need a system for collecting reviews consistently. Not once in a while when you remember. Every single job should turn into a review request.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Local backlinks build authority</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              When other local websites link to your website, it tells Google you're a legitimate local business.
            </p>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 my-6">
              <p className="text-lg font-bold text-slate-900 mb-4">Good local backlinks come from:</p>
              <ul className="space-y-2">
                {[
                  "Local news mentions",
                  "Chamber of Commerce",
                  "Business associations",
                  "Supplier websites",
                  "Local event sponsorships",
                  "Community involvement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-black">•</span>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              This is harder to build than citations, but it's more valuable. One good local backlink is worth 50 directory listings.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Social profiles support your local presence</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              You don't need to be a social media expert. But you do need active profiles that Google can see.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              Post occasionally. Keep your business information consistent. Link back to your website. That's enough.
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-xl my-8 text-center">
              <p className="text-xl font-black">
                This all works together
              </p>
              <p className="text-slate-300 mt-3">
                Your website is the foundation. Your on-page content gets you found. Your off-page signals tell Google you're trustworthy and local. All three have to work together.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 7 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 7</div>
              <h2 className="text-3xl font-black text-slate-900">Build an Internal Team or Hire an Agency?</h2>
              <p className="text-slate-600 font-semibold">The honest truth about costs and results</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              This is the question every home service business owner asks. The answer depends on your size and goals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Building Internal</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Best For:</p>
                    <p className="text-slate-700 font-semibold">Large companies with $5M+ revenue, multiple locations, long-term vision</p>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Typical Cost:</p>
                    <p className="text-slate-700 font-semibold">$120K-$180K/year per person (SEO Manager + Content Writer minimum)</p>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Pros:</p>
                    <ul className="space-y-1 text-slate-700 font-semibold text-sm">
                      <li>• Full control over strategy and execution</li>
                      <li>• Deep company knowledge</li>
                      <li>• Long-term investment in your business</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Cons:</p>
                    <ul className="space-y-1 text-slate-700 font-semibold text-sm">
                      <li>• Expensive upfront investment</li>
                      <li>• Hard to find good people who know home services</li>
                      <li>• Takes 6-12 months to see results</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Hiring an Agency</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Best For:</p>
                    <p className="text-slate-700 font-semibold">Most home service businesses under $5M revenue who want results fast</p>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Typical Cost:</p>
                    <p className="text-slate-700 font-semibold">$2,000-$5,000/month depending on market and competition</p>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Pros:</p>
                    <ul className="space-y-1 text-slate-700 font-semibold text-sm">
                      <li>• Immediate expertise</li>
                      <li>• Faster results</li>
                      <li>• Lower upfront cost</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wide mb-2">Cons:</p>
                    <ul className="space-y-1 text-slate-700 font-semibold text-sm">
                      <li>• Less direct control</li>
                      <li>• Many bad agencies exist</li>
                      <li>• Monthly ongoing cost</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Most businesses under $5M should hire an agency</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              For most home service businesses under $5M in revenue, hire a specialized home services SEO agency. You'll get faster results, expert strategy, and pay less than hiring full-time employees.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              Once you hit $5M+, consider building internal but keep the agency for strategy and technical work. The best setup is often a hybrid approach.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Red Flags When Hiring an Agency</h3>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 my-6">
              <ul className="space-y-3">
                {[
                  "They promise #1 rankings in 30 days (impossible)",
                  "They work with all industries (you want home services specialists)",
                  "They won't show you examples of their work",
                  "They use black-hat tactics or 'secret tricks'",
                  "They lock you into long contracts with no flexibility",
                  "They don't explain their strategy in plain English"
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚩</span>
                    <span className="text-slate-900 font-bold pt-1">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Questions You Should Ask Any Agency</h3>

            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Before you hire anyone, ask these questions:
            </p>

            <div className="space-y-4 my-8">
              {[
                { q: "Do you specialize in home service businesses?", a: "You want someone who understands your industry, not a generalist." },
                { q: "Can you show me examples of service pages and service area pages you've created?", a: "See their actual work. If they can't show you, walk away." },
                { q: "What's your content creation process?", a: "Are they writing valuable content or churning out garbage?" },
                { q: "How do you measure success?", a: "Rankings matter, but calls and booked jobs matter more." },
                { q: "What happens if we're not happy?", a: "You should be able to leave without being locked in forever." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <p className="font-black text-slate-900 mb-2">"{item.q}"</p>
                  <p className="text-slate-700 font-semibold">{item.a}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Too many business owners get burned by bad agencies</h3>

            <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
              <p className="text-lg leading-relaxed">
                It hurts seeing business owners get burned by bad agencies. Too many have lost money working with the wrong people. They didn't know the right questions to ask. That's why education matters. Whether you work with us or someone else, you need to know what good SEO looks like and what questions to ask.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 8 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 8</div>
              <h2 className="text-3xl font-black text-slate-900">You Shouldn't Have to Do This Yourself</h2>
              <p className="text-slate-600 font-semibold">How to think about SEO as a business owner</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              You've read this far. You understand why SEO matters. You see what needs to be done. Now let's be honest about what it actually takes to make this happen.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Look at everything you just read. Now multiply it by 100.</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Look at everything we've covered in this guide:
            </p>

            <ul className="space-y-2 my-6">
              {[
                "Service pages for every service you offer (each one needs 2,000+ words of quality content)",
                "Service area pages for every city and neighborhood you serve (could be 10, could be 50)",
                "Blog posts answering customer questions (at least 20-30 to start)",
                "Technical website optimization (schema markup, site speed, mobile optimization)",
                "Off-page work (citations, directories, backlinks, social profiles)",
                "Ongoing content creation and optimization (this never stops)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-slate-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              This isn't a weekend project. This isn't something you squeeze in between service calls.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">What Most Business Owners Don't Realize</h3>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 my-8">
              <p className="text-lg font-bold text-slate-900 mb-4">Creating one good service page takes 4-6 hours if you know what you're doing. That includes:</p>
              <ul className="space-y-2">
                {[
                  "Research on what customers are actually searching for",
                  "Writing compelling, helpful content",
                  "Adding proper technical elements",
                  "Optimizing for both humans and search engines"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 font-black">•</span>
                    <span className="text-slate-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed">
              Multiply that by 8-12 services. Then add 15-20 service area pages. Then add ongoing blog content.
            </p>

            <p className="text-xl text-slate-900 leading-relaxed font-black my-6">
              You're looking at hundreds of hours of work.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              And that's just the content creation. That doesn't include technical website improvements, citation building, Google Business Profile optimization, review generation systems, performance tracking, or staying current with Google algorithm changes.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Your expertise should stay in your business, not in SEO</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              You didn't start your business to become an SEO expert. You started it to provide excellent HVAC, plumbing, electrical, or other home services.
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-xl my-8">
              <p className="text-lg leading-relaxed">
                Your time is worth $200-$500 per hour when you're running your business, managing teams, and serving customers. <strong>Spending that time trying to figure out SEO is expensive. Really expensive.</strong>
              </p>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Here's what you should actually focus on</h3>

            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Your job as the business owner is to:
            </p>

            <div className="space-y-3 my-6">
              {[
                { title: "Understand what needs to happen", desc: "You've done that by reading this guide. You know why SEO matters and what good looks like." },
                { title: "Ask the right questions", desc: "When you talk to agencies, you now know what to ask. You know the red flags. You know what quality looks like." },
                { title: "Make the strategic decision", desc: "Build internal or hire an agency? For most businesses under $5M, hiring an agency is faster and cheaper." },
                { title: "Provide the expertise", desc: "You know your business better than anyone. A good agency will pull that knowledge out of you and turn it into content that ranks." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-slate-200 rounded-xl p-5">
                  <p className="font-black text-slate-900 text-lg mb-1">{i + 1}. {item.title}</p>
                  <p className="text-slate-700 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">How good agencies actually work (month by month)</h3>

            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Here's what actually happens when you work with a good SEO agency:
            </p>

            <div className="space-y-4 my-8">
              {[
                { week: "Week 1: Discovery", desc: "The agency audits your current situation. They identify what's working, what's broken, and what's missing. They understand your services, your service areas, and your competition." },
                { week: "Week 2: Strategy", desc: "They build a custom roadmap for your business. Not a generic template. A plan specific to your market, your competition, and your goals." },
                { week: "Week 3: Foundation", desc: "They start with the highest-impact work. Usually that means fixing your website to convert better and creating your most important service pages." },
                { week: "Week 4: Momentum", desc: "More content gets created. Service area pages go live. Technical work happens in the background. You start seeing movement." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <p className="font-black text-slate-900 mb-2">{item.week}</p>
                  <p className="text-slate-700 font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              Then it compounds. Month after month.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">While you're deciding, do these five things</h3>

            <p className="text-lg text-slate-800 leading-relaxed mb-6">
              While you're deciding who to work with, here are a few things you can tackle:
            </p>

            <div className="space-y-4 my-8">
              {[
                { num: "1", title: "Audit your current situation", desc: "Google your main services and your cities. See what shows up. Take screenshots. This is your baseline." },
                { num: "2", title: "Write down your customer questions", desc: "Keep a list for one week. Every question a customer asks on the phone or in person. These become content topics." },
                { num: "3", title: "Check your Google Business Profile", desc: "Is it claimed? Is it complete? Are your service areas listed? This is free and takes 30 minutes." },
                { num: "4", title: "Look at your service pages honestly", desc: "Do they have pricing information? Do they answer questions? Do they build trust? Or are they thin and generic?" },
                { num: "5", title: "Talk to agencies", desc: "Schedule calls with 2-3 specialized home services SEO agencies. Ask them the questions from Chapter 6. See who gets it." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border-2 border-slate-200 rounded-xl p-5">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg mb-1">{item.title}</p>
                    <p className="text-slate-700 font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
              <p className="text-xl font-black text-slate-900 mb-3">Trying to DIY this is the most expensive option</p>
              <p className="text-slate-800 font-semibold">
                SEO isn't something you do once. It's not a project with an end date. It's an ongoing investment in your business's digital foundation. You need someone who understands home service businesses specifically, has done this hundreds of times before, stays current with constant Google changes, can execute consistently month after month, and knows how to create content that converts, not just ranks.
              </p>
            </div>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              That's either a full-time internal team (expensive) or a specialized agency (faster and more affordable for most businesses). Either way, trying to do this yourself while running your business is the most expensive option of all.
            </p>
          </div>
        </section>

        {/* Chapter 9 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-orange-500">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">Chapter 9</div>
              <h2 className="text-3xl font-black text-slate-900">Don't Get Left Behind</h2>
              <p className="text-slate-600 font-semibold">Every month you wait costs you more</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed">
              SEO in 2025 isn't optional. It's not a "nice to have." It's the difference between growing your business and watching your competitors eat your lunch.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              AI is changing everything. Google is changing everything. The businesses that adapt and invest in real, valuable SEO right now will dominate their markets.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              The businesses that don't? They'll be left behind, wondering why their phone stopped ringing.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Remember the 401k Analogy</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              The earlier you start, the more you end up with long term. SEO works the same way. Every month you wait is another month your competitors are building their foundation and getting ahead.
            </p>

            <div className="bg-orange-500 text-white p-8 rounded-xl my-8 text-center">
              <p className="text-2xl font-black mb-4">
                Starting now vs waiting 6 months creates a massive difference in long-term results.
              </p>
              <p className="text-xl">
                Starting now vs waiting a year? You'll be playing catch-up for the next two years.
              </p>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">Don't chase cheap content. Chase real value.</h3>

            <p className="text-lg text-slate-800 leading-relaxed">
              Don't just create content. Create value. Don't just build pages. Build authority. Don't just optimize for search engines. Optimize for the people who will hire you.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed">
              The agencies that promise quick results with cheap content are setting you up for failure. The work takes time. It takes expertise. It takes quality.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed font-bold">
              But when it's done right, it compounds. Like a 401k. Month after month. Year after year.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4">While you wait, your competitors are doing all of this</h3>

            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Whether you build an internal team or hire an agency like us, the important thing is that you start NOW.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              Every day you wait is another day your competitors are:
            </p>

            <ul className="space-y-2 my-6">
              {[
                "Getting recommended by AI",
                "Ranking higher in Google",
                "Showing up in more neighborhoods",
                "Answering questions your customers are asking",
                "Building trust before customers ever call",
                "Booking jobs that should be yours"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-500 font-black text-xl">•</span>
                  <span className="text-slate-800 font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-900 text-white p-10 rounded-2xl my-10 text-center">
              <p className="text-4xl font-black mb-4">Don't get left behind.</p>
            </div>
          </div>
        </section>

      </div>

      {/* More Resources Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              More Free Resources
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Take the next step in evaluating and improving your marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Marketing Scorecard */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Marketing Scorecard</h3>
                  <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">Free Assessment</p>
                </div>
              </div>

              <p className="text-slate-700 font-semibold leading-relaxed mb-6">
                Get a detailed analysis of your website, lead flow, Google presence, and advertising. Takes 5 minutes and reveals exactly where you're losing customers.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Rate your marketing across 20 key areas',
                  'See exactly where you\'re falling behind',
                  'Get a custom action plan to fix what\'s broken',
                  'Understand your estimated monthly revenue loss'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-700 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onTakeScorecard}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-black text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Take the Scorecard
              </button>
            </div>

            {/* ROI Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Marketing ROI Calculator</h3>
                  <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">Free Tool</p>
                </div>
              </div>

              <p className="text-slate-700 font-semibold leading-relaxed mb-6">
                See exactly what more leads would mean for your revenue. Enter your numbers and instantly see the potential impact of effective marketing on your bottom line.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Calculate your potential monthly revenue',
                  'See what 2x or 3x more leads means in dollars',
                  'Understand the real cost of not investing in marketing',
                  'Get instant results based on your numbers'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-700 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onCalculateROI}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-black text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Calculate Your ROI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We help home service businesses implement everything in this guide. Let's talk about your SEO strategy.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-10 text-left">
            <p className="text-lg font-bold text-white mb-4">Here's what happens on our free strategy call:</p>
            <ul className="space-y-3">
              {[
                "We'll review your current SEO situation honestly",
                "We'll identify your biggest opportunities",
                "We'll give you a clear roadmap whether you work with us or not",
                "We'll answer any questions about SEO, agencies, or strategy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-slate-200 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-200 font-bold mt-4">No pressure. No hard sell. Just real guidance.</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 mb-10 max-w-2xl mx-auto border border-slate-700">
            <h3 className="text-lg font-black text-white mb-4">We help you even if you don't hire us</h3>
            <p className="text-slate-300 font-semibold leading-relaxed">
              Too many business owners have lost money working with the wrong agencies. They didn't know the right questions to ask. We want to help you avoid that pain whether you work with us or not.
            </p>
            <p className="text-slate-300 font-semibold leading-relaxed mt-3">
              We're not here to sell you. We're here to talk and help you understand what you need. Even if you go with a different agency, we want you equipped with the right knowledge.
            </p>
          </div>

          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-lg text-xl font-bold transition-all shadow-2xl hover:shadow-orange-500/30 hover:scale-105 mb-8">
            Schedule Your Free Strategy Call
            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <div className="border-t border-white/20 pt-6">
            <p className="text-slate-400 text-sm font-semibold mb-2">
              After you book, here's what happens next:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-slate-300 text-sm max-w-2xl mx-auto">
              {[
                "You'll get an email immediately with next steps",
                "We'll call within 24 hours to schedule your strategy call",
                "The call typically lasts 30-45 minutes"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="font-black text-orange-500">{i + 1}.</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-10">
            © 2025 ProofPilot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

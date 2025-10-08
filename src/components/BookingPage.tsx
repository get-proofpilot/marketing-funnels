import { Calendar, Clock, Video, CheckCircle, Phone } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-orange-200">
            <Calendar className="w-4 h-4" />
            <span>Free Strategy Session</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Book Your Free 30-Minute
            <span className="block text-orange-600">Strategy Call</span>
          </h1>

          <p className="text-xl text-slate-700">
            Let's discuss your results and create a custom roadmap for your business
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-8 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What to Expect on This Call:</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Deep Dive Into Your Results</h3>
                <p className="text-slate-600">
                  We'll analyze your quiz responses and identify the biggest opportunities for your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Custom Growth Strategy</h3>
                <p className="text-slate-600">
                  Get a personalized plan showing exactly what to tackle first for maximum ROI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Competitive Analysis</h3>
                <p className="text-slate-600">
                  Learn what your top competitors are doing and how to outperform them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Revenue Projections</h3>
                <p className="text-slate-600">
                  See realistic growth projections based on our proven strategies for home service businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="text-sm text-slate-600">Duration</div>
                  <div className="font-bold text-slate-900">30 Minutes</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="text-sm text-slate-600">Format</div>
                  <div className="font-bold text-slate-900">Video Call (Zoom)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl mb-4"
            >
              <Phone className="w-5 h-5" />
              Call Now: (555) 123-4567
            </a>

            <p className="text-slate-600 text-sm">
              Or email us at{' '}
              <a href="mailto:hello@youragency.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                hello@youragency.com
              </a>
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <p className="text-slate-700 mb-2">
            <span className="font-bold text-slate-900">No high-pressure sales.</span> Just real,
            actionable advice from experts who specialize in home service marketing.
          </p>
          <p className="text-slate-600 text-sm">
            If we're not the right fit, we'll tell you honestly and point you in the right direction.
          </p>
        </div>
      </div>
    </div>
  );
}

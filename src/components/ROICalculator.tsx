import { useState } from 'react';
import { DollarSign, TrendingUp, Calculator, ArrowUp } from 'lucide-react';
import RevenueProjectionChart from './RevenueProjectionChart';

export default function ROICalculator() {
  const [avgJobValue, setAvgJobValue] = useState('500');
  const [currentLeads, setCurrentLeads] = useState('10');
  const [conversionRate, setConversionRate] = useState('30');
  const [selectedScenario, setSelectedScenario] = useState<'good' | 'better' | 'best'>('better');

  const calculateROI = () => {
    const jobValue = parseFloat(avgJobValue) || 0;
    const leads = parseFloat(currentLeads) || 0;
    const conversion = parseFloat(conversionRate) || 0;

    const currentJobs = leads * (conversion / 100);
    const currentRevenue = currentJobs * jobValue;

    // Good, Better, Best scenarios
    const goodLeads = leads * 2;
    const betterLeads = leads * 5;
    const bestLeads = leads * 15; // Average of 10-20x

    const goodJobs = goodLeads * (conversion / 100);
    const betterJobs = betterLeads * (conversion / 100);
    const bestJobs = bestLeads * (conversion / 100);

    const goodRevenue = goodJobs * jobValue;
    const betterRevenue = betterJobs * jobValue;
    const bestRevenue = bestJobs * jobValue;

    const goodIncrease = goodRevenue - currentRevenue;
    const betterIncrease = betterRevenue - currentRevenue;
    const bestIncrease = bestRevenue - currentRevenue;

    return {
      currentRevenue,
      goodRevenue,
      betterRevenue,
      bestRevenue,
      goodIncrease,
      betterIncrease,
      bestIncrease,
      currentJobs,
      goodLeads,
      betterLeads,
      bestLeads,
      goodJobs,
      betterJobs,
      bestJobs
    };
  };

  const results = calculateROI();

  const scenarios = [
    { key: 'good' as const, label: 'Good', multiplier: 2, color: 'orange' },
    { key: 'better' as const, label: 'Better', multiplier: 5, color: 'blue' },
    { key: 'best' as const, label: 'Best', multiplier: 15, color: 'green' }
  ];

  const selectedMultiplier = scenarios.find(s => s.key === selectedScenario)?.multiplier || 5;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white py-16">      <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 mb-6">
          <Calculator className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
          <span className="text-xs font-bold text-orange-900 uppercase tracking-wider">
            Interactive Revenue Calculator
          </span>
        </div>
        <h3 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
          See Your Revenue Growth Potential
        </h3>
        <p className="text-xl text-slate-600 font-semibold max-w-2xl mx-auto">
          Discover what happens to your bottom line when you get more leads consistently
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">

      {/* Input Section */}
      <div className="bg-slate-900 p-8">
        <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">1</div>
          Enter Your Numbers
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-bold text-white/90 mb-2">
            Average Job Value
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
            <input
              type="number"
              value={avgJobValue}
              onChange={(e) => setAvgJobValue(e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg font-bold text-white focus:border-orange-500 focus:outline-none focus:bg-white/20 transition-all"
              placeholder="500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-white/90 mb-2">
            Current Monthly Leads
          </label>
          <input
            type="number"
            value={currentLeads}
            onChange={(e) => setCurrentLeads(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg font-bold text-white focus:border-orange-500 focus:outline-none focus:bg-white/20 transition-all"
            placeholder="10"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-white/90 mb-2">
            Conversion Rate
          </label>
          <div className="relative">
            <input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(e.target.value)}
              className="w-full pr-8 pl-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg font-bold text-white focus:border-orange-500 focus:outline-none focus:bg-white/20 transition-all"
              placeholder="30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
          </div>
        </div>
        </div>
      </div>

      {/* Scenario Selector */}
      <div className="p-8 border-b-2 border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">2</div>
          Choose Your Growth Scenario
        </h4>
        <div className="grid grid-cols-3 gap-4">
          {scenarios.map((scenario) => {
            const isSelected = selectedScenario === scenario.key;
            const colorClasses = {
              orange: {
                border: 'border-orange-500',
                bg: 'bg-orange-50',
                text: 'text-orange-600',
                textDark: 'text-orange-700'
              },
              blue: {
                border: 'border-blue-500',
                bg: 'bg-blue-50',
                text: 'text-blue-600',
                textDark: 'text-blue-700'
              },
              green: {
                border: 'border-green-500',
                bg: 'bg-green-50',
                text: 'text-green-600',
                textDark: 'text-green-700'
              }
            }[scenario.color];

            return (
              <button
                key={scenario.key}
                onClick={() => setSelectedScenario(scenario.key)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? `${colorClasses.border} ${colorClasses.bg} shadow-lg`
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`text-3xl font-black mb-2 ${
                  isSelected ? colorClasses.text : 'text-slate-900'
                }`}>
                  {scenario.multiplier}x
                </div>
                <div className={`text-sm font-bold uppercase tracking-wide mb-1 ${
                  isSelected ? colorClasses.textDark : 'text-slate-600'
                }`}>
                  {scenario.label}
                </div>
                <div className={`text-xs font-semibold ${
                  isSelected ? colorClasses.text : 'text-slate-500'
                }`}>
                  {scenario.multiplier}x More Leads
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Revenue Projection Chart */}
      <div className="p-8 border-b-2 border-slate-200">
        <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">3</div>
          12-Month Revenue Projection
        </h4>
        <RevenueProjectionChart
          currentRevenue={results.currentRevenue}
          projectedRevenue={
            selectedScenario === 'good' ? results.goodRevenue :
            selectedScenario === 'better' ? results.betterRevenue :
            results.bestRevenue
          }
          scenarioColor={scenarios.find(s => s.key === selectedScenario)?.color || 'blue'}
          scenarioLabel={scenarios.find(s => s.key === selectedScenario)?.label || 'Better'}
        />
      </div>

      {/* Results Section */}
      <div className="p-8">
        <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">4</div>
          Key Performance Indicators
        </h4>

        {/* Comparison Bars */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 mb-8 border-2 border-slate-200">
          <div className="space-y-6">
            {/* Current Revenue Bar */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                  <span className="text-sm font-bold text-slate-700">Current Monthly Revenue</span>
                </div>
                <span className="text-xl font-black text-slate-900">${results.currentRevenue.toLocaleString()}</span>
              </div>
              <div className="relative h-14 bg-slate-900/5 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-500/20"></div>
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-end pr-4 shadow-lg" style={{ width: '100%' }}>
                  <span className="text-sm font-bold text-white drop-shadow-md">{results.currentJobs.toFixed(1)} jobs/month</span>
                </div>
              </div>
            </div>

            {/* Projected Revenue Bar */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    selectedScenario === 'good' ? 'bg-orange-500' :
                    selectedScenario === 'better' ? 'bg-blue-500' : 'bg-green-500'
                  } shadow-lg`}></div>
                  <span className="text-sm font-bold text-slate-700">
                    {selectedScenario === 'good' ? 'Good' : selectedScenario === 'better' ? 'Better' : 'Best'} Scenario ({selectedMultiplier}x Leads)
                  </span>
                </div>
                <span className="text-xl font-black text-slate-900">
                  ${(selectedScenario === 'good' ? results.goodRevenue : selectedScenario === 'better' ? results.betterRevenue : results.bestRevenue).toLocaleString()}
                </span>
              </div>
              <div className="relative h-20 bg-slate-900/5 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className={`absolute inset-0 ${
                  selectedScenario === 'good' ? 'bg-gradient-to-r from-orange-500/10 to-orange-600/10' :
                  selectedScenario === 'better' ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10' :
                  'bg-gradient-to-r from-green-500/10 to-green-600/10'
                }`}></div>
                <div
                  className={`absolute inset-y-0 left-0 flex items-center justify-end pr-4 transition-all duration-1000 ease-out shadow-2xl ${
                    selectedScenario === 'good' ? 'bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600' :
                    selectedScenario === 'better' ? 'bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600' :
                    'bg-gradient-to-r from-green-500 via-green-500 to-green-600'
                  }`}
                  style={{
                    width: `${Math.min(100, (selectedScenario === 'good' ? results.goodRevenue : selectedScenario === 'better' ? results.betterRevenue : results.bestRevenue) / results.currentRevenue * 20)}%`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <span className="text-base font-bold text-white drop-shadow-lg relative z-10">
                    {(selectedScenario === 'good' ? results.goodJobs : selectedScenario === 'better' ? results.betterJobs : results.bestJobs).toFixed(1)} jobs/month
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                  <ArrowUp className="w-5 h-5 text-green-600" strokeWidth={3} />
                  <span className="text-base font-black text-green-700">
                    +${(selectedScenario === 'good' ? results.goodIncrease : selectedScenario === 'better' ? results.betterIncrease : results.bestIncrease).toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-green-600">per month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Increase</p>
              </div>
              <p className="text-3xl font-black text-white mb-1">
                +${(selectedScenario === 'good' ? results.goodIncrease : selectedScenario === 'better' ? results.betterIncrease : results.bestIncrease).toLocaleString()}
              </p>
              <p className="text-xs font-semibold text-slate-400">Additional revenue</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Annual Impact</p>
              </div>
              <p className="text-3xl font-black text-white mb-1">
                +${((selectedScenario === 'good' ? results.goodIncrease : selectedScenario === 'better' ? results.betterIncrease : results.bestIncrease) * 12).toLocaleString()}
              </p>
              <p className="text-xs font-semibold text-slate-400">Yearly projection</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-green-500" strokeWidth={2.5} />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">New Jobs Per Month</p>
              </div>
              <p className="text-3xl font-black text-white mb-1">
                +{((selectedScenario === 'good' ? results.goodJobs : selectedScenario === 'better' ? results.betterJobs : results.bestJobs) - results.currentJobs).toFixed(1)}
              </p>
              <p className="text-xs font-semibold text-slate-400">Additional capacity</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
          <p className="text-slate-300 text-lg mb-3 font-semibold">
            Ready to turn these numbers into reality?
          </p>
          <p className="text-3xl font-black text-white mb-6">
            This is What Effective Marketing Does
          </p>
          <p className="text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            It's not about spending money on ads or SEO—it's about investing in a system that generates more leads consistently. The question isn't whether you can afford to invest in marketing. It's whether you can afford not to.
          </p>
        </div>
      </div>

      </div>
      </div>
    </div>
  );
}

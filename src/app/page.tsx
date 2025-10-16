// src/app/page.tsx
'use client';

import { useMemo, useState } from 'react';

const OVERVIEW_URL = "https://public.tableau.com/views/CaliforniaEVChargingInsightsDashboard/CaliforniaEVChargingOverview?:showVizHome=no&:tabs=yes&:toolbar=yes&language=en-US";

type TabKey = 'summary' | 'sources' | 'dashboards' | 'insights' | 'method';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'summary', label: 'Project Summary' },
  { key: 'sources', label: 'Data Sources' },
  { key: 'dashboards', label: 'Dashboards' },
  { key: 'insights', label: 'Detailed Insights' },
  { key: 'method', label: 'Methodology & Scoring' },
];

export default function Home() {
  const [tab, setTab] = useState<TabKey>('summary');
  const iframeSrc = useMemo(() => OVERVIEW_URL, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* HEADER */}
      <header className="relative mx-auto max-w-7xl px-3 py-8 md:px-6 md:py-16 lg:py-20">
        {/* Background decorative elements - hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-tr from-emerald-100/40 to-cyan-100/40 rounded-full blur-2xl -z-10"></div>
        
        <div className="relative text-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4 md:mb-8 card-shadow">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-soft"></div>
            <span className="hidden sm:inline">Based on 2024 data</span>
            <span className="sm:hidden">2024 Data</span>
          </div>
          
          <h1 className="text-2xl leading-tight sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-3 md:mb-6 px-1">
            <span className="block">EV Charging:</span>
            <span className="block">Utilization & Reliability</span>
            <span className="block text-california-gradient mt-1 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
              in California
            </span>
          </h1>
          
          <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-slate-600 mt-4 md:mt-8 max-w-2xl md:max-w-4xl mx-auto px-2">
            Comprehensive analysis of EV charger locations vs. demand, highlighting coverage gaps and priority sites for DC fast charging expansion.
          </p>
          
          {/* Key statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-6 md:mt-12 px-2 max-w-4xl mx-auto">
            <div className="text-center p-3 md:p-6 bg-white/90 backdrop-blur-enhanced rounded-xl md:rounded-2xl border border-slate-200/50 card-shadow">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">58</div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wide leading-tight">Counties</div>
            </div>
            <div className="text-center p-3 md:p-6 bg-white/90 backdrop-blur-enhanced rounded-xl md:rounded-2xl border border-green-200/50 card-shadow">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-green-600 mb-1">136K+</div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wide leading-tight">Ports</div>
            </div>
            <div className="text-center p-3 md:p-6 bg-white/90 backdrop-blur-enhanced rounded-xl md:rounded-2xl border border-blue-200/50 card-shadow">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1">8.6K</div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wide leading-tight">DCFC</div>
            </div>
            <div className="text-center p-3 md:p-6 bg-white/90 backdrop-blur-enhanced rounded-xl md:rounded-2xl border border-purple-200/50 card-shadow">
              <div className="text-base sm:text-xl md:text-2xl font-bold text-purple-600 mb-1">Oct 15</div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wide leading-tight">Updated</div>
            </div>
          </div>
        </div>
      </header>

      {/* TABS */}
      <nav className="sticky top-0 z-20 bg-white/98 backdrop-blur-enhanced border-b border-slate-200/50 shadow-sm">
        <div className="mx-auto max-w-7xl px-3 py-3">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 p-1 bg-slate-50 rounded-xl w-fit mx-auto min-w-max">
              {TABS.map((t) => {
                const active = t.key === tab;
                const mobileLabels = {
                  'summary': 'Summary',
                  'sources': 'Sources', 
                  'dashboards': 'Data',
                  'insights': 'Insights',
                  'method': 'Methods'
                };
                return (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={`px-2.5 md:px-4 lg:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap min-w-0 flex-shrink-0
                      ${active 
                        ? 'bg-white text-slate-900 shadow-md border border-slate-200/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                      }
                    `}
                    aria-pressed={active}
                  >
                    <span className="md:hidden">
                      {mobileLabels[t.key]}
                    </span>
                    <span className="hidden md:inline">
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-3 py-6 md:px-6 md:py-12 lg:py-16">
        {tab === 'summary' && (
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            <Section title= "Project Overview" variant="primary">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-slate-700">
                This project maps California’s public EV charging landscape using open data. I cleaned and combined station records, EV registrations, and geography, then computed clear KPIs—total ports, DC fast charging share, and coverage (ports per 1,000 EVs) to show where supply meets demand and where gaps remain.
                </p>
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100 card-shadow">
                  <p className="text-base text-slate-700 font-medium flex items-start gap-3">
                    <span className="text-2xl"></span>
                    <span><strong>Key Insight:</strong> Surface actionable planning insights including counties with the highest potential 
                    for new DC fast charging infrastructure and stations likely to experience peak utilization.</span>
                  </p>
                </div>
              </div>
            </Section>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <Section title="Use Cases" variant="secondary">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700 leading-relaxed">Planners: Target counties with low ports/1k EVs for new DCFC</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700 leading-relaxed">Operators (CPOs): Monitor Likely Busy stations to plan upgrades</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-slate-700 leading-relaxed">Site hosts: Add DCFC at locations with strong demand but low coverage</span>
                  </li>
                </ul>
              </Section>

              <Section title="Key Questions Answered" variant="accent">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-lg text-slate-700 leading-relaxed">Which counties have relatively low coverage (ports per 1,000 EVs)?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-lg text-slate-700 leading-relaxed">Where is DC fast charging infrastructure under-represented?</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-lg text-slate-700 leading-relaxed">Which stations are likely to experience highest utilization rates?</span>
                  </li>
                </ul>
              </Section>
            </div>
          </div>
        )}

        {tab === 'sources' && (
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            <Section title="Data Sources & Citations" variant="primary">
              <div className="grid gap-8">
                <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-shadow-lg">
                  <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <span className="text-2xl"></span>
                    Official Government Sources
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-lg text-blue-800 block mb-2">AFDC (Alternative Fuels Data Center):</strong>
                        <span className="text-slate-700 leading-relaxed">Comprehensive public EV charging station database for California open sites. Primary source for station locations, port counts, DCFC identification, and interactive mapping.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-lg text-green-800 block mb-2">California EV Population (2024):</strong>
                        <span className="text-slate-700 leading-relaxed">County-level electric vehicle registration data from CA DMV and California Energy Commission. Essential for calculating coverage metrics (ports per 1,000 EVs).</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 card-shadow">
                  <p className="text-slate-600 flex items-start gap-3">
                    <span className="text-blue-500 text-xl"></span>
                    <span className="leading-relaxed">All processed CSV files used in Tableau dashboards are generated by automated scripts in this repository. See the <code className="bg-white px-3 py-1 rounded-md text-sm font-mono">src/transform</code> directory for data pipeline details.</span>
                  </p>
                </div>
              </div>
            </Section>
          </div>
        )}

        {tab === 'dashboards' && (
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            <Section title="Interactive Dashboards" variant="primary">
              <div className="space-y-8">
                <div className="p-3 md:p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-2xl border border-blue-100 card-shadow">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-lg md:text-xl lg:text-2xl hidden sm:inline"></span>
                    <span className="leading-tight">Key Insights: Coverage & Clustering Analysis</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    {/* Card 1 - Overview */}
                    <div className="p-3 md:p-4 lg:p-6 bg-white/95 rounded-lg md:rounded-xl border border-blue-200 card-shadow">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2 flex items-center gap-1.5">
                        <span className="text-base md:text-lg lg:text-xl hidden sm:inline"></span>
                        <span>Overview</span>
                      </div>
                      <div className="text-xs md:text-sm font-medium text-black mb-2 md:mb-3 leading-tight">Statewide ports & DCFC distribution</div>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed"><strong>136,620</strong> public charging ports</p>
                        </div>
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed">DCFC ≈ <strong>7–8%</strong> of ports; concentrated in LA region</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - County: Supply vs Demand */}
                    <div className="p-3 md:p-4 lg:p-6 bg-white/95 rounded-lg md:rounded-xl border border-green-200 card-shadow">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2 flex items-center gap-1.5">
                        <span className="text-base md:text-lg lg:text-xl hidden sm:inline"></span>
                        <span>Supply vs Demand</span>
                      </div>
                      <div className="text-xs md:text-sm font-medium text-black mb-2 md:mb-3 leading-tight">Coverage analysis by county</div>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed">Shows <strong>under-covered counties</strong> with high EV adoption</p>
                        </div>
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed">Compare <strong>coverage ratios</strong> across regions</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - Strategic Planning (Siting Score) */}
                    <div className="p-3 md:p-4 lg:p-6 bg-white/95 rounded-lg md:rounded-xl border border-purple-200 card-shadow">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2 flex items-center gap-1.5">
                        <span className="text-base md:text-lg lg:text-xl hidden sm:inline"></span>
                        <span>Strategic Planning</span>
                      </div>
                      <div className="text-xs md:text-sm font-medium text-black mb-2 md:mb-3 leading-tight">Priority locations for new DCFC</div>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed">Top targets: <strong>Orange, San Diego, Santa Clara</strong></p>
                        </div>
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed">Combines <strong>demand + coverage gaps</strong> for optimal siting</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 - Opportunities & Likely Busy (Proxies) */}
                    <div className="p-3 md:p-4 lg:p-6 bg-white/95 rounded-lg md:rounded-xl border border-orange-200 card-shadow">
                      <div className="text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2 flex items-center gap-1.5">
                        <span className="text-base md:text-lg lg:text-xl hidden sm:inline"></span>
                        <span>Opportunities & Busy Sites</span>
                      </div>
                      <div className="text-xs md:text-sm font-medium text-black mb-2 md:mb-3 leading-tight">Quick wins & high-utilization sites</div>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed"><strong>Zero DCFC cities:</strong> Pasadena, Playa del Rey, Wilmington</p>
                        </div>
                        <div className="flex items-start gap-1.5 md:gap-2">
                          <span className="text-black font-bold text-sm">•</span>
                          <p className="text-xs md:text-sm text-black leading-relaxed"><strong>High-traffic site:</strong> LADWP Ferraro Building</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview - Mobile vs Desktop */}
                <div className="relative mt-4 md:mt-6">
                  {/* Mobile: Show preview card with "Open Dashboard" button */}
                  <div className="block md:hidden">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 text-center card-shadow">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft mr-2"></div>
                        <span className="text-sm font-medium text-slate-600">Interactive Dashboard Available</span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">California EV Charging Analysis</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Explore interactive maps, county comparisons, and detailed analytics in the full dashboard experience.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="bg-white/80 rounded-lg p-3 border border-blue-100">
                          <div className="font-semibold text-blue-600">🗺️ Maps</div>
                          <div className="text-slate-600">Regional coverage</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 border border-green-100">
                          <div className="font-semibold text-green-600">📊 Analytics</div>
                          <div className="text-slate-600">County insights</div>
                        </div>
                      </div>

                      <button
                        onClick={() => window.open(iframeSrc, '_blank')}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>🚀 Open Full Dashboard</span>
                        <span className="text-sm opacity-90">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Desktop: Show full iframe */}
                  <div className="hidden md:block relative">
                    <div className="aspect-[16/10] lg:aspect-[16/9] w-full rounded-2xl lg:rounded-3xl shadow-2xl ring-1 ring-slate-200 overflow-hidden bg-white card-shadow-lg">
                      <iframe
                        title="California EV Charging Infrastructure Analysis Dashboard"
                        src={iframeSrc}
                        className="h-full w-full border-0"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-pulse-soft shadow-lg"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 p-3 md:p-4 lg:p-6 bg-slate-50 rounded-lg md:rounded-2xl border border-slate-200 card-shadow mt-4 md:mt-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="text-blue-500 text-base md:text-lg">💡</span>
                    <span className="font-semibold text-sm md:text-base">Pro Tip:</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed text-xs md:text-sm lg:text-base">
                    <span className="block md:hidden">The dashboard opens in a new tab optimized for mobile interaction. Use pinch-to-zoom and tap to explore different regions and data views.</span>
                    <span className="hidden md:block">Click the expand icon in the Tableau toolbar for full-screen analysis. Use the dashboard tabs to navigate between different analytical views and interact with map filters for detailed regional insights.</span>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {tab === 'insights' && (
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            <Section title="Detailed Insights" variant="primary">
              <div className="space-y-8">
                <p className="text-xl text-slate-700 leading-relaxed mb-8">
                  California&apos;s EV charging landscape shows clear patterns that help target where to expand, what to upgrade, and where operations may get stressed.
                </p>
                
                <div className="grid gap-8">
                  {/* Infrastructure Scale */}
                  <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      Infrastructure Scale
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">Total Public Charging</p>
                          <p className="text-slate-700 leading-relaxed">~136,620 public ports (Level 2 + DCFC). Strong absolute scale, but not evenly distributed.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">Coverage, Not Just Count</p>
                          <p className="text-slate-700 leading-relaxed">Statewide coverage ≈ 73 ports per 1,000 EVs. Several counties are well served, while others have thin coverage despite growing EV adoption.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Critical Infrastructure Gaps */}
                  <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      Critical Infrastructure Gaps
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">Fast Charging is the Bottleneck</p>
                          <p className="text-slate-700 leading-relaxed">DC fast (DCFC) ≈ 7–8% of all public ports; most sites are Level 2 (AC). For road trips, fleets, and high-turnover sites, DCFC capacity limits throughput and user experience.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">Low-Coverage Counties</p>
                          <p className="text-slate-700 leading-relaxed">Multiple rural / northern counties show near-zero coverage in AFDC listings. These are first-order siting gaps to ensure basic access (sanity-check locally before committing).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* High-Opportunity Areas */}
                  <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      High-Opportunity Areas
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">High-Demand Centers</p>
                          <p className="text-slate-700 leading-relaxed">Los Angeles, Orange, Santa Clara, San Diego lead in EV population — the biggest upside for targeted DCFC capacity where utilization can be high.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-2">Upgrade Candidates</p>
                          <p className="text-slate-700 leading-relaxed">Sites with many Level-2 ports but no DCFC are prime &quot;add DC fast here&quot; targets: demand already exists; throughput is constrained.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Recommendations */}
                  <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 card-shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      Strategic Recommendations
                    </h3>
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-3">Where to Add Next (Siting Score)</p>
                          <div className="space-y-2 text-slate-700 leading-relaxed">
                            <p>We rank counties by an explainable score (low coverage × high EV demand).</p>
                            <p><strong>Current top candidates for DCFC build-out:</strong> Orange, San Diego, Santa Clara, San Mateo, Contra Costa.</p>
                            <p>Use this list to sequence deployments and justify impact per dollar.</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                        <div>
                          <p className="text-lg font-semibold text-blue-800 mb-3">Likely Busy Stations (Ops Watchlist)</p>
                          <div className="space-y-2 text-slate-700 leading-relaxed">
                            <p>A &quot;likely busy&quot; list (weighted by DCFC count and total ports) surfaces sites prone to queuing / stress.</p>
                            <p><strong>Example:</strong> LADWP – John Ferraro Building (Los Angeles) appears as a top watchlist site for reliability and potential expansion.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {tab === 'method' && (
          <div className="grid gap-6 sm:gap-8 lg:gap-12">
            <Section title="Methodology & Scoring" variant="primary">
              <div className="space-y-8">
                <p className="text-xl text-slate-700 leading-relaxed mb-8">
                  A concise, five-stage pipeline turns raw public data into planning signals you can act on.
                </p>
                
                {/* Pipeline Steps */}
                <div className="grid gap-6">
                  <div className="flex gap-6 p-6 rounded-2xl border card-shadow-lg bg-blue-50 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-blue-500">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-blue-900">Data Ingestion</h4>
                      <div className="text-slate-700 leading-relaxed space-y-1">
                        <p>• AFDC public charging stations (California, open sites)</p>
                        <p>• County EV registrations (CA DMV/CEC)</p>
                        <p>• HUD ZIP↔County crosswalk (for reliable county roll-ups)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-2xl border card-shadow-lg bg-blue-50 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-blue-500">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-blue-900">Data Cleaning</h4>
                      <div className="text-slate-700 leading-relaxed space-y-1">
                        <p>• Standardize fields (ports by type, status)</p>
                        <p>• Derive county from ZIP where missing</p>
                        <p>• Remove duplicates/invalids (non-public, offline, bad geos)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-2xl border card-shadow-lg bg-blue-50 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-blue-500">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-blue-900">Data Modeling</h4>
                      <div className="text-slate-700 leading-relaxed space-y-1">
                        <p>• Stations (one row per site), Ports (Level-2, DCFC, totals)</p>
                        <p>• County summary (EV count, port counts, derived metrics)</p>
                        <p>• Region aggregations for map and top/bottom views</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-2xl border card-shadow-lg bg-blue-50 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-blue-500">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-blue-900">KPI Calculation</h4>
                      <div className="text-slate-700 leading-relaxed space-y-1">
                        <p>• Total Ports, DCFC Ports, DCFC Share</p>
                        <p>• Coverage = ports per 1,000 EVs (normalizes supply to demand)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 rounded-2xl border card-shadow-lg bg-blue-50 border-blue-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg bg-blue-500">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-blue-900">Insight Generation</h4>
                      <div className="text-slate-700 leading-relaxed space-y-1">
                        <p>• Likely Busy (station): proxy watchlist for reliability/expansion</p>
                        <p>• Siting Score (county): ranked list for new DCFC placement</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scoring Section */}
                <div className="space-y-8 mt-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Scoring (transparent & explainable)</h3>
                  
                  {/* Siting Score */}
                  <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 card-shadow-lg">
                    <h4 className="text-xl font-bold text-green-900 mb-4">Siting Score (county)</h4>
                    <p className="text-slate-700 mb-4"><strong>Goal:</strong> highlight where new DCFC adds most value.</p>
                    <div className="space-y-3">
                      <p className="text-slate-700"><strong>Inputs (normalized 0–1):</strong></p>
                      <div className="ml-4 space-y-1">
                        <p className="text-slate-700">• Low coverage (ports per 1,000 EVs, inverted) – higher weight</p>
                        <p className="text-slate-700">• EV demand (EV count) – medium weight</p>
                      </div>
                      <p className="text-slate-700"><strong>Interpretation:</strong> higher score ⇒ bigger gap + bigger impact.</p>
                    </div>
                  </div>

                  {/* Likely Busy */}
                  <div className="p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100 card-shadow-lg">
                    <h4 className="text-xl font-bold text-orange-900 mb-4">Likely Busy (station)</h4>
                    <p className="text-slate-700 mb-4"><strong>Goal:</strong> flag sites prone to queues / high throughput.</p>
                    <div className="space-y-3">
                      <p className="text-slate-700"><strong>Inputs:</strong> DCFC ports (strong signal) + total ports (background demand).</p>
                      <p className="text-slate-700"><strong>Interpretation:</strong> higher score ⇒ stronger candidate for ops attention or capacity add.</p>
                      <p className="text-slate-700">Exact weights are documented in the repo so stakeholders can tune them (no black box).</p>
                    </div>
                  </div>

                  {/* Refresh & Limits */}
                  <div className="p-8 bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl border border-purple-100 card-shadow-lg">
                    <h4 className="text-xl font-bold text-purple-900 mb-4">Refresh & Limits (honest framing)</h4>
                    <div className="space-y-3">
                      <p className="text-slate-700"><strong>Refresh cadence:</strong> designed to re-run as AFDC/EV counts update (e.g., weekly).</p>
                      <p className="text-slate-700"><strong>Limits:</strong> no session/uptime data; city/station proxies guide triage, not final siting.</p>
                      <p className="text-slate-700"><strong>Use with context:</strong> validate top picks with traffic (AADT), grid capacity, local permitting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}
      </section>
    </main>
  );
}

function Section({
  title,
  children,
  variant = 'default'
}: {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}) {
  const variantStyles = {
    default: 'bg-white border-slate-200',
    primary: 'bg-gradient-to-br from-white to-blue-50/30 border-blue-200/50',
    secondary: 'bg-gradient-to-br from-white to-green-50/30 border-green-200/50',
    accent: 'bg-gradient-to-br from-white to-purple-50/30 border-purple-200/50'
  };

  return (
    <section className={`rounded-xl md:rounded-2xl lg:rounded-3xl border p-4 md:p-6 lg:p-8 xl:p-12 card-shadow ${variantStyles[variant]}`}>
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6 lg:mb-8 leading-tight">
        {title}
      </h2>
      <div className="prose prose-slate prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}

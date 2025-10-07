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
      <header className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-100/40 to-cyan-100/40 rounded-full blur-2xl -z-10"></div>
        
        <div className="relative text-center lg:text-left">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8 card-shadow">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
            Based on 2024 data
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            EV Charging: Utilization & Reliability
            <span className="block text-california-gradient mt-2">
              in California
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mt-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
          This is a comprehensive analysis of where EV chargers exist in California relative to demand, pinpointing coverage gaps, high-demand counties, and priority sites for adding DC fast charging.
          </p>
          
          {/* Key statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white/80 backdrop-blur-enhanced rounded-2xl border border-slate-200/50 card-shadow-lg">
              <div className="text-3xl font-bold text-slate-900 mb-2">58</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Counties</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-enhanced rounded-2xl border border-green-200/50 card-shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">136K+</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Charging Ports</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-enhanced rounded-2xl border border-blue-200/50 card-shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">DCFC</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">8.6K</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-enhanced rounded-2xl border border-purple-200/50 card-shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">Last Refresh</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Oct 6, 2025</div>
            </div>
          </div>
        </div>
      </header>

      {/* TABS */}
      <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur-enhanced border-b border-slate-200/50 shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex gap-2 p-2 bg-slate-100/90 rounded-2xl w-fit mx-auto lg:mx-0">
            {TABS.map((t) => {
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap
                    ${active 
                      ? 'bg-white text-slate-900 shadow-lg border border-slate-200/50 scale-105' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/70 hover:scale-102'
                    }
                  `}
                  aria-pressed={active}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {tab === 'summary' && (
          <div className="grid gap-12">
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

            <div className="grid lg:grid-cols-2 gap-12">
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
          <div className="grid gap-12">
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
          <div className="grid gap-12">
            <Section title="Interactive Dashboards" variant="primary">
              <div className="space-y-8">
                <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 card-shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <span className="text-2xl"></span>
                    Insights on What We Have and Where It Clusters
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 - Overview */}
                    <div className="p-6 bg-white/95 rounded-xl border border-blue-200 card-shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                        <span className="text-2xl"></span>
                        Overview
                      </div>
                      <div className="text-sm font-medium text-black mb-4">Statewide snapshot of ports, DCFC share & hotspots</div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black"><strong>136,620</strong> public charging ports (latest AFDC).</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">DCFC ≈ <strong>7–8%</strong> of ports; largest cluster around Los Angeles.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - County: Supply vs Demand */}
                    <div className="p-6 bg-white/95 rounded-xl border border-green-200 card-shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                        <span className="text-2xl"></span>
                        County: Supply vs Demand
                      </div>
                      <div className="text-sm font-medium text-black mb-4">Coverage (ports per 1,000 EVs) by county</div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">Highlights <strong>under-covered counties</strong> where EVs outnumber ports.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">Use to compare <strong>coverage vs EV count</strong> at a glance.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - Strategic Planning (Siting Score) */}
                    <div className="p-6 bg-white/95 rounded-xl border border-purple-200 card-shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                        <span className="text-2xl"></span>
                        Strategic Planning (Siting Score)
                      </div>
                      <div className="text-sm font-medium text-black mb-4">Where new DCFC adds the most value</div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">Top candidates: <strong>Orange, San Diego, Santa Clara</strong> (high EVs + lower coverage).</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">Score blends <strong>low coverage × high demand</strong> → prioritized DCFC siting.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 - Opportunities & Likely Busy (Proxies) */}
                    <div className="p-6 bg-white/95 rounded-xl border border-orange-200 card-shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                        <span className="text-2xl"></span>
                        Opportunities & Likely Busy (Proxies)
                      </div>
                      <div className="text-sm font-medium text-black mb-4">Quick wins (0 DCFC) & likely busy sites</div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black"><strong>0-DCFC cities</strong> with many L2: Pasadena, Playa del Rey, Wilmington.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-black font-bold">-</span>
                          <p className="text-sm text-black">Likely busy: <strong>LADWP – John Ferraro Building</strong> (12 DCFC, 350 total ports).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[16/9] w-full rounded-3xl shadow-2xl ring-1 ring-slate-200 overflow-hidden bg-white card-shadow-lg">
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

                <div className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 card-shadow">
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-blue-500 text-xl"></span>
                    <span className="font-semibold">Pro Tip:</span>
                  </div>
                  <div className="text-slate-700 flex-1 leading-relaxed">
                    Click the expand icon in the Tableau toolbar for full-screen analysis. Use the dashboard tabs to navigate between different analytical views and interact with map filters for detailed regional insights.
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {tab === 'insights' && (
          <div className="grid gap-12">
            <Section title="Detailed Insights" variant="primary">
              <div className="space-y-8">
                <p className="text-xl text-slate-700 leading-relaxed mb-8">
                  California's EV charging landscape shows clear patterns that help target where to expand, what to upgrade, and where operations may get stressed.
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
                          <p className="text-slate-700 leading-relaxed">Sites with many Level-2 ports but no DCFC are prime "add DC fast here" targets: demand already exists; throughput is constrained.</p>
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
                            <p>A "likely busy" list (weighted by DCFC count and total ports) surfaces sites prone to queuing / stress.</p>
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
          <div className="grid gap-12">
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
    <section className={`rounded-3xl border p-8 lg:p-12 card-shadow-lg ${variantStyles[variant]}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8">
        {title}
      </h2>
      <div className="prose prose-slate prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}

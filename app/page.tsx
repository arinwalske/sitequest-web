import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#4CAF50] selection:text-black">

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#151515] to-[#121212]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4CAF50]/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center lg:pt-32 lg:pb-32">
          <div className="mx-auto mb-8 inline-flex items-center justify-center rounded-full bg-[#1E1E1E] border border-[#333] px-4 py-1.5 shadow-lg shadow-[#4CAF50]/10 animate-pulse">
            <span className="text-sm font-medium text-[#4CAF50]">Coming to the Google Play Store soon</span>
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
            The Booking Gamble <br />
            <span className="relative whitespace-nowrap text-[#4CAF50]">
              <span className="relative">Is Over.</span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-[#AAAAAA] leading-relaxed">
            Stop guessing if a site is level or has trees for your hammock.
            SiteQuest is the app that lets you scout campsites with your phone, so you can book the perfect spot with confidence. No more surprises when you arrive at the campground.
          </p>

          <div className="mt-12 flex justify-center gap-x-6 flex-wrap gap-y-4">
            <a
              href="#"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-x-2 overflow-hidden rounded-lg bg-[#1E1E1E] border border-[#4CAF50] px-8 py-3 transition-all hover:bg-[#2C2C2C] hover:shadow-lg hover:shadow-[#4CAF50]/20 hover:scale-105 focus:outline-none shadow-lg"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs text-[#AAAAAA]">Coming Soon to the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a
						  //   href="https://play.google.com/store/apps/details?id=com.sitequest"
						  href="#"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-x-2 overflow-hidden rounded-lg bg-[#1E1E1E] border border-[#4CAF50] px-8 py-3 transition-all hover:bg-[#2C2C2C] hover:shadow-lg hover:shadow-[#4CAF50]/20 hover:scale-105 focus:outline-none shadow-lg"
            >
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-xs text-[#AAAAAA]">In closed testing on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="relative py-24 sm:py-32 bg-[#121212]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#4CAF50] uppercase tracking-wider">Scout Smarter</h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
              Everything you need to know,<br/>before you book.
            </p>
            <p className="mt-6 text-lg leading-8 text-[#AAAAAA]">
              Public maps tell you where the campground is. SiteQuest tells you which specific site number to book.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">

              {/* Feature 1 */}
              <div className="group flex flex-col bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300 hover:shadow-xl hover:shadow-[#4CAF50]/10 hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-1">
                  <span className="text-3xl group-hover:scale-110 transition-transform">📐</span>
                  Level-Check Technology
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#AAAAAA]">
                  <p className="flex-auto">
                    No more sleeping on a slope. Our scouts use device gyroscopes to log the actual pitch and roll of the parking pad. Know if you need blocks before you arrive.
                  </p>
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="group flex flex-col bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300 hover:shadow-xl hover:shadow-[#4CAF50]/10 hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-1">
                  <span className="text-3xl group-hover:scale-110 transition-transform">📡</span>
                  Tech Specs
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#AAAAAA]">
                  <p className="flex-auto">
                    Working from the road? We track Starlink visibility and verify cell signal strength (dBm) for major carriers right at the site post.
                  </p>
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="group flex flex-col bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-8 rounded-2xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300 hover:shadow-xl hover:shadow-[#4CAF50]/10 hover:-translate-y-1">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-1">
                  <span className="text-3xl group-hover:scale-110 transition-transform">🌲</span>
                  Hammock & Shade
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#AAAAAA]">
                  <p className="flex-auto">
                    Find the perfect hang. We log tree spacing for hammocks and solar orientation so you know if you'll be waking up in an oven or a shaded paradise.
                  </p>
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </section>

      {/* Offline Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#121212] via-[#1A1A1A] to-[#121212] py-24 sm:py-32 border-y border-[#222]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4CAF50]/5 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-base font-semibold leading-7 text-[#4CAF50] uppercase tracking-wider">Offline First</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">Scout without Signal</h2>
            <p className="mt-6 text-xl leading-8 text-[#AAAAAA]">
              The best sites are often off the grid. SiteQuest is built to work offline.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ul role="list" className="grid gap-6 sm:grid-cols-1 md:gap-8">
              <li className="flex gap-x-4 items-start group bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-6 rounded-xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300">
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#4CAF50]/10 text-[#4CAF50] group-hover:bg-[#4CAF50]/20 transition-colors text-lg">✓</span>
                <span className="leading-relaxed text-[#AAAAAA]">
                  <strong className="text-white block mb-1">Drive-Through Mode.</strong>
                  A low-friction UI designed for rapid logging while you drive through a loop.
                </span>
              </li>
              <li className="flex gap-x-4 items-start group bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-6 rounded-xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300">
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#4CAF50]/10 text-[#4CAF50] group-hover:bg-[#4CAF50]/20 transition-colors text-lg">✓</span>
                <span className="leading-relaxed text-[#AAAAAA]">
                  <strong className="text-white block mb-1">Local Drafts.</strong>
                  Save your scouts locally and sync them to the cloud when you hit Wi-Fi.
                </span>
              </li>
              <li className="flex gap-x-4 items-start group bg-gradient-to-br from-[#1E1E1E] to-[#1A1A1A] p-6 rounded-xl border border-[#333] hover:border-[#4CAF50] transition-all duration-300">
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#4CAF50]/10 text-[#4CAF50] group-hover:bg-[#4CAF50]/20 transition-colors text-lg">✓</span>
                <span className="leading-relaxed text-[#AAAAAA]">
                  <strong className="text-white block mb-1">Stealth & Wild.</strong>
                  Log dispersed camping spots with GPS precision, kept private until you choose to share.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-16 border-t border-[#222]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-white">SiteQuest</span>
            <p className="text-sm text-[#666] mt-2">© {new Date().getFullYear()} SiteQuest. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="/privacy" className="text-sm text-[#888] hover:text-[#4CAF50] transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-[#888] hover:text-[#4CAF50] transition-colors">Terms of Service</a>
            <a href="https://facebook.com/sitequest.me" target="_blank" rel="noopener noreferrer" className="text-sm text-[#888] hover:text-[#4CAF50] transition-colors">Facebook</a>
            <a href="#" className="text-sm text-[#888] hover:text-[#4CAF50] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

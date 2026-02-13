import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20">

        {/* Header Section */}
        <header className="mb-16 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 bg-emerald-600 rounded-2xl flex items-center justify-center font-bold text-white text-3xl shadow-lg shadow-emerald-900/20">
              SQ
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              SiteQuest <span className="text-emerald-500">Privacy</span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg">Last Updated: January 2026</p>
        </header>

        {/* Content Section */}
        <main className="leading-relaxed text-lg md:text-xl text-slate-300">

          <section>
            <p className="text-xl md:text-2xl text-slate-100 font-medium border-l-4 border-emerald-500 pl-6">
              I&apos;m Andrew, the developer of SiteQuest. I built this app because I wanted a better way to find campsites, not a way to spy on people. I value your privacy because I value my own.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. The &quot;Golden Rule&quot; of Your Location</h2>
            <p className="mb-4">
              Your real-time location is <span className="text-emerald-400 font-semibold uppercase tracking-wide">never</span> uploaded, tracked, or sold. SiteQuest uses your device&apos;s GPS locally to show your position on the map and help you scout.
            </p>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-slate-300">
              <strong className="text-emerald-500 block mb-2 text-lg">The only exception:</strong>
              When you explicitly hit &quot;Save&quot; or &quot;Log Scout,&quot; the specific coordinates of that campsite are stored in the database so you can find them later.
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Data Collection & Usage</h2>
            <ul className="list-disc list-inside marker:text-emerald-500 ml-2 space-y-2">
              <li>
                <span className="font-semibold text-slate-100">Account Info:</span> Email and a unique ID to sync your scouts across devices via Supabase.
              </li>
              <li>
                <span className="font-semibold text-slate-100">User Content:</span> Campsite logs and notes you intentionally save.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Crash Reporting:</span> Anonymous logs to help me fix bugs and improve stability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Third-Party Services</h2>
            <p>
              I use <span className="text-emerald-400 font-medium">Supabase</span> for secure storage and authentication, and <span className="text-emerald-400 font-medium">Google Maps</span> for map data. They may see your IP to serve the content, but they don&apos;t get access to your private SiteQuest data.
            </p>
          </section>

          <section id="deletion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Data Deletion</h2>
            <p className="mb-4">
              It&apos;s your data. You can delete your account and all associated campsite logs instantly using the &quot;Delete Account&quot; button in the app settings.
            </p>
            <div className="bg-emerald-950/20 p-6 rounded-xl border border-emerald-900/30 text-slate-300">
              <p>
                Alternatively, you can request manual deletion or a copy of your data by emailing <a href="mailto:ARinwalske@gmail.com" className="text-emerald-400 hover:underline">ARinwalske@gmail.com</a>. Please use the email address associated with your account. All data will be wiped from our database within 48 hours of your request.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-slate-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight">5. NO DATA SOLD</h2>
            <p>
              I will never sell your data to advertisers, insurance companies, or anyone else. I&apos;m a software engineer, not a data broker.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
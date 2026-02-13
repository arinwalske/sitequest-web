import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white font-sans selection:bg-[#4CAF50] selection:text-black">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20">

        {/* Header Section */}
        <header className="mb-16 border-b border-[#333] pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#1E1E1E] border border-[#333] rounded-2xl flex items-center justify-center font-bold text-[#4CAF50] text-3xl shadow-lg shadow-[#4CAF50]/10">
                SQ
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                SiteQuest <span className="text-[#4CAF50]">Privacy</span>
              </h1>
            </div>

            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1E1E1E] border border-[#333] hover:border-[#4CAF50] transition-all text-[#AAAAAA] hover:text-white group">
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </Link>
          </div>
          <p className="text-[#888] text-lg">Last Updated: January 2026</p>
        </header>

        {/* Content Section */}
        <main className="leading-relaxed text-lg md:text-xl text-[#AAAAAA]">

          <section>
            <p className="text-xl md:text-2xl text-white font-medium border-l-4 border-[#4CAF50] pl-6">
              I&apos;m Andrew, the developer of SiteQuest. I built this app because I wanted a better way to find campsites, not a way to spy on people. I value your privacy because I value my own.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. The &quot;Golden Rule&quot; of Your Location</h2>
            <p className="mb-4">
              Your real-time location is <span className="text-[#4CAF50] font-semibold uppercase tracking-wide">never</span> uploaded, tracked, or sold. SiteQuest uses your device&apos;s GPS locally to show your position on the map and help you scout.
            </p>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] text-[#AAAAAA]">
              <strong className="text-[#4CAF50] block mb-2 text-lg">The only exception:</strong>
              When you explicitly hit &quot;Save&quot; or &quot;Log Scout,&quot; the specific coordinates of that campsite are stored in the database so you can find them later.
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Data Collection & Usage</h2>
            <ul className="list-disc list-inside marker:text-[#4CAF50] ml-2 space-y-2">
              <li>
                <span className="font-semibold text-white">Account Info:</span> Email and a unique ID to sync your scouts across devices via Supabase.
              </li>
              <li>
                <span className="font-semibold text-white">User Content:</span> Campsite logs and notes you intentionally save.
              </li>
              <li>
                <span className="font-semibold text-white">Crash Reporting:</span> Anonymous logs to help me fix bugs and improve stability.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Third-Party Services</h2>
            <p>
              I use <span className="text-[#4CAF50] font-medium">Supabase</span> for secure storage and authentication, and <span className="text-[#4CAF50] font-medium">Google Maps</span> for map data. They may see your IP to serve the content, but they don&apos;t get access to your private SiteQuest data.
            </p>
          </section>

          <section id="deletion" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Data Deletion</h2>
            <p className="mb-4">
              It&apos;s your data. You can delete your account and all associated campsite logs instantly using the &quot;Delete Account&quot; button in the app settings.
            </p>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] text-[#AAAAAA]">
              <p>
                Alternatively, you can request manual deletion or a copy of your data by emailing <a href="mailto:ARinwalske@gmail.com" className="text-[#4CAF50] hover:underline">ARinwalske@gmail.com</a>. Please use the email address associated with your account. All data will be wiped from our database within 48 hours of your request.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-[#333] mt-16">
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
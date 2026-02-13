import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
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
                SiteQuest <span className="text-[#4CAF50]">Terms</span>
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
              Welcome to SiteQuest. By using our app, you agree to these basic terms. We built this tool to help you find better campsites, so let&apos;s keep it simple.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By downloading, installing, or using the SiteQuest app, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Use of the App</h2>
            <p className="mb-4">
              SiteQuest is a tool for scouting and logging campsites. You agree to use it responsibly and legally.
            </p>
            <ul className="list-disc list-inside marker:text-[#4CAF50] ml-2 space-y-2">
              <li>Do not use the app to trespass on private property.</li>
              <li>Do not use the app while driving.</li>
              <li>Do not upload malicious content or spam.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. User Content</h2>
            <p className="mb-4">
              When you save a campsite or write a note (&quot;User Content&quot;), you retain ownership of your data. However, by saving it to our cloud service, you grant us a license to host, store, and display that content for you.
            </p>
            <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333] text-[#AAAAAA]">
              <strong className="text-[#4CAF50] block mb-2 text-lg">Note on Accuracy:</strong>
              We are not responsible for the accuracy of user-generated content. Campsite conditions change (trees fall, roads wash out). Always verify conditions yourself.
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Disclaimer of Warranties</h2>
            <p>
              The app is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will always be available, error-free, or that specific campsite data will be accurate. Use your best judgment when camping.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the app if you violate these terms or use the app in a way that harms us or other users.
            </p>
          </section>

          <section className="pt-10 border-t border-[#333] mt-16">
            <p className="text-sm text-[#666]">
              Questions? Contact us at <a href="mailto:ARinwalske@gmail.com" className="text-[#4CAF50] hover:underline">ARinwalske@gmail.com</a>.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
};

export default TermsOfService;
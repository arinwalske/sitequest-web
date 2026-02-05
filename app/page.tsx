export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-8">
        {/* Logo */}
        <div className="inline-block bg-[#4CAF50] px-8 py-4 rounded-2xl shadow-2xl">
          <h1 className="text-5xl font-bold text-white">SiteQuest</h1>
        </div>

        {/* Tagline */}
        <h2 className="text-3xl font-semibold text-white leading-tight">
          Scout, Share, and Discover the Perfect Campsite
        </h2>

        <p className="text-xl text-[#AAAAAA] leading-relaxed max-w-xl mx-auto">
          Find and share detailed campsite reviews with fellow RVers and outdoor enthusiasts.
          Know before you go with real scouting data.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333]">
            <div className="text-[#4CAF50] text-4xl mb-3">📍</div>
            <h3 className="text-lg font-bold mb-2">Scout Sites</h3>
            <p className="text-[#AAAAAA] text-sm">Rate campsites with detailed info on cell signal, Starlink, and more</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333]">
            <div className="text-[#4CAF50] text-4xl mb-3">🔗</div>
            <h3 className="text-lg font-bold mb-2">Share Links</h3>
            <p className="text-[#AAAAAA] text-sm">Send your scouts to friends and campground hosts instantly</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#333333]">
            <div className="text-[#4CAF50] text-4xl mb-3">🗺️</div>
            <h3 className="text-lg font-bold mb-2">Plan Trips</h3>
            <p className="text-[#AAAAAA] text-sm">Make informed decisions with real data from real campers</p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="pt-8">
          <p className="text-[#AAAAAA] mb-4 font-medium">Download the app to get started</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://apps.apple.com/app/sitequest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] hover:bg-[#2C2C2C] border border-[#4CAF50] px-8 py-4 rounded-lg transition-colors flex items-center gap-3 shadow-lg"
            >
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs text-[#AAAAAA]">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sitequest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] hover:bg-[#2C2C2C] border border-[#4CAF50] px-8 py-4 rounded-lg transition-colors flex items-center gap-3 shadow-lg"
            >
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="text-xs text-[#AAAAAA]">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

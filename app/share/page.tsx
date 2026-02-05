import { Metadata } from 'next';
import { supabase } from '../supabase';
import DeepLinkHandler from './DeepLinkHandler';
import { ScoutedSite, getRatingColor } from '../types/database';

// Force dynamic rendering to ensure we always fetch fresh data
export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const id = params.id as string;
  if (!id) return { title: 'SiteQuest Share' };

  const { data } = await supabase
    .from('scouted_sites')
    .select('campground_name, site_number, rating')
    .eq('client_uuid', id)
    .single();

  if (!data) return { title: 'Site Not Found - SiteQuest' };

  const title = `Site #${data.site_number} at ${data.campground_name}`;
  const description = `Rating: ${data.rating} - Check out this campsite I scouted with SiteQuest!`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'SiteQuest',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function SharePage({ searchParams }: Props) {
  const params = await searchParams;
  const id = params.id as string;

  if (!id) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Invalid Link</h1>
          <p className="text-[#AAAAAA]">This share link is missing required information.</p>
        </div>
      </div>
    );
  }

  const { data: site, error } = await supabase
    .from('scouted_sites')
    .select('*')
    .eq('client_uuid', id)
    .single();

  if (error || !site) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Site Not Found</h1>
          <p className="text-[#AAAAAA]">This campsite could not be found.</p>
        </div>
      </div>
    );
  }

  const typedSite = site as ScoutedSite;

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans flex items-center justify-center p-4">
      {/* Client-side logic to trigger deep link */}
      <DeepLinkHandler id={id} />

      <div className="w-full max-w-md bg-[#1E1E1E] rounded-xl overflow-hidden shadow-2xl border border-[#333333]">
        {/* Header */}
        <div className="h-24 bg-[#4CAF50] flex items-center justify-center relative">
          <h1 className="text-3xl font-bold text-white drop-shadow-md">SiteQuest</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Title Section */}
          <div>
            <h2 className="text-2xl font-bold text-white leading-tight">{typedSite.campground_name}</h2>
            <p className="text-[#AAAAAA] text-lg font-medium mt-1">Site #{typedSite.site_number}</p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm capitalize"
              style={{ backgroundColor: getRatingColor(typedSite.rating) }}
            >
              {typedSite.rating}
            </span>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-[#2C2C2C] p-3 rounded-lg border border-[#333333]">
              <span className="text-[#AAAAAA] block mb-1 text-xs uppercase tracking-wide">Starlink</span>
              <span className={`font-medium ${typedSite.starlink ? 'text-[#4CAF50]' : 'text-white'}`}>
                {typedSite.starlink ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="bg-[#2C2C2C] p-3 rounded-lg border border-[#333333]">
              <span className="text-[#AAAAAA] block mb-1 text-xs uppercase tracking-wide">Cell Signal</span>
              <span className="text-white font-medium">{typedSite.cell_signal || 'N/A'}</span>
            </div>
            <div className="bg-[#2C2C2C] p-3 rounded-lg border border-[#333333]">
              <span className="text-[#AAAAAA] block mb-1 text-xs uppercase tracking-wide">Hammock</span>
              <span className={`font-medium ${typedSite.hammock ? 'text-[#4CAF50]' : 'text-white'}`}>
                {typedSite.hammock ? 'Yes' : 'No'}
              </span>
            </div>
          </div>

          {/* Notes */}
          {typedSite.notes && (
            <div className="bg-[#2C2C2C] p-4 rounded-lg border border-[#333333]">
              <span className="text-[#AAAAAA] block mb-2 text-xs uppercase tracking-wider">Notes</span>
              <p className="text-white leading-relaxed text-sm">{typedSite.notes}</p>
            </div>
          )}

          {/* CTA */}
          <div className="pt-2">
            <a
              href={`sitequest://scout?id=${id}`}
              className="block w-full text-center bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg"
            >
              Open in App
            </a>
          </div>

          {/* Download Section */}
          <div className="pt-4 border-t border-[#333333]">
            <p className="text-[#AAAAAA] text-center text-sm mb-3">Don't have SiteQuest?</p>
            <div className="flex gap-3 justify-center">
              <a
                href="https://apps.apple.com/app/sitequest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[140px] h-10 bg-[#2C2C2C] hover:bg-[#333333] border border-[#444444] rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white text-sm font-medium">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sitequest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[140px] h-10 bg-[#2C2C2C] hover:bg-[#333333] border border-[#444444] rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="text-white text-sm font-medium">Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

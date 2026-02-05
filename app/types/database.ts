/**
 * Database schema types for SiteQuest
 * Table: scouted_sites
 */

export interface ScoutedSite {
  client_uuid: string;
  campground_name: string;
  site_number: string;
  rating: 'great' | 'okay' | 'bad';
  notes: string;
  starlink: boolean;
  cell_signal: string;
  hammock: boolean;
}

/**
 * Helper type for rating colors
 */
export type RatingColor = '#2E7D32' | '#FBC02D' | '#C62828' | '#AAAAAA';

/**
 * Get the color associated with a rating
 */
export function getRatingColor(rating: string): RatingColor {
  switch (rating?.toLowerCase()) {
    case 'great':
      return '#2E7D32';
    case 'okay':
      return '#FBC02D';
    case 'bad':
      return '#C62828';
    default:
      return '#AAAAAA';
  }
}

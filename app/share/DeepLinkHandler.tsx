'use client';

import { useEffect } from 'react';

export default function DeepLinkHandler({ id }: { id: string }) {
  useEffect(() => {
    if (id) {
      // Attempt to open the deep link
      window.location.href = `sitequest://scout?id=${id}`;
    }
  }, [id]);

  return null;
}
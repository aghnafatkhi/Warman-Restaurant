import { ImageResponse } from 'next/og';
import { getSocialImageVisual } from './shared-image-visual';

export const runtime = 'edge';

// Image metadata
export const alt = 'Warman Restaurant | Pilih Lauk, Pilih Sambal';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    getSocialImageVisual(),
    {
      ...size,
    }
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#BB5A2E', // Brand ember background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F6F1E7', // Brand bone text
          fontFamily: 'serif',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        W
      </div>
    ),
    {
      ...size,
    }
  );
}

import React from 'react';
import { siteConfig } from '@/lib/site';

export function getSocialImageVisual() {
  return (
    <div
      style={{
        background: '#1C1815',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F6F1E7',
        padding: '60px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Subtle grid accent for craft texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #8A7F72 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient top & center glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '25%',
          width: '50%',
          height: '60%',
          borderRadius: '50%',
          background: 'rgba(187, 90, 46, 0.15)',
          filter: 'blur(80px)',
        }}
      />

      {/* Border accent */}
      <div
        style={{
          position: 'absolute',
          inset: '30px',
          border: '1px solid rgba(246, 241, 231, 0.08)',
          display: 'flex',
        }}
      />

      {/* Text Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {/* Small Top Text */}
        <div
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '20px',
            fontWeight: 600,
            color: 'rgba(246, 241, 231, 0.7)',
            marginBottom: '24px',
          }}
        >
          {siteConfig.name}
        </div>

        {/* Large Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            lineHeight: 1.1,
            color: '#F6F1E7',
            marginBottom: '16px',
          }}
        >
          {siteConfig.tagline}
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: '28px',
            color: '#BB5A2E',
            fontWeight: 500,
            marginBottom: '32px',
          }}
        >
          Comfort food Indonesia · {siteConfig.address.city}
        </div>

        {/* Small Supporting footer */}
        <div
          style={{
            fontSize: '18px',
            color: 'rgba(246, 241, 231, 0.5)',
            borderTop: '1px solid rgba(246, 241, 231, 0.2)',
            paddingTop: '16px',
            width: '280px',
            textAlign: 'center',
          }}
        >
          {siteConfig.openingHours.footerDisplay}
        </div>
      </div>
    </div>
  );
}

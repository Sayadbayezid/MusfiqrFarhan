/**
 * AdSense and SEO Meta Tags Component
 * Add this component to your App.tsx to enable AdSense monetization
 * and ensure all required meta tags are present for Google AdSense approval
 */

export function AdSenseMeta() {
  return (
    <>
      {/* Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
        crossOrigin="anonymous"
      ></script>

      {/* Meta Tags for AdSense */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Musfiq R. Farhan - Multi-talented entertainer, RJ, actor, and content creator" />
      <meta name="keywords" content="Musfiq R. Farhan, RJ, actor, content creator, entertainment, radio, television" />
      <meta name="author" content="Musfiq R. Farhan" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Musfiq R. Farhan - Blog & Portfolio" />
      <meta property="og:description" content="Multi-talented entertainer, RJ, actor, and content creator" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://musfiqrfarhan.blog" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Musfiq R. Farhan - Blog & Portfolio" />
      <meta name="twitter:description" content="Multi-talented entertainer, RJ, actor, and content creator" />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </>
  );
}

/**
 * IMPORTANT: To enable Google AdSense on your website:
 *
 * 1. Replace "YOUR_ADSENSE_ID" with your actual Google AdSense Publisher ID
 * 2. Replace "YOUR_GOOGLE_VERIFICATION_CODE" with your Google Search Console verification code
 * 3. Add this component to your index.html or App.tsx
 * 4. Ensure your website has:
 *    - Original, high-quality content (at least 10-15 posts)
 *    - Clear Privacy Policy page (✓ Already added)
 *    - Contact information
 *    - Proper navigation and user experience
 *    - Mobile-friendly design (✓ Already implemented)
 *    - Fast loading times
 *    - No excessive ads or pop-ups
 *    - No copyrighted content
 *
 * 5. Submit your website to Google AdSense for review
 * 6. Once approved, add ad units to your pages using:
 *    <ins className="adsbygoogle"
 *         style={{ display: 'block' }}
 *         data-ad-client="ca-pub-YOUR_ADSENSE_ID"
 *         data-ad-slot="YOUR_AD_SLOT_ID"
 *         data-ad-format="auto"
 *         data-full-width-responsive="true"></ins>
 *    <script>
 *         (adsbygoogle = window.adsbygoogle || []).push({});
 *    </script>
 *
 * AdSense Policies:
 * - Do not click on your own ads
 * - Do not encourage users to click on ads
 * - Maintain high-quality content
 * - Follow all Google AdSense policies
 * - Ensure proper ad placement (not too many ads per page)
 */

export function AdSenseUnit({ slotId }: { slotId: string }) {
  return (
    <div className="my-6">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_ADSENSE_ID"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </div>
  );
}

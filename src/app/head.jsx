export default function Head() {
  return (
    <>
      {/* Title & Basic SEO */}
      <title>My Awesome Landing Page</title>
      <meta
        name="description"
        content="A modern landing page with Hero, Features, Testimonials, FAQ, and more. Built with Next.js."
      />
      <meta name="keywords" content="Next.js, Landing Page, Features, Testimonials, SEO, Web Development" />
      <meta name="author" content="Your Name" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="My Awesome Landing Page" />
      <meta
        property="og:description"
        content="Discover our landing page with stunning design, animations, and all key sections."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="https://yourdomain.com/og-image.png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="My Awesome Landing Page" />
      <meta
        name="twitter:description"
        content="Discover our landing page with stunning design, animations, and all key sections."
      />
      <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

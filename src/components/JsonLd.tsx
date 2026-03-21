export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Refine Web",
    description:
      "Custom web design and development for small businesses in Murfreesboro, Tennessee. Refine Web.",
    url: "https://refinedweb.dev",
    telephone: "+1-615-801-2070",
    email: "rubio.athomas@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murfreesboro",
      addressRegion: "TN",
      postalCode: "37129",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.8456,
      longitude: -86.3903,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.8456,
        longitude: -86.3903,
      },
      geoRadius: "50000",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

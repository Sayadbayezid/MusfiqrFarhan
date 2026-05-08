export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/musfiqfarhan?igsh=MWxxeWI3aTkzbHM5cQ==',
  facebook: 'https://www.facebook.com/share/1cQdw7JcMs/?mibextid=wwXIfr',
  imdb: 'https://www.imdb.com/name/nm11068428/bio/',
  youtube: 'https://youtube.com/@musfiqrfarhan?si=gG4wQxD6qsIpVZCZ',
  whatsapp: 'https://whatsapp.com/channel/0029VbBdG03HQbS1bTrVHF1X',
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Musfiq R. Farhan',
  alternateName: ['Musfiq Farhan', 'MRF'],
  description: 'Multi-talented entertainer, RJ, actor, and content creator from Bangladesh',
  url: 'https://musfiqrfarhan.blog',
  image: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    '/manus-storage/musfiq_image_1_892e2248.jpg',
    '/manus-storage/musfiq_image_2_7cf91d7c.jpg',
  ],
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.imdb,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.whatsapp,
  ],
  jobTitle: ['Radio Jockey', 'Actor', 'Content Creator', 'Digital Media Personality'],
  knowsAbout: [
    'Radio Broadcasting',
    'Television Acting',
    'Digital Content Creation',
    'Storytelling',
    'Entertainment',
    'Media Production',
    'Social Media Marketing',
    'Audience Engagement',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Entertainment Industry',
  },
  birthPlace: {
    '@type': 'Place',
    name: 'Bangladesh',
  },
  nationality: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'General Inquiry',
    email: 'contact@musfiqrfarhan.blog',
  },
};

export function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
    />
  );
}

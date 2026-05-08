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
    '/manus-storage/musfiq_hero_9a89b3d6.jpg',
    '/manus-storage/musfiq_gallery_1_e8cc759c.jpg',
    '/manus-storage/musfiq_gallery_2_cb19e976.jpg',
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

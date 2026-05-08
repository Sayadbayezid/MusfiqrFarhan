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
  description: 'Multi-talented entertainer, RJ, actor, and content creator',
  url: 'https://musfiqrfarhan.blog',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.imdb,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.whatsapp,
  ],
  jobTitle: ['Radio Jockey', 'Actor', 'Content Creator'],
  knowsAbout: [
    'Radio Broadcasting',
    'Television Acting',
    'Digital Content Creation',
    'Storytelling',
    'Entertainment',
    'Media Production',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Entertainment Industry',
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

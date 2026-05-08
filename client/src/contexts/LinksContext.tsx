import React, { createContext, useContext, useState, useEffect } from 'react';

export interface NewsLink {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'News' | 'Interview' | 'Feature' | 'Appearance' | 'Other';
  source?: string;
  date: string;
  featured: boolean;
}

interface LinksContextType {
  links: NewsLink[];
  addLink: (link: NewsLink) => void;
  updateLink: (id: string, link: NewsLink) => void;
  deleteLink: (id: string) => void;
  getLinkById: (id: string) => NewsLink | undefined;
  getLinksByCategory: (category: string) => NewsLink[];
  getFeaturedLinks: () => NewsLink[];
}

const LinksContext = createContext<LinksContextType | undefined>(undefined);

export const LinksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [links, setLinks] = useState<NewsLink[]>([]);

  // Initialize with sample links
  useEffect(() => {
    const sampleLinks: NewsLink[] = [
      {
        id: '1',
        title: 'Musfiq R. Farhan Interview on Entertainment Today',
        description: 'Exclusive interview discussing my journey across radio, television, and digital media platforms.',
        url: 'https://example.com/interview-1',
        category: 'Interview',
        source: 'Entertainment Today',
        date: '2026-05-01',
        featured: true,
      },
      {
        id: '2',
        title: 'Featured in Top 10 Content Creators of Bangladesh',
        description: 'Recognition as one of the leading content creators making an impact in Bangladesh.',
        url: 'https://example.com/feature-1',
        category: 'Feature',
        source: 'Digital Media Magazine',
        date: '2026-04-28',
        featured: true,
      },
      {
        id: '3',
        title: 'Latest Radio Show Appearance',
        description: 'Guest appearance on the popular morning radio show discussing entertainment industry trends.',
        url: 'https://example.com/appearance-1',
        category: 'Appearance',
        source: 'Morning Radio Show',
        date: '2026-04-25',
        featured: false,
      },
    ];

    // Load from localStorage if available
    const saved = localStorage.getItem('news-links');
    if (saved) {
      try {
        setLinks(JSON.parse(saved));
      } catch {
        setLinks(sampleLinks);
      }
    } else {
      setLinks(sampleLinks);
    }
  }, []);

  // Save to localStorage whenever links change
  useEffect(() => {
    localStorage.setItem('news-links', JSON.stringify(links));
  }, [links]);

  const addLink = (link: NewsLink) => {
    setLinks([link, ...links]);
  };

  const updateLink = (id: string, updatedLink: NewsLink) => {
    setLinks(links.map(link => (link.id === id ? updatedLink : link)));
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const getLinkById = (id: string) => {
    return links.find(link => link.id === id);
  };

  const getLinksByCategory = (category: string) => {
    return links.filter(link => link.category === category);
  };

  const getFeaturedLinks = () => {
    return links.filter(link => link.featured);
  };

  return (
    <LinksContext.Provider value={{ links, addLink, updateLink, deleteLink, getLinkById, getLinksByCategory, getFeaturedLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export const useLinks = () => {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error('useLinks must be used within LinksProvider');
  }
  return context;
};

import { useState } from 'react';
import { useLinks } from '@/contexts/LinksContext';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const CATEGORIES = ['All', 'News', 'Interview', 'Feature', 'Appearance', 'Other'];

export default function News() {
  const { links } = useLinks();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLinks = links.filter(link => {
    const matchesCategory = selectedCategory === 'All' || link.category === selectedCategory;
    const matchesSearch = link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (link.source?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">News & Links</h1>
          <p className="text-lg text-muted-foreground">
            Latest news, interviews, features, and appearances across media platforms.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search news and links..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Links Grid */}
        {filteredLinks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLinks.map(link => (
              <div
                key={link.id}
                className="card-base p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                    {link.category}
                  </span>
                  {link.featured && (
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {link.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {link.description}
                </p>

                {/* Source and Date */}
                <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(link.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  {link.source && (
                    <div className="flex items-center gap-1">
                      <Tag size={14} />
                      <span>{link.source}</span>
                    </div>
                  )}
                </div>

                {/* Link Button */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No news or links found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-secondary font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">{links.length}</div>
              <p className="text-muted-foreground">Total Links</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">
                {new Set(links.map(l => l.category)).size}
              </div>
              <p className="text-muted-foreground">Categories</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">
                {links.filter(l => l.featured).length}
              </div>
              <p className="text-muted-foreground">Featured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

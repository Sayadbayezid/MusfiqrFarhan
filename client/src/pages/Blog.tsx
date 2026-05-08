import { useState } from 'react';
import { useBlog } from '@/contexts/BlogContext';
import BlogCard from '@/components/BlogCard';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'Radio', 'Television', 'Acting', 'Content Creation', 'Personal'];

export default function Blog() {
  const { getPublishedPosts } = useBlog();
  const publishedPosts = getPublishedPosts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = publishedPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, stories, and reflections from my journey in entertainment and media.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No posts found matching your search.
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
              <div className="text-4xl font-bold text-secondary mb-2">{publishedPosts.length}</div>
              <p className="text-muted-foreground">Published Posts</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">
                {new Set(publishedPosts.map(p => p.category)).size}
              </div>
              <p className="text-muted-foreground">Categories</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">
                {new Set(publishedPosts.flatMap(p => p.tags)).size}
              </div>
              <p className="text-muted-foreground">Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

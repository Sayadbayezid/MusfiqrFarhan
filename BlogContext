import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: 'Radio' | 'Television' | 'Acting' | 'Content Creation' | 'Personal';
  tags: string[];
  date: string;
  featured: boolean;
  published: boolean;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  updatePost: (id: string, post: BlogPost) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => BlogPost | undefined;
  getPostsByCategory: (category: string) => BlogPost[];
  getPublishedPosts: () => BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Initialize with sample posts
  useEffect(() => {
    const samplePosts: BlogPost[] = [
      {
        id: '1',
        title: 'The Evolution of Radio in the Digital Age',
        description: 'Exploring how radio has transformed and adapted to remain relevant in an increasingly digital world.',
        content: 'Radio has been a cornerstone of entertainment and information for nearly a century. Today, it continues to evolve, adapting to digital platforms while maintaining its intimate connection with audiences. From traditional FM broadcasts to podcasts and streaming services, radio remains a powerful medium for storytelling and connection.',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=400&fit=crop',
        category: 'Radio',
        tags: ['radio', 'digital', 'evolution', 'media'],
        date: '2026-05-07',
        featured: true,
        published: true,
      },
      {
        id: '2',
        title: 'Behind the Scenes: My Acting Journey',
        description: 'An intimate look at the challenges, triumphs, and lessons learned while transitioning to television acting.',
        content: 'Transitioning from radio to acting was one of the most challenging yet rewarding decisions of my career. It required learning new skills, understanding the nuances of on-camera performance, and building confidence in front of the camera. This journey has taught me the importance of continuous learning and adaptation in the entertainment industry.',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=400&fit=crop',
        category: 'Acting',
        tags: ['acting', 'television', 'journey', 'career'],
        date: '2026-05-05',
        featured: true,
        published: true,
      },
      {
        id: '3',
        title: 'Building Community Through Digital Content',
        description: 'Strategies and insights on creating meaningful connections with audiences across digital platforms.',
        content: 'In today\'s digital landscape, building a community is more important than ever. It\'s not just about the number of followers, but about creating genuine connections and providing value to your audience. Through consistent, authentic content and genuine engagement, you can build a loyal community that supports your work.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
        category: 'Content Creation',
        tags: ['digital', 'community', 'content', 'engagement'],
        date: '2026-05-01',
        featured: false,
        published: true,
      },
    ];

    // Load from localStorage if available
    const saved = localStorage.getItem('blog-posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch {
        setPosts(samplePosts);
      }
    } else {
      setPosts(samplePosts);
    }
  }, []);

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (id: string, updatedPost: BlogPost) => {
    setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const getPostById = (id: string) => {
    return posts.find(post => post.id === id);
  };

  const getPostsByCategory = (category: string) => {
    return posts.filter(post => post.category === category);
  };

  const getPublishedPosts = () => {
    return posts.filter(post => post.published);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, getPostById, getPostsByCategory, getPublishedPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within BlogProvider');
  }
  return context;
};

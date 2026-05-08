import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useBlog, BlogPost } from '@/contexts/BlogContext';
import { useLinks, NewsLink } from '@/contexts/LinksContext';
import { Plus, Trash2, Edit2, LogOut, Eye, EyeOff } from 'lucide-react';
import { nanoid } from 'nanoid';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { logout } = useAuth();
  const { posts, addPost, updatePost, deletePost } = useBlog();
  const { links, addLink, updateLink, deleteLink } = useLinks();
  const [activeTab, setActiveTab] = useState<'posts' | 'links'>('posts');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    title: '',
    description: '',
    content: '',
    image: '',
    category: 'Personal',
    tags: [],
    date: new Date().toISOString().split('T')[0],
    featured: false,
    published: false,
  });
  const [linkFormData, setLinkFormData] = useState<NewsLink>({
    id: '',
    title: '',
    description: '',
    url: '',
    category: 'News',
    source: '',
    date: new Date().toISOString().split('T')[0],
    featured: false,
  });

  const handleLogout = () => {
    logout();
    setLocation('/admin');
  };

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({
      id: nanoid(),
      title: '',
      description: '',
      content: '',
      image: '',
      category: 'Personal',
      tags: [],
      date: new Date().toISOString().split('T')[0],
      featured: false,
      published: false,
    });
    setShowForm(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setFormData(post);
    setShowForm(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.description || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      updatePost(editingId, formData);
    } else {
      addPost(formData);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
    }
  };

  const handleAddNewLink = () => {
    setEditingId(null);
    setLinkFormData({
      id: nanoid(),
      title: '',
      description: '',
      url: '',
      category: 'News',
      source: '',
      date: new Date().toISOString().split('T')[0],
      featured: false,
    });
    setShowForm(true);
  };

  const handleEditLink = (link: NewsLink) => {
    setEditingId(link.id);
    setLinkFormData(link);
    setShowForm(true);
  };

  const handleSaveLink = () => {
    if (!linkFormData.title || !linkFormData.description || !linkFormData.url) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingId) {
      updateLink(editingId, linkFormData);
    } else {
      addLink(linkFormData);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const handleDeleteLink = (id: string) => {
    if (confirm('Are you sure you want to delete this link?')) {
      deleteLink(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="container py-8">
        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'posts'
                ? 'text-secondary border-b-2 border-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Blog Posts ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'links'
                ? 'text-secondary border-b-2 border-secondary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            News & Links ({links.length})
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-secondary mb-2">{posts.length}</div>
            <p className="text-muted-foreground">Total Blog Posts</p>
          </div>
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-secondary mb-2">{posts.filter(p => p.published).length}</div>
            <p className="text-muted-foreground">Published Posts</p>
          </div>
          <div className="card-base p-6">
            <div className="text-3xl font-bold text-secondary mb-2">{links.length}</div>
            <p className="text-muted-foreground">News & Links</p>
          </div>
        </div>

        {/* Add New Button */}
        <div className="mb-8">
          {activeTab === 'posts' ? (
            <button
              onClick={handleAddNew}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Plus size={20} />
              New Post
            </button>
          ) : (
            <button
              onClick={handleAddNewLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Plus size={20} />
              New Link
            </button>
          )}
        </div>

        {/* Posts Form */}
        {showForm && activeTab === 'posts' && (
          <div className="card-base p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Post' : 'Create New Post'}</h2>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Post title"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description"
                  rows={2}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-2">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Full post content"
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option>Radio</option>
                  <option>Television</option>
                  <option>Acting</option>
                  <option>Content Creation</option>
                  <option>Personal</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
                <label htmlFor="featured" className="cursor-pointer font-medium">
                  Mark as featured post
                </label>
              </div>

              {/* Published */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
                <label htmlFor="published" className="cursor-pointer font-medium">
                  Publish post (make it public)
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  {editingId ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Links Form */}
        {showForm && activeTab === 'links' && (
          <div className="card-base p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Link' : 'Add New Link'}</h2>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={linkFormData.title}
                  onChange={(e) => setLinkFormData({ ...linkFormData, title: e.target.value })}
                  placeholder="Link title"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  value={linkFormData.description}
                  onChange={(e) => setLinkFormData({ ...linkFormData, description: e.target.value })}
                  placeholder="Brief description"
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* URL */}
              <div>
                <label className="block text-sm font-medium mb-2">URL *</label>
                <input
                  type="url"
                  value={linkFormData.url}
                  onChange={(e) => setLinkFormData({ ...linkFormData, url: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={linkFormData.category}
                  onChange={(e) => setLinkFormData({ ...linkFormData, category: e.target.value as any })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option>News</option>
                  <option>Interview</option>
                  <option>Feature</option>
                  <option>Appearance</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium mb-2">Source</label>
                <input
                  type="text"
                  value={linkFormData.source || ''}
                  onChange={(e) => setLinkFormData({ ...linkFormData, source: e.target.value })}
                  placeholder="e.g., News Channel, Magazine"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={linkFormData.date}
                  onChange={(e) => setLinkFormData({ ...linkFormData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="link-featured"
                  checked={linkFormData.featured}
                  onChange={(e) => setLinkFormData({ ...linkFormData, featured: e.target.checked })}
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
                <label htmlFor="link-featured" className="cursor-pointer font-medium">
                  Mark as featured
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSaveLink}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  {editingId ? 'Update Link' : 'Add Link'}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-muted transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        {activeTab === 'posts' && (
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.length > 0 ? (
                  posts.map(post => (
                    <tr key={post.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{post.title}</td>
                      <td className="px-6 py-4 text-sm">{post.category}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{post.date}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            post.published
                              ? 'bg-secondary/10 text-secondary'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary">
                              Featured
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                          >
                            <Edit2 size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              const updated = { ...post, published: !post.published };
                              updatePost(post.id, updated);
                            }}
                            className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors ${
                              post.published
                                ? 'bg-secondary/10 text-secondary hover:bg-secondary/20'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                          >
                            {post.published ? <Eye size={16} /> : <EyeOff size={16} />}
                            {post.published ? 'Public' : 'Draft'}
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-destructive/10 text-destructive rounded hover:bg-destructive/20 transition-colors"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No posts yet. Create your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        )}

        {/* Links List */}
        {activeTab === 'links' && (
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.length > 0 ? (
                  links.map(link => (
                    <tr key={link.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{link.title}</td>
                      <td className="px-6 py-4 text-sm">{link.category}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{link.date}</td>
                      <td className="px-6 py-4 text-sm">
                        {link.featured && (
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/10 text-primary">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditLink(link)}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                          >
                            <Edit2 size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteLink(link.id)}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-destructive/10 text-destructive rounded hover:bg-destructive/20 transition-colors"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No links yet. Add your first link!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

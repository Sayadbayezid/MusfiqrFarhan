import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useBlog, BlogPost } from '@/contexts/BlogContext';
import { Plus, Trash2, Edit2, LogOut, Eye, EyeOff } from 'lucide-react';
import { nanoid } from 'nanoid';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { logout } = useAuth();
  const { posts, addPost, updatePost, deletePost } = useBlog();
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

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <div className="container py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-base p-6">
            <p className="text-muted-foreground text-sm mb-2">Total Posts</p>
            <p className="text-4xl font-bold text-secondary">{posts.length}</p>
          </div>
          <div className="card-base p-6">
            <p className="text-muted-foreground text-sm mb-2">Featured Posts</p>
            <p className="text-4xl font-bold text-secondary">{posts.filter(p => p.featured).length}</p>
          </div>
          <div className="card-base p-6">
            <p className="text-muted-foreground text-sm mb-2">Categories</p>
            <p className="text-4xl font-bold text-secondary">{new Set(posts.map(p => p.category)).size}</p>
          </div>
        </div>

        {/* Add New Button */}
        <div className="mb-8">
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus size={20} />
            New Post
          </button>
        </div>

        {/* Form */}
        {showForm && (
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
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-2">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Post content"
                  rows={8}
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

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                  placeholder="tag1, tag2, tag3"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
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

        {/* Posts List */}
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Featured</th>
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
                        {post.featured ? (
                          <Eye size={18} className="text-secondary" />
                        ) : (
                          <EyeOff size={18} className="text-muted-foreground" />
                        )}
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
      </div>
    </div>
  );
}

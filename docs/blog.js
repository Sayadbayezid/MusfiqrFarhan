// Blog Post Management
class BlogManager {
    constructor() {
        this.posts = this.loadPosts();
    }

    loadPosts() {
        const saved = localStorage.getItem('blogPosts');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return this.getDefaultPosts();
            }
        }
        return this.getDefaultPosts();
    }

    getDefaultPosts() {
        return [
            {
                id: '1',
                title: 'The Evolution of Radio in the Digital Age',
                description: 'Exploring how radio has transformed and adapted to remain relevant in an increasingly digital world.',
                content: 'Radio has been a cornerstone of entertainment and information for nearly a century. Today, it continues to evolve, adapting to digital platforms while maintaining its intimate connection with audiences. From traditional FM broadcasts to podcasts and streaming services, radio remains a powerful medium for storytelling and connection.',
                category: 'Radio',
                date: '2026-05-07',
                published: true
            },
            {
                id: '2',
                title: 'Behind the Scenes: My Acting Journey',
                description: 'An intimate look at the challenges, triumphs, and lessons learned while transitioning to television acting.',
                content: 'Transitioning from radio to acting was one of the most challenging yet rewarding decisions of my career. It required learning new skills, understanding the nuances of on-camera performance, and building confidence in front of the camera.',
                category: 'Acting',
                date: '2026-05-05',
                published: true
            }
        ];
    }

    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
    }

    addPost(post) {
        post.id = Date.now().toString();
        post.date = new Date().toISOString().split('T')[0];
        this.posts.unshift(post);
        this.savePosts();
        return post;
    }

    updatePost(id, updatedPost) {
        const index = this.posts.findIndex(p => p.id === id);
        if (index !== -1) {
            this.posts[index] = { ...this.posts[index], ...updatedPost };
            this.savePosts();
            return this.posts[index];
        }
        return null;
    }

    deletePost(id) {
        this.posts = this.posts.filter(p => p.id !== id);
        this.savePosts();
    }

    getPublishedPosts() {
        return this.posts.filter(p => p.published);
    }

    getPostById(id) {
        return this.posts.find(p => p.id === id);
    }
}

// Initialize blog manager
const blogManager = new BlogManager();

// Display blog posts
function displayBlogPosts() {
    const blogList = document.getElementById('blogList');
    if (!blogList) return;

    const posts = blogManager.getPublishedPosts();
    
    if (posts.length === 0) {
        blogList.innerHTML = '<p class="no-posts">No posts yet. Check back soon!</p>';
        return;
    }

    blogList.innerHTML = posts.map(post => `
        <article class="blog-card">
            <div class="blog-card-image">📝</div>
            <div class="blog-card-content">
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.description)}</p>
                <div class="blog-card-meta">
                    <span class="category">${escapeHtml(post.category)}</span>
                    <span class="date">${post.date}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load posts on page load
document.addEventListener('DOMContentLoaded', function() {
    displayBlogPosts();
});

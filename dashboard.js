// Dashboard functionality
let currentEditingId = null;

// Display posts list
function displayPostsList() {
    const postsList = document.getElementById('postsList');
    if (!postsList) return;

    const posts = blogManager.posts;
    
    if (posts.length === 0) {
        postsList.innerHTML = '<p class="no-posts">No posts yet</p>';
        return;
    }

    postsList.innerHTML = posts.map(post => `
        <div class="post-item ${currentEditingId === post.id ? 'active' : ''}" onclick="editPost('${post.id}')">
            <div class="post-item-title">${escapeHtml(post.title)}</div>
            <div class="post-item-date">${post.date}</div>
        </div>
    `).join('');
}

// Show new post form
function showNewPostForm() {
    currentEditingId = null;
    const editorContainer = document.getElementById('editorContainer');
    
    editorContainer.innerHTML = `
        <h2>New Post</h2>
        <form id="postForm" onsubmit="savePost(event)">
            <div class="form-group">
                <label for="title">Title *</label>
                <input type="text" id="title" name="title" required>
            </div>
            <div class="form-group">
                <label for="description">Description *</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="content">Content *</label>
                <textarea id="content" name="content" required></textarea>
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <select id="category" name="category">
                    <option value="Radio">Radio</option>
                    <option value="Television">Television</option>
                    <option value="Acting">Acting</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
            <div class="form-group">
                <label for="published">
                    <input type="checkbox" id="published" name="published" checked>
                    Publish this post
                </label>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-success">Save Post</button>
                <button type="button" class="btn btn-secondary" onclick="cancelEdit()">Cancel</button>
            </div>
        </form>
    `;
    
    displayPostsList();
}

// Edit existing post
function editPost(id) {
    currentEditingId = id;
    const post = blogManager.getPostById(id);
    
    if (!post) {
        alert('Post not found');
        return;
    }

    const editorContainer = document.getElementById('editorContainer');
    
    editorContainer.innerHTML = `
        <h2>Edit Post</h2>
        <form id="postForm" onsubmit="savePost(event)">
            <div class="form-group">
                <label for="title">Title *</label>
                <input type="text" id="title" name="title" value="${escapeHtml(post.title)}" required>
            </div>
            <div class="form-group">
                <label for="description">Description *</label>
                <textarea id="description" name="description" required>${escapeHtml(post.description)}</textarea>
            </div>
            <div class="form-group">
                <label for="content">Content *</label>
                <textarea id="content" name="content" required>${escapeHtml(post.content)}</textarea>
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <select id="category" name="category">
                    <option value="Radio" ${post.category === 'Radio' ? 'selected' : ''}>Radio</option>
                    <option value="Television" ${post.category === 'Television' ? 'selected' : ''}>Television</option>
                    <option value="Acting" ${post.category === 'Acting' ? 'selected' : ''}>Acting</option>
                    <option value="Content Creation" ${post.category === 'Content Creation' ? 'selected' : ''}>Content Creation</option>
                    <option value="Personal" ${post.category === 'Personal' ? 'selected' : ''}>Personal</option>
                </select>
            </div>
            <div class="form-group">
                <label for="published">
                    <input type="checkbox" id="published" name="published" ${post.published ? 'checked' : ''}>
                    Publish this post
                </label>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-success">Update Post</button>
                <button type="button" class="btn btn-danger" onclick="deleteCurrentPost()">Delete Post</button>
                <button type="button" class="btn btn-secondary" onclick="cancelEdit()">Cancel</button>
            </div>
        </form>
    `;
    
    displayPostsList();
}

// Save post
function savePost(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
    const published = document.getElementById('published').checked;

    if (!title || !description || !content) {
        alert('Please fill in all required fields');
        return;
    }

    const postData = {
        title,
        description,
        content,
        category,
        published
    };

    if (currentEditingId) {
        blogManager.updatePost(currentEditingId, postData);
        alert('Post updated successfully!');
    } else {
        blogManager.addPost(postData);
        alert('Post created successfully!');
    }

    cancelEdit();
}

// Delete current post
function deleteCurrentPost() {
    if (!currentEditingId) return;
    
    if (confirm('Are you sure you want to delete this post?')) {
        blogManager.deletePost(currentEditingId);
        alert('Post deleted successfully!');
        cancelEdit();
    }
}

// Cancel editing
function cancelEdit() {
    currentEditingId = null;
    const editorContainer = document.getElementById('editorContainer');
    editorContainer.innerHTML = '<p class="placeholder">Select a post to edit or create a new one</p>';
    displayPostsList();
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    const newPostBtn = document.getElementById('newPostBtn');
    if (newPostBtn) {
        newPostBtn.addEventListener('click', showNewPostForm);
    }
    
    displayPostsList();
});

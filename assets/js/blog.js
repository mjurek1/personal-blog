// Grab all the references to the DOM elements
const blogPost = document.querySelector('#blog-posts');

const posts = [];

function renderPosts() {
    blogPost.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const h1 = document.createElement('h1');
        h1.textContent = post
        
    }
}

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));

    if(storedPosts !== null) {
        posts = storedPosts;
    }
    renderPosts();
}

function storedPosts () {
    localStorage.setItem('posts', JSON.stringify(posts));
}
const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogEntry = {
        userName: userName.value,
        title: title.value,
        content: content.value,
    };

    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
});


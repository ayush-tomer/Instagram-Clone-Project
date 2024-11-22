const editButton = document.querySelector('.edit-btn');
const bioElement = document.querySelector('.bio');
const usernameElement = document.querySelector('.username');
const followersElement = document.querySelector('.followers');
const followingElement = document.querySelector('.following');
const postsElement = document.querySelector('.posts');
const followButton = document.querySelector('.follow-btn');
const postFeed = document.querySelector('.post-feed');
let isFollowing = false;
let posts = [];
editButton.addEventListener('click', function () {
    const editForm = document.createElement('form');
    editForm.innerHTML = `
        <label for="newUsername">New Username</label>
        <input type="text" id="newUsername" value="${usernameElement.textContent}" required>
        <label for="newBio">New Bio</label>
        <textarea id="newBio" rows="4" required>${bioElement.textContent}</textarea>
        <button type="submit">Save</button>
        <button type="button" class="cancel-btn">Cancel</button>
    `;
    document.querySelector('.profile-details').appendChild(editForm);
    editForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newBio = document.getElementById('newBio').value;
        usernameElement.textContent = newUsername;
        bioElement.textContent = newBio;
        editForm.remove();
    });
    const cancelButton = document.querySelector('.cancel-btn');
    cancelButton.addEventListener('click', function () {
        editForm.remove();
    });
});
function displayPosts() {
    if (posts.length === 0) {
        postFeed.innerHTML = `
            <h3>Posts</h3>
            <hr>
            <div class="no-post">No Posts</div>
        `;
    } else {
        let postContent = `
            <h3>Posts</h3>
            <hr>
        `;
        posts.forEach(post => {
            postContent += `
                <div class="post">
                    <img src="${post.image}" alt="Post Image">
                    <p>${post.caption}</p>
                </div>
            `;
        });
        postFeed.innerHTML = postContent;
    }
}
displayPosts();
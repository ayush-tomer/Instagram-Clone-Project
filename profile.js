// DOM elements
const editButton = document.querySelector('.edit-btn');
const bioElement = document.querySelector('.bio');
const usernameElement = document.querySelector('.username');
const followersElement = document.querySelector('.followers');
const followingElement = document.querySelector('.following');
const postsElement = document.querySelector('.posts');
const followButton = document.querySelector('.follow-btn');
const postFeed = document.querySelector('.post-feed');

// Initial state
let isFollowing = false;
let posts = []; // Empty posts array to simulate no posts

// Edit Profile functionality
editButton.addEventListener('click', function () {
    // Create a form for editing bio/username
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

    // Handle form submission to save new username and bio
    editForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newBio = document.getElementById('newBio').value;

        // Update the profile
        usernameElement.textContent = newUsername;
        bioElement.textContent = newBio;

        // Remove the edit form after saving changes
        editForm.remove();
    });

    // Handle cancel button click
    const cancelButton = document.querySelector('.cancel-btn');
    cancelButton.addEventListener('click', function () {
        editForm.remove(); // Remove form if canceled
    });
});

// Follow/Unfollow functionality
function toggleFollow() {
    isFollowing = !isFollowing;

    if (isFollowing) {
        followersElement.textContent = `${parseInt(followersElement.textContent.split(' ')[0]) + 1} Followers`;
        followButton.textContent = 'Unfollow';
        followButton.style.backgroundColor = '#ff5e57';
    } else {
        followersElement.textContent = `${parseInt(followersElement.textContent.split(' ')[0]) - 1} Followers`;
        followButton.textContent = 'Follow';
        followButton.style.backgroundColor = '#0095f6';
    }
}

if (followButton) {
    followButton.addEventListener('click', toggleFollow);
}

// Displaying Posts (simulate no posts message)
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
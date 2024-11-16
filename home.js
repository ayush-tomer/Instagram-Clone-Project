function toggleLike(postId) {
    const likeButton = document.querySelector(`.like-btn[data-post="${postId}"]`);
    const likeCount = document.querySelector(`#like-count-${postId}`);
    let currentLikes = parseInt(likeCount.getAttribute('data-likes'));
    if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
        currentLikes--;
    } else {
        likeButton.classList.add('liked');
        currentLikes++;
    }
    likeCount.textContent = `${currentLikes} likes`;
    likeCount.setAttribute('data-likes', currentLikes);
}
function toggleFollow(userId) {
    const followButton = document.querySelector(`.follow-suggestion button[data-user="${userId}"]`);
    if (followButton.textContent === 'Follow') {
        followButton.textContent = 'Following';
        followButton.style.backgroundColor = '#ccc';
    } else {
        followButton.textContent = 'Follow';
        followButton.style.backgroundColor = '#0095f6';
    }
}
function addComment(postId) {
    const commentInput = document.querySelector(`#comment-input-${postId}`);
    const commentList = document.querySelector(`#comments-list-${postId}`);
    const commentText = commentInput.value.trim();
    if (commentText) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
        const commentCount = document.querySelector(`#comment-count-${postId}`);
        let currentComments = parseInt(commentCount.getAttribute('data-comments'));
        commentCount.textContent = `${currentComments + 1} comments`;
        commentCount.setAttribute('data-comments', currentComments + 1);
    }
}
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.getAttribute('data-post');
        toggleLike(postId);
    });
});
const followButtons = document.querySelectorAll('.follow-suggestion button');
followButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const userId = event.target.getAttribute('data-user');
        toggleFollow(userId);
    });
});
const commentButtons = document.querySelectorAll('.comment-btn');
commentButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.getAttribute('data-post');
        addComment(postId);
    });
});
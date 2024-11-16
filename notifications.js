document.addEventListener("DOMContentLoaded", function() {
    const markAsReadButton = document.querySelector('.mark-as-read-btn');
    markAsReadButton.addEventListener('click', function() {
        const unreadNotifications = document.querySelectorAll('.notification-item.unread');
        unreadNotifications.forEach(function(notification) {
            notification.classList.remove('unread');
            notification.classList.add('read');
        });
    });
    const followButtons = document.querySelectorAll('.follow-suggestion button');
    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Follow') {
                button.textContent = 'Following';
                button.style.backgroundColor = '#ccc';
            } else {
                button.textContent = 'Follow';
                button.style.backgroundColor = '#0095f6';
            }
        });
    });
});
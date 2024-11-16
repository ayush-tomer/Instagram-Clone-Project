document.addEventListener('DOMContentLoaded', () => {
    
    // New Message Button functionality
    const newMessageBtn = document.querySelector('.new-message-btn');
    
    // Create New Message Modal
    const createNewMessageModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Create New Message</h3>
                <input type="text" placeholder="Enter username..." id="message-recipient" class="modal-input" />
                <textarea placeholder="Type your message..." id="message-text" class="modal-input"></textarea>
                <div class="modal-actions">
                    <button class="cancel-btn">Cancel</button>
                    <button class="send-btn">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Cancel Button closes modal
        const cancelBtn = modal.querySelector('.cancel-btn');
        cancelBtn.addEventListener('click', () => {
            modal.remove();
        });

        // Send Button sends message
        const sendBtn = modal.querySelector('.send-btn');
        sendBtn.addEventListener('click', () => {
            const recipient = document.getElementById('message-recipient').value;
            const message = document.getElementById('message-text').value;

            if (recipient && message) {
                alert(`Message sent to ${recipient}: ${message}`);
                modal.remove();
            } else {
                alert('Please fill out both fields.');
            }
        });
    };

    // New Message button event
    newMessageBtn.addEventListener('click', createNewMessageModal);

    // Follow Button functionality
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

    // Mark message as read when clicked
    const messageItems = document.querySelectorAll('.message-item');
    
    messageItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('read');
            const messageTime = item.querySelector('.message-time');
            if (item.classList.contains('read')) {
                messageTime.style.color = '#888'; // Change time color to indicate read status
            } else {
                messageTime.style.color = '#bbb'; // Default unread time color
            }
        });
    });
});
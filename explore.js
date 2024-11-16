// Select DOM elements
const exploreGrid = document.querySelector('.explore-grid');
const loadingMessage = document.querySelector('.loading-message');
const followButtons = document.querySelectorAll('.follow-suggestion button');

// Simulated content data (replace this with real data from a server/API)
const exploreItems = [
    { id: 1, imgSrc: './ASSETS/IMAGES/explore1.jpg', caption: 'Beautiful Sunset' },
    { id: 2, imgSrc: './ASSETS/IMAGES/explore2.jpg', caption: 'City Lights' },
    { id: 3, imgSrc: './ASSETS/IMAGES/explore3.jpg', caption: 'Mountainscape' },
    { id: 4, imgSrc: './ASSETS/IMAGES/explore4.jpg', caption: 'Serene Beach' },
    { id: 5, imgSrc: './ASSETS/IMAGES/explore5.jpg', caption: 'Urban Art' },
    { id: 6, imgSrc: './ASSETS/IMAGES/explore6.jpg', caption: 'Nature Trail' },
    { id: 7, imgSrc: './ASSETS/IMAGES/explore7.jpg', caption: 'Blooming Flowers' },
    { id: 8, imgSrc: './ASSETS/IMAGES/explore8.jpg', caption: 'Starry Night' },
    { id: 9, imgSrc: './ASSETS/IMAGES/explore9.jpg', caption: 'Misty Forest' },
    { id: 10, imgSrc: './ASSETS/IMAGES/explore10.jpg', caption: 'Snowy Peaks' },
    // Add more items as needed
];

// Function to create and append explore items dynamically
function renderExploreItems(items) {
    items.forEach(item => {
        const exploreItem = document.createElement('div');
        exploreItem.classList.add('explore-item');
        exploreItem.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.caption}">
            <div class="overlay">
                <p>${item.caption}</p>
            </div>
        `;
        exploreGrid.appendChild(exploreItem);
    });
}

// Initial render of explore items
renderExploreItems(exploreItems.slice(0, 10)); // Load first 6 items initially

// Infinite scrolling simulation
let loading = false;
window.addEventListener('scroll', () => {
    if (loading) return;

    // Check if the user has scrolled near the bottom
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        loading = true;
        loadingMessage.style.display = 'block';

        // Simulate loading new content (e.g., from an API)
        setTimeout(() => {
            const moreItems = exploreItems; // Replace this with actual API call
            renderExploreItems(moreItems.slice(0, 10)); // Load next 6 items
            loadingMessage.style.display = 'none';
            loading = false;
        }, 1500); // Simulate a 1.5s loading time
    }
});

// Follow button interactivity
followButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userId = button.getAttribute('data-user');
        if (button.innerText === 'Follow') {
            button.innerText = 'Following';
            button.style.backgroundColor = '#e4e4e4';
            button.style.color = '#333';
        } else {
            button.innerText = 'Follow';
            button.style.backgroundColor = '#0095f6';
            button.style.color = '#fff';
        }
        console.log(`Toggled follow state for user: ${userId}`);
    });
});
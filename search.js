document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#search-input");
    const searchResults = document.querySelector(".search-results");
    const searchMockData = [
        { id: 1, name: "Chris Evans", avatar: "./ASSETS/IMAGES/user4.jpg" },
        { id: 2, name: "Emma Watson", avatar: "./ASSETS/IMAGES/user5.jpg" },
        { id: 3, name: "Robert Downey", avatar: "./ASSETS/IMAGES/user6.jpg" },
    ];
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim();
        if (query) {
            displaySearchResults(query);
        } else {
            searchResults.innerHTML = "";
        }
    });
    function displaySearchResults(query) {
        const filteredResults = searchMockData.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults
                .map(
                    (user) => `
                <div class="result-item">
                    <img src="${user.avatar}" alt="${user.name}" class="result-avatar">
                    <span class="result-name">${user.name}</span>
                    <button class="follow-btn" data-user="${user.id}">Follow</button>
                </div>
            `
                )
                .join("");

            attachFollowListeners(".search-results .follow-btn");
        } else {
            searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    }
    function toggleFollowsearch(button) {
        if (button.textContent === "Follow") {
            button.textContent = "Following";
            button.style.backgroundColor = "#ccc";
        } else {
            button.textContent = "Follow";
            button.style.backgroundColor = "#0095f6";
        }
    }
    function attachFollowListeners(selector) {
        document.querySelectorAll(selector).forEach((button) => {
            button.addEventListener("click", () => toggleFollowsearch(button));
        });
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
    const followButtons = document.querySelectorAll('.follow-suggestion button');
    followButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const userId = event.target.getAttribute('data-user');
            toggleFollow(userId);
        });
    });
});
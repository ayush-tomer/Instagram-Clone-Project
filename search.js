document.addEventListener("DOMContentLoaded", () => {
    // Search Functionality
    const searchInput = document.querySelector(".search-bar input");
    const searchResults = document.querySelector(".search-results");

    // Listen for input changes to dynamically update results
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim();
        if (query) {
            displaySearchResults(query);
        } else {
            searchResults.innerHTML = ""; // Clear results when input is empty
        }
    });

    function displaySearchResults(query) {
        // Placeholder for dynamic search results logic
        const mockData = [
            { name: "John Doe", avatar: "user1.jpg" },
            { name: "Jane Smith", avatar: "user2.jpg" },
            { name: "Alex Johnson", avatar: "user3.jpg" },
        ];

        // Filter mock data based on query
        const results = mockData.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            searchResults.innerHTML = results
                .map(
                    (user) => `
                <div class="result-item">
                    <img src="${user.avatar}" alt="${user.name}" class="result-avatar">
                    <span class="result-name">${user.name}</span>
                    <button class="follow-btn">Follow</button>
                </div>
            `
                )
                .join("");

            // Attach follow button functionality
            const followButtons = document.querySelectorAll(".follow-btn");
            followButtons.forEach((button) => {
                button.addEventListener("click", handleFollow);
            });
        } else {
            searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    }

    // Follow Button Functionality
    function handleFollow(event) {
        const button = event.target;
        if (button.textContent === "Follow") {
            button.textContent = "Following";
            button.style.backgroundColor = "#ccc";
        } else {
            button.textContent = "Follow";
            button.style.backgroundColor = "#0095f6";
        }
    }
});
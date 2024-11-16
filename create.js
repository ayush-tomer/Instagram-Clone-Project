document.addEventListener("DOMContentLoaded", function () {
    // Select elements using querySelector
    const createPostForm = document.querySelector("#createPostForm");
    const postImageInput = document.querySelector("#postImage");
    const captionInput = document.querySelector("#caption");
    const locationInput = document.querySelector("#location");
    const postBtn = document.querySelector(".post-btn");

    // Handle image file selection and preview
    postImageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = function (e) {
            const imgPreview = document.createElement("img");
            imgPreview.src = e.target.result;
            imgPreview.alt = "Image Preview";
            imgPreview.style.maxWidth = "100%";
            imgPreview.style.borderRadius = "8px";
            imgPreview.style.marginBottom = "10px";

            // Remove previous image preview if any
            const prevImgPreview = document.querySelector(".image-preview");
            if (prevImgPreview) {
                prevImgPreview.remove();
            }

            imgPreview.classList.add("image-preview");
            document.querySelector(".post-content").insertBefore(imgPreview, captionInput);
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    });

    // Handle the post button click
    postBtn.addEventListener("click", function () {
        const caption = captionInput.value.trim();
        const location = locationInput.value.trim();

        // Check if the user has added a caption, location, or uploaded an image
        if (!caption && !location && !postImageInput.files.length) {
            alert("Please add a caption, location, or upload an image.");
            return;
        }

        // Simulate post creation (you can replace this with real API logic)
        const confirmationMessage = `Post Created! \nCaption: ${caption ? caption : "No caption"}\nLocation: ${location ? location : "No location"}`;
        alert(confirmationMessage);

        // Clear the form after posting
        createPostForm.reset();
        const imgPreview = document.querySelector(".image-preview");
        if (imgPreview) {
            imgPreview.remove();
        }
    });

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
});
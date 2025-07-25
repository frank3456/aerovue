// script.js for AeroVue with skeleton loader

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("video-gallery");
    const searchInput = document.getElementById("searchInput");

    // Show skeletons while loading
    const showSkeletons = (count = 6) => {
        gallery.innerHTML = "";
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement("div");
            skeleton.className = "skeleton-card";
            skeleton.innerHTML = `<div class="skeleton-thumbnail"></div>`;
            gallery.appendChild(skeleton);
        }
    };

    // Display actual videos
    const displayVideos = (videoList) => {
        gallery.innerHTML = "";
        if (videoList.length === 0) {
            gallery.innerHTML = "<p style='text-align:center;'>No videos found.</p>";
            return;
        }
        videoList.forEach(video => {
            const card = document.createElement("div");
            card.className = "video-card";
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" />
                <div class="video-content">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;
            card.addEventListener("click", () => {
                window.location.href = `watch.html?id=${video.id}`;
            });
            gallery.appendChild(card);
        });
    };

    // Initially show skeletons, then load videos
    showSkeletons();
    setTimeout(() => {
        displayVideos(videos);
    }, 1000); // simulate loading delay

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredVideos = videos.filter(video =>
            video.title.toLowerCase().includes(searchTerm) ||
            video.description.toLowerCase().includes(searchTerm)
        );
        displayVideos(filteredVideos);
    });
});

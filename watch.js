// watch.js

document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoTitle = document.getElementById("videoTitle");
    const videoDescription = document.getElementById("videoDescription");

    // Get video ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get("id");

    if (!videoId) {
        videoTitle.textContent = "Video not found";
        videoDescription.textContent = "No video ID provided.";
        return;
    }

    // Ensure videos array is available
    if (typeof videos === "undefined") {
        videoTitle.textContent = "Video not found";
        videoDescription.textContent = "Video data not loaded.";
        return;
    }

    // Find video in videos array
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        videoTitle.textContent = "Video not found";
        videoDescription.textContent = "The requested video does not exist.";
        return;
    }

    // Set video details
    videoPlayer.src = video.url;
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;

    // Initialize Plyr after ensuring video is present
    const player = new Plyr(videoPlayer, {
        controls: [
            'play-large', 'play', 'progress', 'current-time', 'mute', 'volume',
            'captions', 'settings', 'fullscreen'
        ],
        settings: ['quality', 'speed', 'loop'],
    });

    // Update dynamic meta title
    document.title = `${video.title} - AeroVue`;
    const dynamicTitle = document.getElementById("dynamic-title");
    if (dynamicTitle) {
        dynamicTitle.textContent = `${video.title} - AeroVue`;
    }

    // SYSTEM THEME HANDLING (NO FORCED RELOAD)
    const applyTheme = () => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    };

    // Initial theme application
    applyTheme();

    // React to system theme changes without page reload
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
});

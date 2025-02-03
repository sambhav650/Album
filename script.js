document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video-container video");

    videos.forEach((video) => {
        // Add full-screen feature
        video.addEventListener("click", () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        });
    });
});
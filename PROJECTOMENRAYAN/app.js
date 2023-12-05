function openModal(videoType) {
    if (videoType === 'featured') {
        document.getElementById('videoModalFeatured').style.display = 'block';
    } else {
        document.getElementById('videoModal').style.display = 'block';
        const videoUrl = getVideoUrl(videoType);
        document.getElementById('youtubeVideo').src = videoUrl;
    }
}

function closeModal(videoType) {
    if (videoType === 'featured') {
        document.getElementById('videoModalFeatured').style.display = 'none';
    } else {
        document.getElementById('videoModal').style.display = 'none';
        document.getElementById('youtubeVideo').src = '';
    }
}

function getVideoUrl(videoType) {
    switch (videoType) {
        case 'bloopers':
            return 'https://www.youtube.com/embed/Gmk-Is8OVBo';
        case 'trailer':
            return 'https://www.youtube.com/embed/2Z8me1bwZJE';
        case 'clips':
            return 'https://www.youtube.com/embed/CLIPS_VIDEO_ID';
        default:
            return '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const ball = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .featured-content.active, .featured-content");

    ball.addEventListener("click", () => {
        items.forEach(item => {
            item.classList.toggle("active");
        });
        ball.classList.toggle("active");

    });
});



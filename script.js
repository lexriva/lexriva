document.addEventListener('DOMContentLoaded', () => {
    // Auto-play videos on load
    const reels = document.querySelectorAll('video');
    reels.forEach(video => {
        video.play().catch(() => {
            console.log("Waiting for user interaction to play video");
        });
    });

    // Simple search log
    const search = document.querySelector('.search-bar input');
    search.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            alert("Searching for: " + search.value);
        }
    });
});

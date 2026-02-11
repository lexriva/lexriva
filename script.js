document.addEventListener('DOMContentLoaded', () => {
    const reels = document.querySelectorAll('video');
    const options = { threshold: 0.8 }; // 80% dikhne par play hoga

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, options);

    reels.forEach(video => observer.observe(video));
});

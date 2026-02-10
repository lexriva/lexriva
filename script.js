// 1. Video Reels Auto-Play (Mobile Optimization)
// Isse aapki vertical videos smooth chalengi
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.play().catch(error => {
            // Auto-play prevent hone par manual play allow karega
            console.log("Reel auto-play waiting for user interaction");
        });
    });
});

// 2. Interactive Search Bar
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.backgroundColor = "#fff";
        searchInput.style.border = "1px solid #967BB6";
        searchInput.style.transition = "0.3s";
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.style.backgroundColor = "#f6f3fa";
        searchInput.style.border = "none";
    });
}

// 3. Simple Add to Cart Notification
// Kyunki abhi humne buttons ko 'Shop Now' ya 'Explore' rakha hai
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn') || e.target.tagName === 'BUTTON') {
        const btnText = e.target.innerText;
        if(btnText.includes("ADD") || btnText.includes("SHOP")) {
            alert("Lexriva: Opening collection for you! ✨");
        }
    }
});

// 4. Smooth Scroll for Bottom Nav
document.querySelectorAll('.bottom-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            console.log("Navigating to section...");
        }
    });
});

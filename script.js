// 1. Add to Cart Functionality
// Jab koi button par click karega toh ye alert dikhayega
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h4').innerText;
        alert(productName + " has been added to your cart! 🛒");
    });
});

// 2. Simple Search Filter
// Isse user products ko filter kar payega
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h4').innerText.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

// 3. Category Click Effect
// Categories par click karne par user ko message dikhana
document.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.querySelector('p').innerText;
        console.log("Exploring " + category + " section...");
        // Yahan aap specific category page ka link bhi daal sakti hain
    });
});
const categoryData = {
    // TITLE 1: Women's Clothing
    'western': {
        title: "Women Western Wear",
        midText: "WESTERN<br><b>VIBES</b>",
        items: [
            {n: 'Dresses', o: '50% OFF'}, {n: 'Tops', o: '30% OFF'}, {n: 'Jeans', o: '40% OFF'},
            {n: 'T-shirt', o: '20% OFF'}, {n: 'Jumpsuit', o: '50% OFF'}, {n: 'Co-ords', o: 'NEW'},
            {n: 'Sleep wear', o: '30% OFF'}
        ]
    },
    'ethnic': {
        title: "Women Ethnic Wear",
        midText: "ETHNIC<br><b>DREAMS</b>",
        items: [
            {n: 'Saree', o: '60% OFF'}, {n: 'Kurtis', o: '30% OFF'}, {n: 'Dress Material', o: 'NEW'},
            {n: 'Lehengas', o: '50% OFF'}, {n: 'Gowns', o: '70% OFF'}
        ]
    },

    // TITLE 2: Women's Footwear
    'footwear': {
        title: "Women Footwear",
        midText: "STEP IN<br><b>STYLE</b>",
        items: [
            {n: 'Heels', o: '40% OFF'}, {n: 'Sandals', o: '30% OFF'}, {n: 'Boots', o: '50% OFF'},
            {n: 'Bellies', o: '40% OFF'}, {n: 'Sneakers', o: '20% OFF'}
        ]
    },

    // TITLE 3: Beauty (Makeup)
    'lipstick': {
        title: "Lipstick",
        midText: "LIP<br><b>GLOSS</b>",
        items: [{n: 'Lipstick', o: '50%'}, {n: 'Lip Gloss', o: '30%'}, {n: 'Lip Liner', o: '50%'}]
    },
    'face-makeup': {
        title: "Face Makeup",
        midText: "GLOW<br><b>UP</b>",
        items: [{n: 'Foundation', o: '30%'}, {n: 'Compact', o: '20%'}, {n: 'Highlighter', o: '30%'}]
    },
    
    // TITLE 4: Jewellery
    'necklace': {
        title: "Necklace Set",
        midText: "BRIDAL<br><b>VIBES</b>",
        items: [
            {n: 'Bridal Set', o: 'NEW'}, {n: 'Haldi Hues', o: '20%'}, {n: 'Mehndi Vibes', o: '20%'},
            {n: 'Rajputi', o: '30%'}, {n: 'American Diamond', o: '40%'}
        ]
    }
};

// Function to Render Page 2
function openCategory(key) {
    const data = categoryData[key];
    if(!data) return;

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('sub-page').style.display = 'block';
    document.getElementById('page-name').innerText = data.title;

    const grid = document.getElementById('grid-content');
    grid.innerHTML = ''; // Clear purana content

    // Logic to insert 3x3 Grid with Maroon Box at Index 4 (Center)
    data.items.forEach((item, index) => {
        if (index === 4) {
            grid.innerHTML += `<div class="grid-item maroon-box"><h3>${data.midText}</h3></div>`;
        }
        grid.innerHTML += `
            <div class="grid-item">
                <img src="placeholder-icon.png">
                <p>${item.n}</p>
                <span>${item.o}</span>
            </div>`;
    });
    window.scrollTo(0,0);
}

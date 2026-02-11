// Poora Category aur Sub-category Data
const subData = {
    'western': {
        title: "Women Western Wear",
        mid: "WESTERN<br><b>VIBES</b>",
        items: [{n:'Dresses'}, {n:'Tops'}, {n:'Jeans'}, {n:'T-shirt'}, {n:'Jumpsuit'}, {n:'Co-ords'}, {n:'Sleepwear'}]
    },
    'ethnic': {
        title: "Women Ethnic Wear",
        mid: "ETHNIC<br><b>STYLE</b>",
        items: [{n:'Saree'}, {n:'Kurtis'}, {n:'Dress Mat.'}, {n:'Lehengas'}, {n:'Gowns'}]
    },
    'footwear': {
        title: "Women Footwear",
        mid: "STEP IN<br><b>STYLE</b>",
        items: [{n:'Heels'}, {n:'Sandals'}, {n:'Boots'}, {n:'Ballerinas'}, {n:'Sneakers'}]
    },
    'makeup': {
        title: "Makeup & Beauty",
        mid: "YOUR<br><b>BEAUTY</b><br>SHELF",
        items: [{n:'Lipstick'}, {n:'Lip Gloss'}, {n:'Lip Liner'}, {n:'Foundation'}, {n:'Compact'}, {n:'Eye Shadow'}, {n:'Eyeliner'}, {n:'Perfumes'}]
    },
    'jewellery': {
        title: "Women Jewellery",
        mid: "SHINE<br><b>BRIGHT</b>",
        items: [{n:'Minimal'}, {n:'Necklace Set'}, {n:'Earrings'}, {n:'Rings'}, {n:'Bracelet'}, {n:'Maangtika'}]
    },
    'acc': {
        title: "Women Accessories",
        mid: "LUXE<br><b>EDIT</b>",
        items: [{n:'Hair Acc.'}, {n:'Belts'}, {n:'Sunglasses'}, {n:'Watches'}, {n:'Bags'}]
    }
};

// Page Switcher Function
function renderSub(title, key) {
    const data = subData[key];
    if(!data) return;

    // Hide Home, Show Sub-page
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('sub-page').style.display = 'block';
    document.getElementById('sub-title-text').innerText = data.title;
    
    const grid = document.getElementById('grid-content');
    grid.innerHTML = '';
    
    // Grid Rendering Logic (Max 9 items, Maroon box at 5th position)
    const displayItems = data.items.slice(0, 8); // Pehle 8 items
    displayItems.forEach((item, index) => {
        // 5th position (index 4) par maroon box daalna
        if(index === 4) {
            grid.innerHTML += `<div class="grid-item maroon-box"><h3>${data.mid}</h3></div>`;
        }
        grid.innerHTML += `
            <div class="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/512/3163/3163195.png">
                <p>${item.n}</p>
                <span>UP TO 70% OFF</span>
            </div>`;
    });
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('sub-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
    window.scrollTo(0,0);
}

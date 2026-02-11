/* --- NAYA UPDATED CODE --- */
const subData = {
    'western': { t:'Western Wear', mid:'MODERN<br>CHIC', items:[{n:'Dresses', i:'w_dress.jpg'},{n:'Tops', i:'w_top.jpg'},{n:'Jeans', i:'w_jeans.jpg'},{n:'T-shirt', i:'w_tshirt.jpg'},{n:'Jumpsuit', i:'w_jump.jpg'},{n:'Co-ords', i:'w_coord.jpg'},{n:'Sleepwear', i:'w_sleep.jpg'}] },
    'ethnic': { t:'Ethnic Wear', mid:'ROYAL<br>ETHNIC', items:[{n:'Saree', i:'e_saree.jpg'},{n:'Kurtis', i:'e_kurti.jpg'},{n:'Dress Material', i:'e_material.jpg'},{n:'Lehengas', i:'e_lehenga.jpg'},{n:'Gowns', i:'e_gown.jpg'}] },
    'footwear': { t:'Footwear', mid:'LUXE<br>STEPS', items:[{n:'Heels', i:'f_heels.jpg'},{n:'Sandals', i:'f_sandals.jpg'},{n:'Boots', i:'f_boots.jpg'},{n:'Bellies', i:'f_bellies.jpg'},{n:'Sneakers', i:'f_sneakers.jpg'}] },
    'makeup_master': { t:'Makeup', mid:'GLAM<br>SHELF', items:[
        {n:'Lipstick', i:'m_lip.jpg'}, {n:'Lip Gloss', i:'m_gloss.jpg'}, {n:'Lip Liner', i:'m_liner.jpg'},
        {n:'Foundation', i:'m_found.jpg'}, {n:'Compact', i:'m_comp.jpg'}, {n:'Highlighter', i:'m_high.jpg'},
        {n:'Eye Shadow', i:'m_eye.jpg'}, {n:'Eyeliner', i:'m_eline.jpg'}, {n:'Kajal', i:'m_kajal.jpg'},
        {n:'Mascara', i:'m_masc.jpg'}, {n:'Nails', i:'m_nails.jpg'}, {n:'Brushes', i:'m_brush.jpg'}, {n:'Perfumes', i:'m_perf.jpg'}
    ]},
    'jewellery_master': { t:'Jewelry', mid:'FINE<br>GOLD', items:[
        {n:'Minimal', i:'j_min.jpg'}, {n:'Bridal', i:'j_brid.jpg'}, {n:'Haldi Hues', i:'j_haldi.jpg'},
        {n:'Mehndi Vibes', i:'j_meh.jpg'}, {n:'Rajputi', i:'j_raj.jpg'}, {n:'American Diamond', i:'j_ad.jpg'},
        {n:'Kashmiri Ear', i:'j_kash.jpg'}, {n:'Jhumka', i:'j_jhum.jpg'}, {n:'Korean Ear', i:'j_kor.jpg'},
        {n:'Maangtika', i:'j_tika.jpg'}, {n:'Rings', i:'j_ring.jpg'}, {n:'Bracelet', i:'j_brace.jpg'}
    ]},
    'acc_main': { t:'Accessories', mid:'LUXE<br>EDIT', items:[{n:'Hair Acc', i:'a_hair.jpg'},{n:'Belts', i:'a_belts.jpg'},{n:'Sunglasses', i:'a_glass.jpg'},{n:'Watches', i:'a_watch.jpg'}] },
    'bags': { t:'Bags', mid:'BAGS<br>LUXE', items:[{n:'Backpacks', i:'b_pack.jpg'},{n:'Handbags', i:'b_hand.jpg'},{n:'Sling Bags', i:'b_sling.jpg'},{n:'Wallets', i:'b_wallet.jpg'}] },
    'personal_care': { t:'Personal Care', mid:'SELF<br>CARE', items:[{n:'Body Lotion', i:'c_lotion.jpg'},{n:'Face Wash', i:'c_wash.jpg'},{n:'Face Mask', i:'c_mask.jpg'}] }
};

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    window.scrollTo(0,0);
}

function renderSub(key) {
    const data = subData[key];
    showPage('sub-page');
    document.getElementById('sub-title-text').innerText = data.t;
    const grid = document.getElementById('grid-content');
    grid.innerHTML = '';
    data.items.forEach((item, index) => {
        if(index === 4) grid.innerHTML += `<div class="grid-item maroon-box">${data.mid}</div>`;
        grid.innerHTML += `<div class="grid-item"><img src="${item.i}" onerror="this.src='icon_product.png'"><p>${item.n}</p></div>`;
    });
}

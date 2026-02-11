function openSubCategoryPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('sub-category-page').style.display = 'block';
    window.scrollTo(0, 0);
}

function goBack() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('sub-category-page').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar using JavaScript
    const navbarContainer = document.getElementById('navbarContainer');
    fetch('./templates/nav/navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });
    // Load the searchingNavContainer using JavaScript
    const searchingNavContainer = document.getElementById('searchingNavContainer');
    fetch('./templates/searchingnav/searchingNav.html')
        .then(response => response.text())
        .then(data => {
            searchingNavContainer.innerHTML = data;
        });
    // Load the carouselContainer using JavaScript
    const carouselContainer = document.getElementById('carouselContainer');
    fetch('./templates/carousel/carousel.html')
        .then(response => response.text())
        .then(data => {
            carouselContainer.innerHTML = data;
        });

    // Load the category using JavaScript
    const categoryContainer = document.getElementById('categoryContainer');
    fetch('./templates/category/category.html')
        .then(response => response.text())
        .then(data => {
            categoryContainer.innerHTML = data;
        });

        // Load the marquee using JavaScript
    const latestJobsContainer = document.getElementById('latestJobsContainer');
    fetch('./templates/latest/latestjobs.html')
        .then(response => response.text())
        .then(data => {
            latestJobsContainer.innerHTML = data;
        });
    
    // Load the footer using JavaScript
    const footerContainer = document.getElementById('footerContainer');
    fetch('./templates/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        });
});

document.addEventListener('DOMContentLoaded', function() {
    // Buat hamburger menu
    const navbar = document.querySelector('.navbar');
    const nav2 = document.querySelector('.nav-2');
    
    // Buat hamburger button
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Tambahkan hamburger ke navbar
    navbar.appendChild(hamburger);
    
    // Event listener untuk hamburger menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav2.classList.toggle('active');
    });
    
    // Tutup menu ketika link diklik (untuk mobile)
    const navLinks = document.querySelectorAll('.nav-2-text');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav2.classList.remove('active');
        });
    });
    
    // Tutup menu ketika klik di luar menu
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        
        if (!isClickInsideNav && nav2.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav2.classList.remove('active');
        }
    });
    
    // Handle resize window - tutup menu jika layar diperbesar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav2.classList.remove('active');
        }
    });
});
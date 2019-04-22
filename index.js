const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-links');
    const navLinks = document.querySelectorAll('.header-links li');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navSlide 0.5s forwards`;
        } else {
            nav.style.animation = `navSlideOut 0.5s`;
        }

        // Amimate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        
  
      // burger animation
      burger.classList.toggle("toggle");
  
    });

}

navSlide();
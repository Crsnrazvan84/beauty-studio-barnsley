const burger = document.querySelector('.burger');
const burger1 = document.querySelector('.line1');
const burger2 = document.querySelector('.line2');
const burger3 = document.querySelector('.line3');
const nav = document.querySelector('#header-links');
const navLinks = document.querySelectorAll('#header-links li');
const contactMotto = document.querySelector('#contact-motto');
const downArrow = document.querySelector('.down-arrow');
const upArrow = document.querySelector('.up-arrow');
const mapouter = document.querySelector('.mapouter');


function initMenu(loadPage) {
    $('#' + loadPage + '-page').show();
    $('#' + loadPage + '-link').addClass('current');

    var links = document.querySelectorAll("#header-links a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {

            $('.page').hide();
            $('.menuButtons').removeClass('current');
            var page = this.getAttribute("data-page");
            $('#' + page + '-page').fadeIn();
            $('#' + page + '-link').addClass('current');
        };
    }
}

const navSlide = () => {
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        if (nav.classList.contains("nav-active")) {
            nav.style.animation = `navSlide 0.5s forwards`;
            $('body').addClass('navBar-open');
        } else {
            nav.style.animation = `navSlideOut 0.5s`;
            $('body').removeClass('navBar-open');
        }

        // Amimate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navFade 0.5s ${index / 5 + 0.5}s ease forwards`;
            }
        });

        // burger animation
        burger.classList.toggle("toggle");
    });
}

function navClose() {
    window.addEventListener('mouseup', function (event) {
        if ((nav.classList.contains('nav-active')) && (event.target != nav) && (event.target != burger1 && event.target != burger2 && event.target != burger3)) {
            nav.style.animation = `navSlideOut 0.5s`;
            nav.classList.remove('nav-active');
            burger.classList.remove("toggle");
            $('body').removeClass('navBar-open');
            navLinks.forEach((link) => {
                link.style.animation = "";
            })
        }
    });
}

function scrollDown () {
    mapouter.scrollIntoView(); 
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

downArrow.addEventListener('click', scrollDown);
upArrow.addEventListener('click', scrollUp);


$('.page').hide();
initMenu('home');
navSlide();
navClose();
const burger = document.querySelector('.burger');
const burger1 = document.querySelector('.line1');
const burger2 = document.querySelector('.line2');
const burger3 = document.querySelector('.line3');
const nav = document.querySelector('#header-links');
const navLinks = document.querySelectorAll('.menu-buttons');
const links = document.querySelectorAll(".menuButtons");

const contactMotto = document.querySelector('#contact-motto');
const downArrow = document.querySelector('.down-arrow');
const upArrow = document.querySelector('.up-arrow');
const mapouter = document.querySelector('.mapouter');


function initMenu(loadPage) {
    $('#' + loadPage + '-page').show();
    $('#' + loadPage + '-link').addClass('current');

    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {

            $('.page').hide();
            $('.menuButtons').removeClass('current');
            $("html").css("scroll-behavior", "auto");
            const page = this.getAttribute("data-page");
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
    window.addEventListener('mouseup', (event) => {
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

function initServices() {
    let subMenuLinks = document.querySelectorAll('.dropdown');

    for (let i = 0; i < subMenuLinks.length; i++) {
        subMenuLinks[i].onclick = function () {
            const serviceName = this.getAttribute("data-page");
            function checkPage() {
                if ($("#services-page").is(":hidden")) {
                    $('.page').hide();
                    $('.menuButtons').removeClass('current');
                    $('#services-page').fadeIn();
                    $('#services-link').addClass('current');
                }
            }

            $.when(checkPage()).then(() => {
                const headerHeight = $(window).height() * 0.15;
                const topOfElement = $("#" + serviceName).offset().top - headerHeight;
                $("html").css("scroll-behavior", "smooth");
                window.scrollTo(0, topOfElement);
            });

        }
    }

}

// scroll services page
downArrow.addEventListener('click', () => mapouter.scrollIntoView({ behavior: "smooth" }));
// scroll contact page
upArrow.addEventListener('click', () => window.scroll({ top: 0, behavior: "smooth" }));

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


$('.page').hide();
initMenu('home');
initServices();
navSlide();
navClose();
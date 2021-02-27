const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    })
})

function mobile() {
    var x = document.getElementsByClassName("hamburger");

    if (x.style.display === "block") {
        console.log("DONE");
    }
}

function readMore() {
    var x = document.getElementById("dis");

    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("btn_read").innerHTML = "More About me";
    }
    else {
        x.style.display = "block";
        document.getElementById("btn_read").innerHTML = "HIDE DETAILS";

    }
}

function readMorePro(i) {
    var str = "desp";
    str += i;
    var z = "des" + i;
    var x = document.getElementById(str);

    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById(z).innerHTML = "Description";
    }
    else {
        x.style.display = "block";
        document.getElementById(z).innerHTML = "Hide";
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.hamburger').addClass("hamburger2");
            $('.hamburger').removeClass("hamburger1");
            $('.navbar').addClass("addElem");
        } else {
            $('.navbar').removeClass("sticky");
            $('.hamburger').addClass("hamburger1");
            $('.hamburger').removeClass("hamburger2");
            $('.navbar').removeClass("addElem");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open")
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content header_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".feature_card", {
    duration:2000,
    interval:1000,

})

ScrollReveal().reveal(".furniture_content .section_subheader", {
    ...scrollRevealOption,
    
});
ScrollReveal().reveal(".furniture_content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".furniture_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

const swiper = new Swiper(".swiper", {
    slidesPerview:"auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 0, // Delay between slides in milliseconds (3000ms = 3 seconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
    },
    speed: 5000,
})
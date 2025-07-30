AOS.init({
    once: false,  // Set to false to re-animate on scroll
    offset: 100,  // Adjust if needed to trigger animations earlier
    delay: 0,     // Default delay (individual elements use their own delay)
});


async function loadSVGs() {
    const elements = document.querySelectorAll(".svg-icon"); // Select all placeholders

    elements.forEach(async (element) => {
        const url = element.getAttribute("data-svg");
        try {
            const response = await fetch(url);
            const svgText = await response.text();
            element.innerHTML = svgText; // Inject SVG content
        } catch (error) {
            console.error("Error loading SVG:", url, error);
        }
    });
}

loadSVGs();

$(document).ready(function(){
    var slickSettings = {
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        swipe: false,
        slidesToShow: 2,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    };

    $('.testimonials_slider_left').slick(slickSettings);

    var slickSettingsRtl = $.extend({}, slickSettings, { rtl: true });
    $('.testimonials_slider_right').slick(slickSettingsRtl);
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 100);
    return false;
});

// Cache selectors
var topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
    const mouseElement = document.querySelector(".mouse");
    if (window.scrollY > 200) {
      mouseElement.style.opacity = "0";
    } else {
      mouseElement.style.opacity = "1";
    }
  });
  
jQuery(document).ready(function ($) {
    gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

    // Seleziona tutti gli elementi SVG con la classe "animation-svg"
    $(".animation-svg").each(function (index, element) {
        // Crea un'animazione separata per ogni elemento
        gsap.fromTo(element, {
            drawSVG: 0,
        }, {
            drawSVG: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: element,
                pin: false,
                scrub: 0.5,
                start: "top center",
                end: "bottom bottom",
                markers: false,
                once: false
            }
        });
    });
});

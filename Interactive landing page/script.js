var tl = gsap.timeline();

tl.to('.hero-title', {
    y: -20,
    opacity: 1,
    duration: 1
}).to('.hero-subtitle', {
    y: -20,
    opacity: 1,
    duration: 1
}, "-=0.5").to('.cta', {
    y: -20,
    duration: 1,
    opacity: 1
}, "-=0.5");

gsap.to('.icon', {
    duration: 1,
    opacity: 1,
    y: -20,
    stagger: 0.3
})
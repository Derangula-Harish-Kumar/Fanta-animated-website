

gsap.from(".box1",{
    scale: 0.5,
    duration: 2,
    rotate: 150,
    scrollTrigger:{
        trigger:".box1",
        scroll:"body",
        markers:true,
        start:"top 90%",
        end: "bottom 50%",
        scrub: 1
    }
})
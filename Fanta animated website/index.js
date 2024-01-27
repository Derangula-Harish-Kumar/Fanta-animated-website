

// gsap.to("#fantacan",{
//     top: 850,
//     left: 30,
//     duration:2,

// })

let timeline = gsap.timeline({
    scrollTrigger:{
        
        trigger:".pag2",
        // markers:true,
        start: "100% 90%",
        end: "150% 50%",
        scrub:2,

    }
})

timeline.to("#fantacan",{
        top: "125%",
        left: "3%",
        duration:2,
} ,"fitsr")

timeline.to("#cut-orange",{
    top: "160%",
    left: "21%",
    duration:2,
},"fitsr")

timeline.to("#oranges",{
    top: "160%",
    right: "10%",
    duration:2,
    width:"23%",

},"fitsr")

timeline.to("#leaf1",{
    top: "115%",
    left: "80%",
    duration:2,
    rotate: "90deg"

},"fitsr")

timeline.to("#leaf2",{
    top: "110%",
    right: "82%",
    duration:2,
    rotate: "190deg",
    width:"15%",

},"fitsr")




let timeline2 = gsap.timeline({
    scrollTrigger:{
        
        trigger:".pag2",
        // markers:true,
        start: "170% 50%",
        end: "240% 50%",
        scrub:2,

    }
})


timeline2.from("#cocacola",{
    left:"-50%",
    bottom:"-50%",
    duration:2,
    rotate: "-70deg"
},"two")

timeline2.from("#orange1",{
    left:"-50%",
    bottom:"-50%",
    duration:2,
    rotate: "-70deg"
},"two")

timeline2.from("#pepsi",{
    right:"-50%",
    bottom:"-50%",
    duration:2,
    rotate: "70deg"
},"two")

timeline2.from("#orange2",{
    right:"-50%",
    bottom:"-50%",
    duration:2,
    rotate: "-70deg"
},"two")



timeline2.to("#fantacan",{
    left:"31%",
    top:"216%",
    duration:2,
},"two")

timeline2.to("#cut-orange",{
    left:"39%",
    top:"205%",
    duration:2,
    rotate: "-70deg",
    width:"22%"
},"two")


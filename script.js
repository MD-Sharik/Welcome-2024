const year2024 = document.getElementById("year24");
const year2023 = document.getElementById("year23");
const goodbye = document.getElementById("tag1");
const welcome = document.getElementById("tag2");
const firework = document.querySelector(".fireworks");
const firework2 = document.querySelector(".fireworks2");
const main = document.getElementById("main");


gsap.registerPlugin(ScrollTrigger)
gsap.to(year2024,{
    y:-450,
    
    scrollTrigger:{
        stagger :1,
        trigger:main,
        start:"center 30%",
        end:"center 15%",
        // markers:true,
        scrub:1,
    }
})
gsap.to(year2023,{
    y:-450,
    scrollTrigger:{
        trigger:main,
        start:"center 30%",
        end:"center 15%",
        // markers:true,
        scrub:1,
    }
})
gsap.to(welcome,{
    opacity:1,
    scrollTrigger:{
        trigger:main,
        start:"center 22%",
        end:"center 10%",
        // markers:true,
        scrub:1,
    }
})
gsap.to(firework,{
    opacity:1,
    scrollTrigger:{
        trigger:main,
        start:"center 22%",
        end:"center 10%",
        // markers:true,
        scrub:1,
    }
})

gsap.to(firework2,{
    opacity:1,
    scrollTrigger:{
        trigger:main,
        start:"center 22%",
        end:"center 10%",
        // markers:true,
        scrub:1,
    }
})

gsap.to(goodbye,{
    opacity:0,
    scrollTrigger:{
        trigger:main,
        start:"center 32%",
        end:"center 22%",
        // markers:true,
        scrub:1,
    }
})


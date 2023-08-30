var tl = gsap.timeline()

tl.from("nav",{
    y:-500,
    opacity:0
    
})
tl.from(".left",{
    scale:2,
    duration:0.1,
    opacity:0,

    
})
tl.from(".right",{
    scale:0.5,
    opacity:0,
    
})
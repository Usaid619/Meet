// Declaring Variables
let index = 0
let greetings = ["Hello!","Hola!","Bonjour!","Hallo!","Ciao!","你好!","こんにちは!","Привет!","!مرحباً","Γειά σας!","!שָׁלוֹם","Olá!","안녕하세요!","Hej!","Merhaba!","नमस्ते!"]
const greetingText = document.querySelector(".loader__li")
const interval = setInterval(changeGreeting,100)
const smallCursor = document.querySelector(".small-cursor")
const cursor = document.querySelector(".cursor")
const heroDiv = document.querySelector(".hero__div")
const headerLeft = document.querySelector(".header__left")
const headerLinks = Array.from(document.querySelectorAll(".header__right__links"))

// Declaring Functions
function startAnimating(){
    const divCard = Array.from(document.querySelectorAll(".page-3__div__card"))
    const tl = gsap.timeline()
    tl.to(".loader",{
        yPercent: -100,
        delay: 1.8,
        duration: 1.4,
        borderRadius: "300px",
        ease: Expo.easeInOut
    })
    tl.from(".main",{
    yPercent: 40,
    delay: -1.9,
    duration: 1.8,
    ease: "ease-in"
    })
    tl.from(".hero__div",{
    yPercent:160,
    delay: -1.9,
    duration: 2.1,
    ease: "ease-in"
    })
    tl.from(".scroll-down",{
        opacity:0,
        delay: .3,
        ease: "ease-in"
    },"a")
    tl.to(".scroll-down",{
    y:10,
    repeat:-1,
    yoyo:true
    },"a")
    
    gsap.from(".page-2__div__about .back--titles, .page-2__div__skills .back--titles",{
            // xPercent:20,
            yPercent:100,
            opacity:0,
            scrollTrigger:{
                trigger: ".page-2__div",
                // markers:true,
                start: "top 70%",
                end:"top 40%",
                scrub:1
            }
        })
    gsap.from(".page-2__div",{
            opacity:0,
            yPercent:20,
            // scale:.8,
            scrollTrigger:{
                trigger:".page-2__div",
                // markers:true,
                scrub:1,
                start:"top 70%",
                end:"top 50%",
            }
        })
    gsap.from(".page-3 > h1",{
            yPercent:100,
            opacity:0,
            scrollTrigger:{
                trigger:".page-3",
                // markers:true,
                start:"top 80%",
                end: "top 40%",
                scrub:1
            }
        })
    divCard.forEach((card)=>{
            gsap.from(card,{
                y:100,
                opacity:.2,
                scale:.9,
                scrollTrigger:{
                    trigger:card,
                    // markers:true,
                    scrub:1,
                    start:"top 70%",
                    end:"top 30%"
                }
            })
        })
    gsap.from(".footer__top__div",{
            opacity:0,
            yPercent:10,
            duration:1,
            scrollTrigger:{
                trigger:".footer",
                // markers:true,
                start:"top 60%"
            }
        })
    gsap.from(".footer__bottom__div",{
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:".footer__bottom__div",
                // markers:true,
                start:"top bottom",
                end:"top top"
            }
        })
    gsap.from(".bottom__div__image",{
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:".bottom__div__image",
                // markers:true,
                start:"top 90%"
            }
        })
    
}

function changeGreeting(){
    if(index < greetings.length){
         greetingText.innerHTML = greetings[index]
         index++
    } else{
    clearInterval(interval)
    }
}
function updateCursorPosition(e){
    smallCursor.style.opacity == "0" 
        ? smallCursor.style.opacity = "1"
        : cursor.style.opacity = "1"
    
smallCursor.style.setProperty("--small-cursor-top",`${e.clientY}px`) 
smallCursor.style.setProperty("--small-cursor-left",`${e.clientX}px`)
cursor.style.setProperty("--cursor-top",`${e.clientY}px`)
cursor.style.setProperty("--cursor-left",`${e.clientX}px`)
}
function removeCursor(){
    smallCursor.style.opacity = "0"
    cursor.style.opacity = "0"
}
function clickCursor(e){
    cursor.classList.add("clicked")
    setTimeout(()=>{cursor.classList.remove("clicked")},200)
}
function makeMagnet(e){
    const moveX = e.offsetX - this.clientWidth / 2
    const moveY = e.offsetY - this.clientHeight / 2

    this.style.transform = `translate(${moveX}px,${moveY}px)`

    this.addEventListener("mouseleave",(e)=>{
        this.style.transform = `translate(0)`
    })
}
headerLinks.forEach(link=>{
    link.addEventListener("mousemove",makeMagnet)
})

// Adding Event Listeners
window.addEventListener("mousemove",updateCursorPosition)
window.addEventListener("mouseout",removeCursor)
window.addEventListener("click",clickCursor)
window.addEventListener("DOMContentLoaded",startAnimating)

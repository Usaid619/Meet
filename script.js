let greetings = ["Hello!","Hola!","Bonjour!","Hallo!","Ciao!","你好!","こんにちは!","Привет!","!مرحباً","Γειά σας!","!שָׁלוֹם","Olá!","안녕하세요!","Hej!","Merhaba!","नमस्ते!"]

const greetingText = document.querySelector(".loader__li")

let index = 0

function changeGreeting(){
    if(index < greetings.length){
         greetingText.innerHTML = greetings[index]
         index++
    } else{
    clearInterval(interval)
    }
}

const interval = setInterval(changeGreeting,100)

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
    duration:2,
    delay: .4,
    ease: "ease-in"
},"a")
tl.to(".scroll-down",{
y:10,
repeat:-1,
yoyo:true
},"a")

// Declaring Variables
const smallCursor = document.querySelector(".small-cursor")
const cursor = document.querySelector(".cursor")
const heroDiv = document.querySelector(".hero__div")
const headerLeft = document.querySelector(".header__left")
const headerLinks = Array.from(document.querySelectorAll(".header__right__links"))

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

// headerLeft.addEventListener("mousemove",makeMagnet)

// Cursor Related
window.addEventListener("mousemove",updateCursorPosition)
window.addEventListener("mouseout",removeCursor)
window.addEventListener("click",clickCursor)
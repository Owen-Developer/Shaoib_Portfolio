const linkHovers = document.querySelectorAll(".link-box");
const navLinks = document.querySelectorAll(".nav-links");
const navArrows = document.querySelectorAll(".nav-arrows");
const homeFlowImg = document.querySelectorAll(".homeflow-img");
const contFlowImg = document.querySelectorAll(".cflow-img");
const circles = document.querySelectorAll(".circle");
const startAnimationElements = document.querySelectorAll(".starter");
const scrollTargets = document.querySelectorAll(".scroll-target");
const projContainer = document.querySelectorAll(".project-container");
const projImgContainer = document.querySelectorAll(".proj-img-container");
const projContBox = document.querySelectorAll(".proj-cont-box");
const stackWrappers = document.querySelectorAll(".stack-wrapper");
const stackArrows = document.querySelectorAll(".stack-arrows");
const flowImgs = document.querySelectorAll(".homeflow-img, .cflow-img");
const menuDropdown = document.querySelector(".menu-dropdown");
const plusContainer = document.querySelector(".plus-container");
const horiLine = document.querySelector(".hori-line");
const vertLine = document.querySelector(".vert-line");
menuDropdown.style.display = "none";

let flowReg = true;
let mFlowReg = false;
let menuClosed = true;
let desCycle = "middle";
let mobCycle = "middle";
let starterType = "";

function setStarterElements(){
    if(window.innerWidth > 1451){
        starterType = ".o-starter";
    } else if(window.innerWidth > 850){
        starterType = ".two-starter";
    } else {
        starterType = ".thr-starter";
    }

    document.querySelectorAll(".o-starter, .two-starter, .thr-starter").forEach(element => {
        if(!element.classList.contains(starterType.slice(1))){
            element.classList.remove("o-starter");
            element.classList.remove("two-starter");
            element.classList.remove("thr-starter");
        }
    });
}
setStarterElements();

setTimeout(() => {
    document.querySelectorAll(starterType).forEach((element, idx) => {
        let animationDelay = 250;
        setTimeout(() => {
            element.style.top = "0px";
            element.style.opacity = "1";
        }, animationDelay * idx + 1);
    });
}, 500);

linkHovers.forEach((link, idx) => {
    link.addEventListener("mouseover", () => {
        navLinks[idx].style.top = "45px";
        navLinks[idx].style.color = "white";
        navArrows[idx].style.top = "45px";
        navArrows[idx].style.opacity = "1";
        navArrows[idx].style.transform = "rotate(-45deg)";
    });
});
linkHovers.forEach((link, idx) => {
    link.addEventListener("mouseout", () => {
        navLinks[idx].style.color = "var(--light-grey-95)";
        navLinks[idx].style.top = "0px";
        navArrows[idx].style.top = "0px"; 
        navArrows[idx].style.opacity = "0";
        navArrows[idx].style.transform = "rotate(0deg)";
    });
});

// image background flow
//resetImgs();
//setInterval(resetImgs, 25020);
function resetImgs(){
    let responseAllowance = 0;
    if(window.innerWidth < 900 && window.innerWidth > 680){
        responseAllowance = 400;
    }
    // back to 0;
    // up to top;

    if(flowReg == false){
        flowImgs.forEach((img, idx) => {
            if((idx < 3 || idx > 5) && (idx < 12 || idx > 14)){
                img.style.top = "0px";
            }
            else{
                img.style.top = -1000 + responseAllowance + "px";
            }
        });
        flowReg = true;
    }

    else{
        setTimeout(() => {
            flowImgs.forEach((img, idx) => {
                if((idx < 3 || idx > 5) && (idx < 12 || idx > 14)){
                    img.style.top = -1200 + responseAllowance + "px";
                } else {
                    img.style.top = "0px";
                }
            });
        }, 20);
        flowReg = false;
    }
}

// circle object movement
function circleMovement(array, cycle){
    setInterval(() => {
        array.forEach((circle, idx) => {if(idx > 0){
            if(cycle == "middle"){
                circle.style.top = "0px";
                circle.style.left = "7px";
            } else if(cycle == "right"){
            circle.style.top = "-7px";
            circle.style.left = "0px";
        } else if(cycle == "top"){
            circle.style.top = "0px";
            circle.style.left = "-7px";
        } else if(cycle == "left"){
            circle.style.top = "7px";
            circle.style.left = "0px";
        } else if(cycle == "low"){
            circle.style.top = "0px";
            circle.style.left = "0px";
        }
    }});
    if(cycle == "middle"){
        cycle = "right";
    } else if(cycle == "right"){
        cycle = "top";
    } else if(cycle == "top"){
        cycle = "left";
    } else if(cycle == "left"){
        cycle = "low";
    } else if(cycle == "low"){
        cycle = "middle";
    }
}, 800);
}
circleMovement(circles, desCycle);
circleMovement(document.querySelectorAll(".m-circle"), mobCycle);

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.top = "0px";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4,
});
  
// Start observing each target element
scrollTargets.forEach(target => {
observer.observe(target);
});

projContainer.forEach((container, idx) => {
    container.addEventListener("mouseover", () => {
        projContBox[idx].style.border = "1px solid grey";
        projImgContainer[idx].style.transform = "scale(0.96)";
    });
});
projContainer.forEach((container, idx) => {
    container.addEventListener("mouseout", () => {
        projContBox[idx].style.border = "1px solid transparent";
        projImgContainer[idx].style.transform = "scale(1)";
    });
});
stackWrappers.forEach((wrapper, idx) => {
    wrapper.addEventListener("mouseover", () => {
        wrapper.style.backgroundColor = "hsl(1, 7%, 7%)";
        stackArrows[idx].style.transform = "rotate(-45deg)";
    });
});
stackWrappers.forEach((wrapper, idx) => {
    wrapper.addEventListener("mouseout", () => {
        wrapper.style.backgroundColor = "hsl(240, 6%, 7%)";
        stackArrows[idx].style.transform = "rotate(0deg)";
    });
});
function toggleMenu(){
    if(menuClosed){
        menuDropdown.style.display = "none";
        menuDropdown.style.display = "block";
        menuDropdown.offsetWidth;
        menuDropdown.style.opacity = "1";
        menuClosed = false;
        plusContainer.style.transform = "rotate(180deg)";
        vertLine.style.opacity = "0";
    } else {
        menuDropdown.style.opacity = "0";
        menuClosed = true;
        plusContainer.style.transform = "rotate(0deg)";
        vertLine.style.opacity = "1";
        setTimeout(() => {
            menuDropdown.style.display = "none";
        }, 400);
    }
}
function aboutGlow(){
    let shaded = false;
    let pause = 750;
    setInterval(() => {
        let aboutText = document.querySelector(".about-shaded");
        if(shaded){
            aboutText.style.opacity = "0.65";
            shaded = false;
        } else {
            aboutText.style.opacity = "0.05";
            shaded = true;
        }
    }, pause);
}
aboutGlow();
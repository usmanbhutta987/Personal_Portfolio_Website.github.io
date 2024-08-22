let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate the current word's letters to disappear
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // After the animation, hide the current word
    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, currentWord.children.length * 80);

    // Animate the next word's letters to appear
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    // Update the current word index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);






const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));  // Total number of dots
    const marked = parseInt(elem.getAttribute("data-percent"));  // Percentage to fill the circle
    const percent = Math.floor(dots * marked / 100);  // Calculate number of dots to mark
    const rotate = 360 / dots;  // Calculate rotation angle per dot

    let points = "";

    // Create dots and apply rotation and marking based on percentage
    for (let i = 0; i < dots; i++) {
        const isMarked = i < percent ? 'marked' : '';  // Check if the point should be marked
        points += `<div class="point ${isMarked}" style="--i:${i}; --rot:${rotate * i}deg;"></div>`;
    }

    elem.innerHTML = points;
});



// mix it up portfolio section

var mixer = mixitup('.portfolio-gallery');



// Active Menu Links code 

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll" ,activeMenu);





// sticky navbar code 

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})



// toggle icon navbar  ///////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}




///////////////////
// parallax /////////////////




const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");

        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));
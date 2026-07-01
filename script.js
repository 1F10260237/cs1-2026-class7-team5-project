function openSection(id, button) {

    const current = document.querySelector(".page.open");

    current.classList.add("fade-out");

    setTimeout(() => {

        current.classList.remove("open","fade-out");

        const next = document.getElementById(id);

        next.classList.add("open");
        next.classList.add("fade-in");

    },200);

    sidebarButtonActive(button);

    if(id === "top" || id === "detail"){
        closeAccordionMenu();
    }

}

function closeSection() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function openAccordionMenu(button){
    const menu = document.querySelector(".accordion-menu");

    menu.classList.toggle("open");

    button.querySelector(".arrow").classList.toggle("rotate");
}

function closeAccordionMenu() {
    const menu = document.querySelector(".accordion-menu");
    const arrow = document.querySelector(".arrow");

    menu.classList.remove("open");
    arrow.classList.remove("rotate");
}

function sidebarButtonActive(button){

    document.querySelectorAll(".sidebar-btn,.accordion-item").forEach(btn=>{
            btn.classList.remove("active");
        });

    button.classList.add("active");
}

let current = 0;
function showSlide(index){

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function changeSlide(num){

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    current += num;

    if(current >= slides.length){
        current = 0;
    }

    if(current < 0){
        current = slides.length-1;
    }

    showSlide(current);

}
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
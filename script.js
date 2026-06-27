function removeOpen() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function closeAccordionMenu() {
    const menu = document.querySelector(".accordion-menu");
    const arrow = document.querySelector(".sidebar-btn .material-symbols-outlined");

    menu.classList.remove("open");
    arrow.classList.remove("rotate");
}

function openSection(id,button) {
    removeOpen();

    const top = document.getElementById(id);
    top.classList.add("open");

    sidebarButtonActive(button);

    if (id === "top" || id === "detail") {
    closeAccordionMenu();
    };
}

function sidebarButtonActive(button){

    document.querySelectorAll(".sidebar-btn,.accordion-item").forEach(btn=>{
            btn.classList.remove("active");
        });

    button.classList.add("active");
}

function openAccordionMenu(button){
    const menu = document.querySelector(".accordion-menu");

    menu.classList.toggle("open");

    button.querySelector(".arrow").classList.toggle("rotate");
}
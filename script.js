function removeOpen() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function closeAccordion() {
    connst 
}

function openSection(id,button) {
    removeOpen();

    const top = document.getElementById(id);
    top.classList.add("open");

    sidebarButtonActive(button);
}

function sidebarButtonActive(button) {
    document.querySelectorAll(".sidebar-btn, .accordion-item").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

function toggleAccordion() {
    document.getElementById("accordion-menu").classList.toggle("open");

    document.getElementById("accordion-icon").classList.toggle("open");
}
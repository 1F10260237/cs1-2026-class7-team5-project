function removeOpen() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function openSection(id,button) {
    removeOpen();

    const top = document.getElementById(id);
    top.classList.add("open");

    sidebarButtonActive(button);
}

function sidebarButtonActive(button) {
    document.querySelectorAll(".sidebar-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}

function toggleAccordion() {
    document.getElementById("accordion-menu").classList.toggle("open");
}
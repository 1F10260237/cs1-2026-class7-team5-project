function removeOpen() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function openTop(button) {
    removeOpen();

    const top = document.getElementById("top");
    top.classList.add("open");

    sidebarButtonActive(button);
}

function openDetail(button) {
    removeOpen();

    const detail = document.getElementById("detail");
    detail.classList.add("open");

    sidebarButtonActive(button);
}

function sidebarButtonActive(button) {
    document.querySelectorAll(".sidebar-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}
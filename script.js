function removeOpen() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("open");
    });
}

function openTop() {
    removeOpen();

    const top = document.getElementById("top");
    top.classList.add("open");
}

function openDetail() {
    removeOpen();

    const detail = document.getElementById("detail");
    detail.classList.add("open");
}
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-list");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 900) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        let imgSrc = event.target.src.replace("-sm.jpeg", "-full.jpeg"); 
        let imgAlt = event.target.alt;
        
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, imgAlt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

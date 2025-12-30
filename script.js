// 뮤직비디오 선택
document.getElementById("mv-select").addEventListener("change", function() {
    const videoId = this.value;
    const iframe = document.getElementById("mv-frame");
    iframe.src = "https://www.youtube.com/embed/" + videoId;
});

// 사이드바 서브메뉴 토글
const submenuButtons = document.querySelectorAll(".submenu-btn");

submenuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const submenu = btn.nextElementSibling;
        const expanded = btn.getAttribute("aria-expanded") === "true";

        btn.setAttribute("aria-expanded", !expanded);
        submenu.style.display = expanded ? "none" : "block";
    });
});

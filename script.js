// 뮤직비디오 선택
document.getElementById("mv-select").addEventListener("change", function() {
    const videoId = this.value;
    const iframe = document.getElementById("mv-frame");
    iframe.src = "https://www.youtube.com/embed/" + videoId;
});

// 1. 햄버거 버튼 클릭 시 사이드바 열기/닫기
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});

// 2. 서브메뉴 토글
const submenuButtons = document.querySelectorAll(".submenu-btn");

submenuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const submenu = btn.nextElementSibling;

        // 1. 다른 모든 서브메뉴 닫기
        document.querySelectorAll(".submenu").forEach(sm => {
            if (sm !== submenu) {
                sm.classList.remove("show");
                sm.previousElementSibling.setAttribute("aria-expanded", false);
            }
        });

        // 2. 클릭한 서브메뉴 토글
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        submenu.classList.toggle("show");
    });
});

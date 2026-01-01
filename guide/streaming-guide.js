document.addEventListener("DOMContentLoaded", () => {
const menuBtn = document.querySelector('.menu-btn');       // 햄버거 버튼
const sidebar = document.querySelector('.sidebar');        // 사이드바
const submenuButtons = document.querySelectorAll('.submenu-btn'); // 서브메뉴 버튼
const submenus = document.querySelectorAll('.submenu');    // 모든 서브메뉴

// 0️⃣ 페이지 로드 시 모든 서브메뉴 숨기기
submenus.forEach(sm => sm.classList.remove("show"));
submenuButtons.forEach(btn => btn.setAttribute("aria-expanded", false));

// 1️⃣ 메뉴 버튼 클릭 → 사이드바 열기/닫기
menuBtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
    e.stopPropagation();

    // 사이드바 열 때 모든 서브메뉴 닫기
    if (sidebar.classList.contains("active")) {
        submenus.forEach(sm => sm.classList.remove("show"));
        submenuButtons.forEach(btn => btn.setAttribute("aria-expanded", false));
    }
});

// 2️⃣ 사이드바 외부 클릭 → 닫기
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});

// 3️⃣ 서브메뉴 버튼 클릭 → 토글
submenuButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // 클릭 이벤트가 document까지 올라가는 걸 막음
        const submenu = btn.nextElementSibling;

        // 다른 모든 서브메뉴 닫기
        submenus.forEach(sm => {
            if (sm !== submenu) {
                sm.classList.remove("show");
                sm.previousElementSibling.setAttribute("aria-expanded", false);
            }
        });

        // 클릭한 서브메뉴 토글
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        submenu.classList.toggle("show");
    });
});

<script>
const area = document.querySelector('.content-area');
const buttons = document.querySelectorAll('.sub-list button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // data-images 있으면 여러 이미지, 없으면 단일 이미지
    area.innerHTML = ''; // 기존 내용 초기화

    if (btn.dataset.images) {
      const files = btn.dataset.images.split(',');
      files.forEach(file => {
        const img = document.createElement('img');
        img.src = 'guide/images/' + file.trim();
        img.alt = '가이드 이미지';
        area.appendChild(img);
      });
    } else if (btn.dataset.image) {
      const img = document.createElement('img');
      img.src = btn.dataset.image;
      img.alt = '가이드 이미지';
      area.appendChild(img);
    }
  });
});
</script>

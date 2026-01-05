document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const submenuButtons = document.querySelectorAll('.submenu-btn');
  const submenus = document.querySelectorAll('.submenu');
  const area = document.querySelector('.content-area');
  const buttons = document.querySelectorAll('.sub-list button');

  // 초기 서브메뉴 숨김
  submenus.forEach(sm => sm.classList.remove("show"));
  submenuButtons.forEach(btn => btn.setAttribute("aria-expanded", false));

  // 햄버거 버튼
  menuBtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("active");
    e.stopPropagation();
  });

  // 외부 클릭 → 사이드바 닫기
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });

  // 서브메뉴 버튼 토글
  submenuButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const submenu = btn.nextElementSibling;
      submenus.forEach(sm => {
        if (sm !== submenu) {
          sm.classList.remove("show");
          sm.previousElementSibling.setAttribute("aria-expanded", false);
        }
      });
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !expanded);
      submenu.classList.toggle("show");
    });
  });

  // 하위목록 클릭 → 이미지 변경
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      area.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.className = 'image-wrapper';

      if (btn.dataset.images) {
        const files = btn.dataset.images.split(',');
        files.forEach(file => {
          const img = document.createElement('img');
          img.src = file.trim();
          img.alt = '가이드 이미지';
          wrapper.appendChild(img);
        });
      }

      if (btn.dataset.image) {
        const img = document.createElement('img');
        img.src = btn.dataset.image;
        img.alt = '가이드 이미지';
        wrapper.appendChild(img);
      }

      area.appendChild(wrapper);
    });
  });

  // 메인 메뉴 버튼 클릭 → 강조선
const mainItems = document.querySelectorAll('.menu-bar .main-item');

mainItems.forEach(item => {
  item.addEventListener('click', () => {
    // 모든 버튼에서 active 제거
    mainItems.forEach(i => i.classList.remove('active'));

    // 클릭한 버튼에 active 추가
    item.classList.add('active');
  });
});

  const header = document.querySelector('header');
  const menuBar = document.querySelector('.menu-bar');

  const headerHeight = header.offsetHeight;
  const menuStartY = menuBar.offsetTop;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY >= menuStartY - headerHeight) {
      // 헤더에 닿으면 멈춤
      menuBar.style.position = 'fixed';
      menuBar.style.top = `${headerHeight}px`;
      menuBar.style.left = '0';
      menuBar.style.width = '100%';
      menuBar.style.zIndex = '900';
    } else {
      // 원래 위치로 복귀
      menuBar.style.position = 'relative';
      menuBar.style.top = '0';
    }
  });

});

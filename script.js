// 뮤직비디오 선택
document.getElementById("mv-select").addEventListener("change", function() {
    const videoId = this.value;
    const iframe = document.getElementById("mv-frame");
    iframe.src = "https://www.youtube.com/embed/" + videoId;
});

// 사이드바 서브메뉴 토글
const submenuItems = document.querySelectorAll('.has-submenu');

submenuItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const submenu = item.querySelector('.submenu');

    if (item.classList.contains('active')) {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    } else {
      submenu.style.maxHeight = 0;
    }
  });
});


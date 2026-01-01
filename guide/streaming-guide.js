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

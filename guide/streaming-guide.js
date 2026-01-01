<script>
  const buttons = document.querySelectorAll('.sub-list button');
  const image = document.getElementById('contentImage');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const newImage = button.dataset.image;
      image.src = newImage;
    });
  });
</script>

<script>
  const area = document.getElementById('contentArea');
  const buttons = document.querySelectorAll('[data-images]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      area.innerHTML = '';

      const files = btn.dataset.images.split(',');

      files.forEach(file => {
        const img = document.createElement('img');
        img.src = 'images/' + file;
        img.alt = '가이드 이미지';
        area.appendChild(img);
      });
    });
  });
</script>

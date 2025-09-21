const img = document.getElementById('musicImg');
const audio = document.getElementById('music');

img.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    img.classList.remove('rotating-return');
    img.classList.add('rotating-slower');
  } else {
    audio.pause();
    audio.currentTime = 0;
    img.classList.remove('rotating-slower');
    img.classList.add('rotating-return');
  }
});

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  img.classList.remove('rotating-slower');
  img.classList.add('rotating-return');
});
const playButton = document.querySelector('.about__play');

playButton.addEventListener('click', () => {
  const video = document.querySelector('.about__video');
  if (!video.classList.contains('about__video--active')) {
    video.classList.add('about__video--active');
  } else {
    video.classList.remove('about__video--active');
  }
});

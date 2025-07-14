document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".gallery-grid video");

  videos.forEach((video) => {
    video.playbackRate = 0.5; // zpomalí přehrávání na polovinu
  });
});

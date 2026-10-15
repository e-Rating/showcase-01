/* Scale a desktop-size slide as one unit, like a presentation viewer. */
(() => {
  const stage = document.querySelector('.stage-outer');
  const viewport = document.getElementById('stage-viewport');
  const track = document.getElementById('slides-track');
  if (!stage || !viewport || !track) return;

  function fitSlides() {
    const style = getComputedStyle(stage);
    const width = stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const height = stage.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
    const scale = Math.max(0, Math.min(width / 1440, height / 810, 1));
    viewport.style.width = `${1440 * scale}px`;
    viewport.style.height = `${810 * scale}px`;
    track.style.transform = `scale(${scale})`;
  }

  new ResizeObserver(fitSlides).observe(stage);
  window.addEventListener('resize', fitSlides);
  document.addEventListener('fullscreenchange', fitSlides);
  fitSlides();
})();

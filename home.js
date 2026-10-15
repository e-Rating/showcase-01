// Preserve existing links to specific slides after introducing the landing page.
if (/^#\/slide\/\d+$/.test(window.location.hash)) {
  window.location.replace('presentation.html' + window.location.hash);
}

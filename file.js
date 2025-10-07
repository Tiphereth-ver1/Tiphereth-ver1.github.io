function showPage(pageId) {
  const pages = document.querySelectorAll('.page'); // all sections
  pages.forEach(page => page.style.display = 'none'); // hide all
  document.getElementById(pageId).style.display = 'block'; // show chosen
}

document.getElementById("nav-placeholder").innerHTML = fetch('/components/nav.html')
  .then(response => response.text())
  .then(html => {
    console.log("Navigation Bar")
    document.getElementById("nav-placeholder").innerHTML = html;

    const mobileMenu = document.getElementById('nav-icon3');
    const navLinks = document.getElementById('nav-links');
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('open')
      navLinks.classList.toggle('active');
    });
  });
document.getElementById("footer-placeholder").innerHTML = fetch('/components/footer.html')
  .then(response => response.text())
  .then(html => {
    console.log("Footer Bar")
    document.getElementById("footer-placeholder").innerHTML = html;
});



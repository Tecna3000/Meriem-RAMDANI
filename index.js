const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')


for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
  if (video1.style.display === 'block') {
    video1.style.display = 'none';
    video2.style.display = 'block';
  } else {
    video1.style.display = 'block';
    video2.style.display = 'none';
  }
});
const header = document.querySelector('.header');

const scrollUpAmount = 60; 
window.addEventListener('scroll', () => {
  if (window.scrollY > scrollUpAmount) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

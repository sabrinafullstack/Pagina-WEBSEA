const abrirMenuBtn = document.querySelector('.abrir-menu');
const navBar = document.getElementById('nav-bar');

// Menu Hamburger
abrirMenuBtn.addEventListener('click', ()=>{
    abrirMenuBtn.classList.toggle('open')
    navBar.classList.toggle('active')
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('#nav-bar') && !event.target.closest('.abrir-menu')){
            navBar.classList.remove('active');
            abrirMenuBtn.classList.remove('open');
    }
})

// JavaScript
const btnTopo = document.getElementById("voltar-topo");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Ano atualizado no footer
document.getElementById('ano').textContent = new Date().getFullYear();


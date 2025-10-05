// ===== Scroll suave para painéis =====
function smoothScrollTo(elementId) {
  const el = document.getElementById(elementId);
  if(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== Animação de entrada dos cards =====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 100 * index);
  });
});

// ===== Botão de Configurações =====
const configBtn = document.getElementById("configBtn");
configBtn.addEventListener("click", () => {
  alert("Configurações ainda não disponíveis, mas em breve!");
  configBtn.style.transform = "rotate(360deg)";
  setTimeout(() => {
    configBtn.style.transform = "rotate(0deg)";
  }, 600);
});

// ===== Efeito hover nos botões grandes =====
const bigBtns = document.querySelectorAll(".big-btn");
bigBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 20px 50px rgba(0,200,255,0.3)";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "0 8px 30px rgba(0,200,255,0.06)";
    btn.style.transform = "scale(1)";
  });
});

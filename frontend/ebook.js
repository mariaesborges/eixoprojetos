/* ── EBOOKS — carrossel e FAQ ───────────────────────────── */

var ebState = {};

function ebGoTo(id, n) {
  var wrap = document.getElementById(id);
  if (!wrap) return;
  var track = wrap.querySelector('.eb-carousel-track');
  var dots  = wrap.querySelectorAll('.eb-dot');
  var total = track.children.length;
  ebState[id] = ((n % total) + total) % total;
  track.style.transform = 'translateX(-' + (ebState[id] * 100) + '%)';
  dots.forEach(function(d, i) { d.classList.toggle('active', i === ebState[id]); });
}
function ebPrev(id) { ebGoTo(id, (ebState[id] || 0) - 1); }
function ebNext(id) { ebGoTo(id, (ebState[id] || 0) + 1); }

/* ── FAQ — função global, acessível pelo onclick do HTML ── */
function toggleFaq(btn) {
  var item   = btn.closest('.faq-item');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

/* ── Init carrossel ────────────────────────────────────── */
function initCarousels() {
  document.querySelectorAll('.eb-carousel').forEach(function(wrap) {
    ebState[wrap.id] = 0;
    wrap.querySelectorAll('.eb-dot').forEach(function(dot, i) {
      dot.onclick = function() { ebGoTo(wrap.id, i); };
    });
    setInterval(function() { ebNext(wrap.id); }, 5000);
  });
}

/* Garante execução após tudo carregar */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousels);
} else {
  initCarousels();
}
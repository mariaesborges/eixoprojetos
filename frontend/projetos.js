/* ── PROJETOS — filtro de categorias ────────────────────── */

function filterProj(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(c => {
    c.style.display = (cat === 'todos' || c.dataset.cat === cat) ? '' : 'none';
  });
}
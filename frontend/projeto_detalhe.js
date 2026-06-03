/* ── PROJETO DETALHE ────────────────────────────────────── */

(function() {
  var params  = new URLSearchParams(window.location.search);
  var idx     = parseInt(params.get('id'));
  if (isNaN(idx)) idx = 0;
  var p       = projetos[idx];
  if (!p) return;

  /* ── Título da aba ───────────────────────────────────── */
  document.title = p.title + ' — EIXO Projetos';

  /* ── Meta bar ────────────────────────────────────────── */
  document.getElementById('pd-cat').textContent   = p.cat;
  document.getElementById('pd-title').textContent = p.title;
  document.getElementById('pd-loc').textContent   = p.loc;
  document.getElementById('pd-year').textContent  = p.year;

  /* ── Hero: carrossel ou imagem única ─────────────────── */
  var hero    = document.getElementById('pd-hero');
  var overlay = hero.querySelector('.proj-detail-hero-overlay');

  if (p.imgs && p.imgs.length > 1) {
    /* Carrossel */
    var wrap = document.createElement('div');
    wrap.className = 'carousel-wrap';

    var track = document.createElement('div');
    track.className = 'carousel-track';
    for (var i = 0; i < p.imgs.length; i++) {
      var img = document.createElement('img');
      img.src = p.imgs[i];
      img.alt = p.title;
      track.appendChild(img);
    }
    wrap.appendChild(track);

    var btnPrev = document.createElement('button');
    btnPrev.className   = 'carousel-btn prev';
    btnPrev.innerHTML   = '&#8592;';
    var btnNext = document.createElement('button');
    btnNext.className   = 'carousel-btn next';
    btnNext.innerHTML   = '&#8594;';
    wrap.appendChild(btnPrev);
    wrap.appendChild(btnNext);

    var dotsEl = document.createElement('div');
    dotsEl.className = 'carousel-dots';
    for (var j = 0; j < p.imgs.length; j++) {
      (function(idx2) {
        var d = document.createElement('button');
        d.className = 'carousel-dot' + (idx2 === 0 ? ' active' : '');
        d.onclick = function() { goTo(idx2); };
        dotsEl.appendChild(d);
      })(j);
    }
    wrap.appendChild(dotsEl);

    var counter = document.createElement('div');
    counter.className = 'carousel-counter';
    wrap.appendChild(counter);

    var current = 0;
    function goTo(n) {
      current = ((n % p.imgs.length) + p.imgs.length) % p.imgs.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      var allDots = dotsEl.querySelectorAll('.carousel-dot');
      for (var k = 0; k < allDots.length; k++) {
        allDots[k].classList.toggle('active', k === current);
      }
      counter.textContent = (current + 1) + ' / ' + p.imgs.length;
    }
    btnPrev.onclick = function() { goTo(current - 1); };
    btnNext.onclick = function() { goTo(current + 1); };
    setInterval(function() { goTo(current + 1); }, 5000);
    goTo(0);

    hero.insertBefore(wrap, overlay);

  } else {
    /* Imagem única */
    var singleImg = document.createElement('img');
    singleImg.className = 'single-img';
    singleImg.src = (p.imgs && p.imgs[0]) ? p.imgs[0] : p.img;
    singleImg.alt = p.title;
    hero.insertBefore(singleImg, overlay);
  }

  /* ── Conteúdo principal ──────────────────────────────── */
  var html = '<p>' + p.desc + '</p><h2>Escopo de Entrega</h2><ul>';
  for (var d = 0; d < p.delivs.length; d++) {
    html += '<li>' + p.delivs[d] + '</li>';
  }
  html += '</ul>';
  if (p.site) {
    html += '<p class="proj-site-link">Acompanhe mais detalhes do projeto no site: ' +
     '<a href="' + p.site + '" target="_blank" rel="noopener">' + p.site + '</a></p>';
  }

  document.getElementById('pd-content').innerHTML = html;

  /* ── Sidebar ─────────────────────────────────────────── */
  var sideHtml = '';
  for (var s = 0; s < p.sidebar.length; s++) {
    sideHtml +=
      '<div class="proj-sidebar-row">' +
        '<span class="proj-sidebar-label">' + p.sidebar[s][0] + '</span>' +
        '<span class="proj-sidebar-val">'   + p.sidebar[s][1] + '</span>' +
      '</div>';
  }
  document.getElementById('pd-sidebar').innerHTML = sideHtml;

})();
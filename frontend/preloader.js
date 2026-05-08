(function () {

  if (sessionStorage.getItem('eixo_visited')) return;
  sessionStorage.setItem('eixo_visited', '1');

  const el = document.createElement('div');
  el.id = 'eixo-preloader';
  el.innerHTML = `
    <div id="eixo-pre-inner">
      <svg id="eixo-pre-svg" viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg">

        <!-- Grade 9x9 — quadrado perfeito 144x144px centralizado -->
        <g id="pre-grid">
          <line x1="138" y1="8"   x2="138" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="154" y1="8"   x2="154" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="170" y1="8"   x2="170" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="186" y1="8"   x2="186" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="202" y1="8"   x2="202" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="218" y1="8"   x2="218" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="234" y1="8"   x2="234" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="250" y1="8"   x2="250" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="266" y1="8"   x2="266" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="282" y1="8"   x2="282" y2="152" stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="8"   x2="282" y2="8"   stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="24"  x2="282" y2="24"  stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="40"  x2="282" y2="40"  stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="56"  x2="282" y2="56"  stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="72"  x2="282" y2="72"  stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="88"  x2="282" y2="88"  stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="104" x2="282" y2="104" stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="120" x2="282" y2="120" stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="136" x2="282" y2="136" stroke="white" stroke-width="0.6"/>
          <line x1="138" y1="152" x2="282" y2="152" stroke="white" stroke-width="0.6"/>
        </g>

        <!-- E -->
        <line id="e-v"  x1="30"  y1="178" x2="30"  y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
        <line id="e-t"  x1="30"  y1="178" x2="105" y2="178" stroke="white" stroke-width="3" stroke-linecap="square"/>
        <line id="e-m"  x1="30"  y1="228" x2="90"  y2="228" stroke="white" stroke-width="3" stroke-linecap="square"/>
        <line id="e-b"  x1="30"  y1="278" x2="105" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>

        <!-- I -->
        <line id="i-v"  x1="148" y1="178" x2="148" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>

        <!-- X -->
        <line id="x-d1" x1="170" y1="178" x2="250" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
        <line id="x-d2" x1="250" y1="178" x2="170" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>

        <!-- O -->
        <circle id="o-c" cx="322" cy="228" r="52" stroke="white" stroke-width="3" fill="none"/>

      </svg>
      <div id="eixo-pre-word">PROJETOS</div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #eixo-preloader {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: #080808;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #eixo-pre-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }
    #eixo-pre-svg {
      width: min(68vw, 300px);
      height: auto;
    }
    /* Grade — fade in via classe */
    #pre-grid {
      opacity: 0;
      transition: opacity 0.45s ease;
    }
    #pre-grid.vis { opacity: 0.72; }
    /* Letras — dashoffset draw */
    #e-v, #e-t, #e-m, #e-b, #i-v, #x-d1, #x-d2, #o-c {
      stroke-dasharray: 600;
      stroke-dashoffset: 600;
    }
    /* Wordmark */
    #eixo-pre-word {
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 0.65em;
      padding-left: 0.65em;
      color: transparent;
      text-transform: uppercase;
      transition: color 0.5s ease;
    }
    /* Saída */
    #eixo-preloader.exit {
      transform: translateY(-100%);
      transition: transform 0.6s cubic-bezier(0.77, 0, 0.18, 1);
    }
    body.preloading { overflow: hidden; }
  `;

  document.head.appendChild(style);
  document.body.classList.add('preloading');
  document.body.appendChild(el);

  function draw(id, delay, dur) {
    setTimeout(function () {
      var e = document.getElementById(id);
      if (!e) return;
      var len = e.getTotalLength ? e.getTotalLength() : 300;
      e.style.strokeDasharray  = len;
      e.style.strokeDashoffset = len;
      e.getBoundingClientRect(); // força reflow
      e.style.transition = 'stroke-dashoffset ' + dur + 'ms cubic-bezier(0.4,0,0.2,1)';
      e.style.strokeDashoffset = '0';
    }, delay);
  }

  window.addEventListener('DOMContentLoaded', function () {
    var s = 60;   // stagger ms
    var d = 280;  // duração draw

    // Grade aparece primeiro
    setTimeout(function () {
      var g = document.getElementById('pre-grid');
      if (g) g.classList.add('vis');
    }, 60);

    // Letras em cascata
    draw('e-v',  s * 1, d);
    draw('e-t',  s * 2, d);
    draw('e-m',  s * 3, d);
    draw('e-b',  s * 4, d);
    draw('i-v',  s * 5, d);
    draw('x-d1', s * 6, d);
    draw('x-d2', s * 7, d);
    draw('o-c',  s * 8, d + 80);

    // Wordmark
    setTimeout(function () {
      var w = document.getElementById('eixo-pre-word');
      if (w) w.style.color = 'rgba(255,255,255,0.38)';
    }, s * 8 + d + 140);

    // Saída
    var exitAt = s * 8 + d + 750;
    setTimeout(function () {
      el.classList.add('exit');
      document.body.classList.remove('preloading');
    }, exitAt);
    setTimeout(function () {
      el.remove();
      style.remove();
    }, exitAt + 680);
  });

})();
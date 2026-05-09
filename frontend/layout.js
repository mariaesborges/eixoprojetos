const LOGO_SVG = `
<svg style="display:none">
  <symbol id="eixo-logo" viewBox="0 0 420 300">
    <!-- Grade 9x9 perfeita -->
    <g opacity="0.72">
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
    <line x1="30"  y1="178" x2="30"  y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <line x1="30"  y1="178" x2="105" y2="178" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <line x1="30"  y1="228" x2="90"  y2="228" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <line x1="30"  y1="278" x2="105" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <!-- I -->
    <line x1="148" y1="178" x2="148" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <!-- X -->
    <line x1="170" y1="178" x2="250" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <line x1="250" y1="178" x2="170" y2="278" stroke="white" stroke-width="3" stroke-linecap="square"/>
    <!-- O -->
    <circle cx="322" cy="228" r="52" stroke="white" stroke-width="3" fill="none"/>
  </symbol>
</svg>`;

const NAV_PAGES = [
  { id:'inicio',   label:'Início',   href:'index.html'    },
  { id:'sobre',    label:'Sobre',    href:'sobre.html'    },
  { id:'servicos', label:'Serviços', href:'servicos.html' },
  { id:'projetos', label:'Projetos', href:'projetos.html' },
  { id:'ebooks',   label:'eBooks',   href:'ebooks.html'   },
  { id:'contato',  label:'Contato',  href:'contato.html'  },
];

function renderNav(activePage) {
  const links = NAV_PAGES.map(p =>
    `<li><a href="${p.href}"${activePage === p.id ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');
  return `${LOGO_SVG}
    <nav>
      <div class="nav-inner">
        <a class="logo-svg" href="index.html">
          <svg height="36" width="auto" viewBox="0 0 420 300"><use href="#eixo-logo"/></svg>
        </a>
        <ul class="nav-links">${links}</ul>
      </div>
    </nav>`;
}

function renderFooter() {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="logo-svg" href="index.html">
            <svg viewBox="0 0 420 300"><use href="#eixo-logo"/></svg>
          </a>
          <p>Soluções em engenharia e consultoria com excelência técnica e compromisso com a inovação. Transformamos desafios em projetos de sucesso.</p>
        </div>
        <div class="footer-col">
          <h5>Links Rápidos</h5>
          <a href="sobre.html">Sobre Nós</a>
          <a href="servicos.html">Serviços</a>
          <a href="projetos.html">Projetos</a>
          <a href="contato.html">Contato</a>
        </div>
        <div class="footer-col">
          <h5>Contato</h5>
          <div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 4 10 9 10-9"/></svg>eixo@doriquinho.com.br</div>
          <div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1-.23 1.1.4 2.3.6 3.6.6.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C6.82 21 3 17.18 3 12.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1"/></svg>(37) 99846-1676</div>
          <div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>São Roque de Minas, MG</div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>EIXO Projetos &copy; 2026 Todos os direitos reservados | Desenvolvido por Maria Eduarda Borges</p>
        <div class="social-links">
          <a href="https://wa.me/5537998461673" target="_blank" rel="noopener">WhatsApp</a>
          <a href="https://www.instagram.com/eixoprojetos_/" target="_blank" rel="noopener">Instagram</a>
          <a href="http://www.youtube.com/@EixoProjetos" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.facebook.com/profile.php?id=61561480223787&locale=pt_BR" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.tiktok.com/@eixoprojetos" target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>
    </footer>`;
}

document.getElementById('nav-placeholder').innerHTML    = renderNav(window.ACTIVE_PAGE || 'inicio');
document.getElementById('footer-placeholder').innerHTML = renderFooter();
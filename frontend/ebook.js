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

function toggleFaq(item) {
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('open');
    const content = item.querySelector('.faq-a');
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function initCarousels() {
  document.querySelectorAll('.eb-carousel').forEach(function(wrap) {
    ebState[wrap.id] = 0;
    wrap.querySelectorAll('.eb-dot').forEach(function(dot, i) {
      dot.onclick = function() { ebGoTo(wrap.id, i); };
    });
    setInterval(function() { ebNext(wrap.id); }, 5000);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousels);
} else {
  initCarousels();
}
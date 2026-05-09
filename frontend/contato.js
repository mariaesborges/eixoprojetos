/* ── CONTATO — envio via WhatsApp ───────────────────────── */

function enviarWhatsApp() {
  var nome     = document.getElementById('f-nome').value.trim();
  var email    = document.getElementById('f-email').value.trim();
  var tel      = document.getElementById('f-tel').value.trim();
  var empresa  = document.getElementById('f-empresa').value.trim();
  var assunto  = document.getElementById('f-assunto').value.trim();
  var mensagem = document.getElementById('f-mensagem').value.trim();

  if (!nome || !email || !tel || !assunto || !mensagem) {
    alert('Por favor, preencha todos os campos obrigatórios (*).');
    return;
  }

  var texto =
    '📋 *Nova mensagem via site EIXO Projetos*\n\n' +
    '👤 *Nome:* '     + nome     + '\n' +
    '📧 *E-mail:* '   + email    + '\n' +
    '📱 *Telefone:* ' + tel      + '\n' +
    (empresa ? '🏢 *Empresa:* ' + empresa + '\n' : '') +
    '📌 *Assunto:* '  + assunto  + '\n\n' +
    '💬 *Mensagem:*\n' + mensagem;

  var numero = '5537998461673';
  var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
  window.open(url, '_blank');
}
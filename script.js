document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const expandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !expandido);
  });

  const aumentarFonte = document.getElementById('aumentar-fonte');
  const diminuirFonte = document.getElementById('diminuir-fonte');
  const alternarContraste = document.getElementById('alterna-contraste');
  const alternarTema = document.getElementById('alterna-tema');

  let tamanhoFonte = 1;

  aumentarFonte.addEventListener('click', () => {
    tamanhoFonte += 0.1;
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  diminuirFonte.addEventListener('click', () => {
    tamanhoFonte = Math.max(0.6, tamanhoFonte - 0.1);
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });

  alternarContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  alternarTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
  });

  // ScrollReveal animações
  ScrollReveal().reveal('#inicio', { delay: 300 });
  ScrollReveal().reveal('#sobre', { delay: 300 });
  ScrollReveal().reveal('#galeria', { delay: 300 });
  ScrollReveal().reveal('#contato', { delay: 300 });
});

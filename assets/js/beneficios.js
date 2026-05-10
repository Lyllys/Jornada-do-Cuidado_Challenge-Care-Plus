function obterInfoBeneficioDoBotao(buttonEl) {
  const card = buttonEl.closest('.beneficio-card');

  const nomeDoBeneficio = card
    ?.querySelector('.beneficio-item-header')
    ?.textContent?.trim();

  const custoBeneficio = card
    ?.querySelector('.custo-beneficio span.text-primary')
    ?.textContent?.trim();

  return {
    nome: nomeDoBeneficio,
    custo: custoBeneficio,
  };
}

function parsearCareCoins(valorEmTexto) {
  if (!valorEmTexto) return 0;
  const somenteDigitos = String(valorEmTexto).replace(/\D/g, '');
  return somenteDigitos ? Number(somenteDigitos) : 0;
}

function formatarCareCoins(valor) {
  return new Intl.NumberFormat('pt-BR').format(Number(valor) || 0);
}

function obterElementosTotalCareCoins() {
  const elementos = [];
  const totalResumo = document.getElementById('totalCareCoinsResumo');
  if (totalResumo) elementos.push(totalResumo);

  const totalNavbar = document.getElementById('totalCareCoins');
  if (totalNavbar) elementos.push(totalNavbar);

  return elementos;
}

function obterTotalAtualCareCoins() {
  const totalElements = obterElementosTotalCareCoins();
  if (totalElements.length === 0) return null;
  return parsearCareCoins(totalElements[0].textContent);
}

function sincronizarTotaisCareCoins() {
  const totalElements = obterElementosTotalCareCoins();
  if (totalElements.length === 0) return;

  const totalAtual = parsearCareCoins(totalElements[0].textContent);
  const totalFormatado = formatarCareCoins(totalAtual);

  totalElements.forEach((el) => {
    el.textContent = totalFormatado;
  });
}

function ajustarTotalCareCoins(custoBeneficio) {
  const totalElements = obterElementosTotalCareCoins();
  if (totalElements.length === 0) return;

  const totalAtual = parsearCareCoins(totalElements[0].textContent);
  const custo = parsearCareCoins(custoBeneficio);
  const novoTotal = Math.max(0, totalAtual - custo);

  totalElements.forEach((el) => {
    el.textContent = formatarCareCoins(novoTotal);
  });
}

function configurarModalResgate() {
  const modalElement = document.getElementById('modalResgate');
  if (!modalElement) return;

  if (typeof bootstrap === 'undefined' || !bootstrap.Modal) return;

  const modalResgate = bootstrap.Modal.getOrCreateInstance(modalElement);

  const beneficioElement = document.getElementById('modalResgateBeneficio');

  const containerClique =
    document.querySelector('.beneficios-items-container') || document;

  containerClique.addEventListener('click', (event) => {
    const botaoResgatar = event.target.closest('.btn-resgatar');
    if (!botaoResgatar) return;

    const { nome, custo } = obterInfoBeneficioDoBotao(botaoResgatar);
    if (beneficioElement) beneficioElement.textContent = nome;

    modalResgate.show();

    ajustarTotalCareCoins(custo);
    verificarBeneficiosDisponiveis();
  });
}

function verificarBeneficiosDisponiveis() {
  const totalCareCoins = obterTotalAtualCareCoins();
  if (totalCareCoins === null) return;

  const botoesResgatar = document.querySelectorAll('.btn-resgatar');

  botoesResgatar.forEach((botao) => {
    const card = botao.closest('.beneficio-card');
    const custoBeneficio = parsearCareCoins(
      card?.querySelector('.custo-beneficio span.text-primary')?.textContent,
    );

    if (custoBeneficio > totalCareCoins) {
      botao.setAttribute('disabled', 'disabled');
      botao.textContent = 'Saldo insuficiente';
    } else {
      botao.removeAttribute('disabled');
      botao.textContent = 'Resgatar';
    }
  });
}

// Rodada inicial (o resumo já existe no HTML). O navbar vem via layout.
sincronizarTotaisCareCoins();
verificarBeneficiosDisponiveis();

// Quando o layout terminar de injetar o navbar/sidebar, sincroniza e revalida.
document.addEventListener(
  'layout:carregado',
  () => {
    sincronizarTotaisCareCoins();
    verificarBeneficiosDisponiveis();
  },
  { once: true },
);

configurarModalResgate();

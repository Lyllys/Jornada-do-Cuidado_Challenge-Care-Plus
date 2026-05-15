function loadLayout() {
  const sidebarContainer = document.getElementById('layout-sidebar');

  const saldoCareCoins = 2450;
  const saldoCareCoinsFormatado = new Intl.NumberFormat('pt-BR').format(
    saldoCareCoins,
  );

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const menuHTML = `
    <nav class="navbar bg-body-tertiary navbar-container">
        <div class="container-fluid">
          <div class="navbar-items d-flex justify-content-between align-items-center gap-4 w-100">
            <div class="navbar-itens-esquerda">
              <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="navbar-itens-direita d-flex gap-4 align-items-center">
              <a href="beneficios.html" class="rounded-5 py-2 px-3 border border-primary saldo-care-coins-container d-flex align-items-center">
               <img src="./assets/images/icons/icon-care-coin.svg" alt="Ícone da Care Coin"/>  
              <span class="ps-2 my-1 text-primary">
                <span id="totalCareCoins">${saldoCareCoinsFormatado}</span> <span class="d-none d-md-inline">Care Coins</span></span>
              </a>


              <div class="dropdown" id="notificacoesDropdown">
                <button type="button" class="position-relative btn border-0 bg-transparent"data-bs-toggle="dropdown" aria-expanded="false" id="btnNotifcacoes">
                  <span><i class="fa-solid fa-bell fa-xl"></i></span>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light rounded-circle notificacao-pulse" id="notificacoesBadge" >
                   2
                  </span>
                </button>
                <div class="dropdown-menu dropdown-menu-end dropdown-notificacoes-content p-0 shadow-lg mt-3">
                  <div class="dropdown-notificacoes-header  bg-primary p-3 text-white d-flex justify-content-between align-items-center">
                    <span class="fw-bold" style="font-size: 0.95rem;">
                          Recadinhos do Care
                    </span>
                    <img src="./assets/images/mascote/care-beijo.png" alt="Care (mascote da Care plus) enviando um beijo" class="me-2 care-mascote-beijo" style="width: 80px; height: 80px;"/>  
                  </div>
                  <div class="p-3 border-bottom">
                    <div class="d-flex gap-3">
                      <div class="notificao-icon-container rounded-circle p-2 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="fa-solid fa-car-side text-primary"></i>
                      </div>
                      <div>
                          <p class="fw-bold mb-1 fs-6 fs-6">Nada de voltas no quarteirão!</p>
                          <p class="small mb-2">
                            Bota o cinto e relaxa! Minerei os melhores cantinhos pra você estacionar sem estresse e com aquele desconto de quem é especial.
                          </p>
                          <a href="#" class="small text-secondary fw-bold text-decoration-none" data-bs-toggle="modal" data-bs-target="#modalEstacionamento">
                            Onde eu paro o carro?
                          </a>
                        </div>
                    </div>
                  </div>

                  <div class="p-3">
                    <div class="d-flex gap-3">
                      <div class="notificao-icon-container rounded-circle p-2 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="fa-solid fa-umbrella text-primary"></i>
                      </div>
                      <div>
                        <p class="fw-bold mb-1 fs-6 fs-6">Já separou o guarda-chuva?</p>
                        <p class="small mb-2">
                         Sua consulta é às <span class="fw-bold">14h30</span>, então é bom se preparar para não se molhar no caminho!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div>
                <img src="./assets/images/profile-picture.png" class="img-thumbnail rounded-circle border-0" alt="Foto de perfil" width="60px" height="60px" />
              </div>
            </div>
          </div>

          <div class="offcanvas offcanvas-start offcanvas-container pt-4" tabindex="-1" id="offcanvasScrolling">
            <div class="offcanvas-header">
              <img src="./assets/images/care-plus-logo.png" alt="Logo da Care Plus" width="150px" height="40px" class="ms-3" />
              <button type="button" class="btn-close d-lg-none" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between">
              <div>
                <div class="me-3 mb-3 rounded-4 bg-white p-2">
                  <p class="ps-2 my-1 text-primary">Olá, Mariana!</p>
                  <p class="ps-2 my-1 fw-semibold">Nível 3: Platinum</p>
                </div>
                <ul class="navbar-nav pe-3 gap-1">
                  <li class="nav-item menu-lateral-item">
                    <a class="nav-link px-3 ${currentPage === 'home.html' ? 'active' : ''}" href="home.html">
                        <i class="fa-solid fa-table-cells-large"></i> Home
                    </a>
                  </li>
                  <li class="nav-item menu-lateral-item">
                    <a class="nav-link px-3 ${currentPage === 'beneficios.html' ? 'active' : ''}" href="beneficios.html">
                        <i class="fa-solid fa-gift"></i> Benefícios
                    </a>
                  </li>
                  <li class="nav-item menu-lateral-item">
                    <a class="nav-link px-3 ${currentPage === 'niveis.html' ? 'active' : ''}" href="niveis.html">
                        <i class="fa-solid fa-medal"></i> Níveis
                    </a>
                  </li>
                </ul>
              </div>
              <div class="border-top">
                <ul class="navbar-nav pe-3 mt-2 gap-1">
                  <li class="nav-item menu-lateral-item">
                    <a class="nav-link px-3" href="#"><i class="fa-solid fa-gear"></i> Configurações</a>
                  </li>
                  <li class="nav-item menu-lateral-item mb-2">
                    <a class="nav-link px-3" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

  
      <!-- Modal Estacionamento -->
      <div class="modal fade" id="modalEstacionamento" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div
            class="modal-content border-0 shadow rounded-4"
          >
            <div class="modal-header border-0 pt-4 px-4">
              <h4 class="fw-bold text-primary mb-0">
                <i class="fa-solid fa-square-p me-2"></i>Parceiros de
                Estacionamento
              </h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <p class=" mb-4">
                Mostre o seu check-in digital e ganhe descontos exclusivos!
              </p>

              <div
                class="parking-item d-flex justify-content-between align-items-center rounded-3 p-3 mb-3 border border-gray-300"
              >
                <div>
                  <p class="fw-bold mb-1 fs-6">Estapar - Clínica Paulista</p>
                  <p class="text-secondary small mb-0"
                    ><i class="fa-solid fa-location-dot me-1"></i> 50 metros de
                    distância</p
                  >
                </div>
                <span class="badge bg-success-subtle text-success rounded-pill"
                  >Grátis 1h</span
                >
              </div>

              <div
                class="parking-item d-flex justify-content-between align-items-center rounded-3 p-3 mb-3 border border-gray-300"
              >
                <div>
                  <p class="fw-bold mb-1 fs-6">Indigo Park - Unidade A</p>
                  <p class="text-secondary small mb-0"
                    ><i class="fa-solid fa-location-dot me-1"></i> 120 metros de
                    distância</p
                  >
                </div>
                <span class="badge bg-success-subtle text-success rounded-pill"
                  >Grátis 1h</span
                >
              </div>

              <div
                class="parking-item d-flex justify-content-between align-items-center rounded-3 p-3 mb-3 border border-gray-300"
              >
                <div>
                  <p class="fw-bold mb-1 fs-6">Park & Care - Conveniado</p>
                  <p class="text-secondary small mb-0"
                    ><i class="fa-solid fa-location-dot me-1"></i>10 metros
                    (Anexo)</p
                  >
                </div>
                <span class="badge bg-success-subtle text-success rounded-pill"
                  >Grátis 1h</span
                >
              </div>
              <div class="text-center mt-4">
                <button
                  class="btn btn-brand"
                  data-bs-dismiss="modal"
                >
                  Vrumm, entendi!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  function onVisualizarNotificacoes() {
    const btnNotificoes = document.getElementById('btnNotifcacoes');

    if (btnNotificoes) {
      btnNotificoes.addEventListener('click', () => {
        const badge = document.getElementById('notificacoesBadge');
        if (badge) {
          badge.style.display = 'none';
        }
      });
    }
  }

  if (sidebarContainer) {
    sidebarContainer.innerHTML = menuHTML;

    onVisualizarNotificacoes();

    document.dispatchEvent(
      new CustomEvent('layout:carregado', {
        detail: {
          paginaAtual: currentPage,
        },
      }),
    );
  }
}

document.addEventListener('DOMContentLoaded', loadLayout);

document.addEventListener('DOMContentLoaded', function () {
  const btnConfirmar = document.getElementById('btn-confirmar');
  const btnAgendar = document.getElementById('btn-agendar');

  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', function () {
      const modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('modalConfirmarConsulta'),
      );
      modal.show();
    });
  }

  if (btnAgendar) {
    btnAgendar.addEventListener('click', function () {
      const modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById('modalAgendarCheckup'),
      );
      modal.show();
    });
  }

  // Animação de flutuação para mascotes nos modais
  const modalConfirmar = document.getElementById('modalConfirmarConsulta');
  const modalAgendar = document.getElementById('modalAgendarCheckup');
  const mascoteConfirmar = document.getElementById('mascoteConfirmar');
  const mascoteAgendar = document.getElementById('mascoteAgendar');

  if (modalConfirmar && mascoteConfirmar) {
    modalConfirmar.addEventListener('shown.bs.modal', function () {
      mascoteConfirmar.classList.add('mascote-flutuante');
    });
    modalConfirmar.addEventListener('hidden.bs.modal', function () {
      mascoteConfirmar.classList.remove('mascote-flutuante');
    });
  }

  if (modalAgendar && mascoteAgendar) {
    modalAgendar.addEventListener('shown.bs.modal', function () {
      mascoteAgendar.classList.add('mascote-flutuante');
    });
    modalAgendar.addEventListener('hidden.bs.modal', function () {
      mascoteAgendar.classList.remove('mascote-flutuante');
    });
  }
});

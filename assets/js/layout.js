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
                  <span class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle notificacao-pulse" id="notificacoesBadge" >
                    <span class="visually-hidden">Novas notificações</span>
                  </span>
                </button>
                <div class="dropdown-menu dropdown-menu-end dropdown-notificacoes p-0 shadow-lg mt-3">
                  <div class="bg-primary p-3 text-white d-flex justify-content-between align-items-center" style="border-radius: 1.2rem 1.2rem 0 0;">
                    <span class="fw-bold" style="font-size: 0.95rem;">
                        <i class="fa-solid fa-umbrella me-2"></i>Já separou o guarda-chuva?
                    </span>
                  </div>
                  <div class="p-3">
                    <div class="d-flex gap-3">
                      <div>
                        <h6 class="fw-bold mb-1">Vi aqui que tem previsão de chuva hoje.</h6>
                        <p class="small mb-2">
                         Sua consulta é às 14h30, então é bom se preparar para não se molhar no caminho!
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
                  <p class="ps-2 my-1 fw-semibold">Nível 5: Bronze</p>
                </div>
                <ul class="navbar-nav pe-3 gap-1">
                  <li class="nav-item menu-lateral-item">
                    <a class="nav-link px-3 ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">
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

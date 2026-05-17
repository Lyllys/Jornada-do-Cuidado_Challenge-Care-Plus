function loadLayout() {
  const sidebarContainer = document.getElementById('layout-sidebar');

  const saldoCareCoins = 2450;
  const saldoCareCoinsFormatado = new Intl.NumberFormat('pt-BR').format(
    saldoCareCoins,
  );

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (sessionStorage.getItem('carePlusLoggedIn') !== 'true') {
    window.location.replace('index.html');
    return;
  }

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

              
              <div class="dropdown profile-dropdown">
                <button
                  type="button"
                  class="profile-avatar-btn"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                  aria-label="Abrir menu de perfil"
                >
                  <img
                    src="./assets/images/profile-picture.png"
                    class="profile-avatar-img"
                    alt="Foto de perfil de Mariana"
                  />
                </button>
                <div class="dropdown-menu dropdown-menu-end profile-menu p-0 shadow-lg mt-3">
                  <div class="profile-menu-header">
                    <img
                      src="./assets/images/profile-picture.png"
                      class="profile-menu-avatar"
                      alt="Foto de perfil de Mariana"
                    />
                    <div class="profile-menu-user">
                      <strong id="profileMenuName">Mariana</strong>
                      <a href="beneficios.html">Meus benefícios</a>
                    </div>
                  </div>

                  <div class="profile-menu-status">
                    <div>
                      <span>Nível atual</span>
                      <strong>Ouro</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="profile-menu-action"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditarPerfil"
                  >
                    <span class="profile-menu-action-icon">
                      <i class="fa-solid fa-user-pen"></i>
                    </span>
                    <span>
                      <strong>Editar perfil</strong>
                      <small>Nome, e-mail e telefone</small>
                    </span>
                  </button>

                  <a href="niveis.html?modal=medalhas" class="profile-menu-action" style="text-decoration:none;color:inherit; white-space:nowrap;">
                    <span class="profile-menu-action-icon">
                      <i class="fa-solid fa-medal"></i>
                    </span>
                    <span>
                      <strong>Minhas medalhas</strong>
                      <small>Conquistas recentes</small>
                    </span>
                  </a>

                  <div class="profile-medals-card" aria-live="polite">
                    <div class="profile-medals-card-header">
                      <strong>Recebidas recentemente</strong>
                      <span id="profileMedalsCount">0</span>
                    </div>
                    <div class="profile-medals-list" id="profileMedalsList">
                      <p class="profile-medals-empty" id="profileMedalsEmpty">
                        Suas próximas conquistas vão aparecer aqui.
                      </p>
                    </div>
                  </div>

                  <div class="profile-menu-footer">
                    <a
                      href="#"
                      class="profile-menu-link"
                      data-bs-toggle="modal"
                      data-bs-target="#modalConfiguracoes"
                    >
                      Configurações
                    </a>
                    <a href="index.html" class="profile-menu-link text-danger" data-logout-link>Sair</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="offcanvas offcanvas-start offcanvas-container pt-4" tabindex="-1" id="offcanvasScrolling">
            <div class="offcanvas-header">
              <a href="home.html"> <img src="./assets/images/care-plus-logo.png" alt="Logo da Care Plus" width="150px" height="40px" class="ms-3"/>
              </a>
              <button type="button" class="btn-close d-lg-none" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between">
              <div>
                <div class="me-3 mb-3 rounded-4 bg-white p-2">
                  <p class="ps-2 my-1 text-primary" id="sidebarProfileGreeting">Olá, Mariana!</p>
                  <p class="ps-2 my-1 fw-semibold">Nível Ouro</p>
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
                    <a
                      class="nav-link px-3"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modalConfiguracoes"
                    >
                      <i class="fa-solid fa-gear"></i> Configurações
                    </a>
                  </li>
                  <li class="nav-item menu-lateral-item mb-2">
                    <a class="nav-link px-3" href="index.html" data-logout-link><i class="fa-solid fa-arrow-right-from-bracket"></i> Sair</a>
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

      <!-- Modal Editar Perfil -->
      <div class="modal fade" id="modalEditarPerfil" tabindex="-1" aria-labelledby="modalEditarPerfilLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow rounded-4">
            <div class="modal-header border-0 px-4 pt-4 pb-0">
              <div>
                <h4 class="fw-bold text-primary mb-1" id="modalEditarPerfilLabel">
                  Editar perfil
                </h4>
                <p class="text-secondary small mb-0">
                  Atualize seus dados principais da conta.
                </p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <form class="modal-body p-4" id="formEditarPerfil">
              <div class="profile-edit-cover">
                <img
                  src="./assets/images/profile-picture.png"
                  class="profile-edit-avatar"
                  alt="Foto de perfil de Mariana"
                />
                <button type="button" class="profile-edit-photo-btn">
                  <i class="fa-solid fa-camera"></i>
                  Alterar foto
                </button>
              </div>

              <div class="row g-3 mt-2">
                <div class="col-12">
                  <label for="profileNameInput" class="form-label small fw-semibold text-secondary">
                    Nome
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-3"
                    id="profileNameInput"
                    value="Mariana"
                  />
                </div>
                <div class="col-12">
                  <label for="profileEmailInput" class="form-label small fw-semibold text-secondary">
                    E-mail
                  </label>
                  <input
                    type="email"
                    class="form-control rounded-3"
                    id="profileEmailInput"
                    value="mariana@email.com"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <label for="profilePhoneInput" class="form-label small fw-semibold text-secondary">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    class="form-control rounded-3"
                    id="profilePhoneInput"
                    value="(11) 99999-9999"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <label for="profileBirthInput" class="form-label small fw-semibold text-secondary">
                    Data de nascimento
                  </label>
                  <input
                    type="date"
                    class="form-control rounded-3"
                    id="profileBirthInput"
                    value="1995-05-10"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-end gap-2 mt-4">
                <button type="button" class="btn btn-light rounded-3 px-4" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="submit" class="btn btn-brand px-4">
                  Salvar alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Modal Configurações -->
      <div class="modal fade" id="modalConfiguracoes" tabindex="-1" aria-labelledby="modalConfiguracoesLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow rounded-4">
            <div class="modal-header border-0 px-4 pt-4 pb-0">
              <div>
                <h4 class="fw-bold mb-1 settings-modal-title" id="modalConfiguracoesLabel">
                  Configurações
                </h4>
                <p class="small mb-0 settings-modal-subtitle">
                  Ajustes da sua conta Care Plus.
                </p>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="settings-card">
                <div class="settings-option" aria-disabled="true">
                  <span class="settings-option-icon">
                    <i class="fa-solid fa-shield-halved"></i>
                  </span>
                  <span class="settings-option-copy">
                    <strong>Segurança</strong>
                    <small>Senha, acesso e proteção da conta</small>
                  </span>
                </div>

                <div class="settings-option" aria-disabled="true">
                  <span class="settings-option-icon">
                    <i class="fa-solid fa-bell"></i>
                  </span>
                  <span class="settings-option-copy">
                    <strong>Gerenciar notificações</strong>
                    <small>Preferências de recados, lembretes e avisos</small>
                  </span>
                </div>
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

  function onEditarPerfil() {
    const formEditarPerfil = document.getElementById('formEditarPerfil');
    const profileNameInput = document.getElementById('profileNameInput');

    if (!formEditarPerfil || !profileNameInput) {
      return;
    }

    formEditarPerfil.addEventListener('submit', (event) => {
      event.preventDefault();

      const nomeAtualizado = profileNameInput.value.trim() || 'Mariana';
      const primeiroNome = nomeAtualizado.split(' ')[0];
      const profileMenuName = document.getElementById('profileMenuName');
      const homeGreeting = document.querySelector('.home-dashboard-greeting');
      const sidebarProfileGreeting = document.getElementById(
        'sidebarProfileGreeting',
      );

      if (profileMenuName) {
        profileMenuName.textContent = nomeAtualizado;
      }

      if (homeGreeting) {
        homeGreeting.textContent = `Olá, ${primeiroNome}!`;
      }

      if (sidebarProfileGreeting) {
        sidebarProfileGreeting.textContent = `Olá, ${primeiroNome}!`;
      }

      const modalEditarPerfil = document.getElementById('modalEditarPerfil');
      const modalInstance = bootstrap.Modal.getInstance(modalEditarPerfil);

      if (modalInstance) {
        modalInstance.hide();
      }
    });
  }

  function onMedalhasPerfil() {
    const medalList = document.getElementById('profileMedalsList');
    const medalCount = document.getElementById('profileMedalsCount');

    if (!medalList || !medalCount) {
      return;
    }

    let medalhas = [];

    function renderizarMedalhas() {
      medalCount.textContent = medalhas.length;

      if (medalhas.length === 0) {
        medalList.innerHTML = `
          <p class="profile-medals-empty" id="profileMedalsEmpty">
            Suas próximas conquistas vão aparecer aqui.
          </p>
        `;
        return;
      }

      medalList.innerHTML = medalhas
        .slice(0, 4)
        .map(
          (medalha) => `
            <div class="profile-medal-item">
              <span class="profile-medal-icon">
                <i class="fa-solid ${medalha.icon}"></i>
              </span>
              <span class="profile-medal-copy">
                <strong>${medalha.name}</strong>
                <small>${medalha.description}</small>
              </span>
            </div>
          `,
        )
        .join('');
    }

    function registrarMedalha(medalha) {
      if (!medalha || !medalha.id) {
        return;
      }

      medalhas = [
        {
          id: medalha.id,
          name: medalha.name,
          description: medalha.description,
          icon: medalha.icon,
        },
        ...medalhas.filter((item) => item.id !== medalha.id),
      ].slice(0, 4);

      renderizarMedalhas();
    }

    window.registrarMedalhaPerfil = registrarMedalha;

    document.addEventListener('careplus:medalha-conquistada', (event) => {
      registrarMedalha(event.detail);
    });

    renderizarMedalhas();
  }

  function onLogout() {
    document.querySelectorAll('[data-logout-link]').forEach((link) => {
      link.addEventListener('click', () => {
        sessionStorage.removeItem('carePlusLoggedIn');
        sessionStorage.removeItem('showModalDeApresentacao');
      });
    });
  }

  if (sidebarContainer) {
    sidebarContainer.innerHTML = menuHTML;

    onVisualizarNotificacoes();
    onEditarPerfil();
    onMedalhasPerfil();
    onLogout();

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

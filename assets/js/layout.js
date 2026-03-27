function loadLayout() {
  const sidebarContainer = document.getElementById('layout-sidebar');

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
              <div class="rounded-5 py-2 px-3 border border-primary saldo-care-coins-container d-flex align-items-center">
                <span class="ps-2 my-1 text-primary"><i class="fa-solid fa-wallet"></i> 2450 <span class="d-none d-md-inline">Care Coins</span></span>
              </div>
              <div><span><i class="fa-solid fa-bell fa-xl"></i></span></div>
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
                <ul class="navbar-nav pe-3">
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
                <ul class="navbar-nav pe-3 mt-2">
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

  if (sidebarContainer) {
    sidebarContainer.innerHTML = menuHTML;
  }
}

document.addEventListener('DOMContentLoaded', loadLayout);

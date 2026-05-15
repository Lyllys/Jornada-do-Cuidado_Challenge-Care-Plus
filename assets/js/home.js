document.addEventListener('DOMContentLoaded', function () {
  exibirModalDeApresentacao();
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

function exibirModalDeApresentacao() {
  const deveMostrar = sessionStorage.getItem('showModalDeApresentacao');

  if (deveMostrar === 'true') {
    const modalElement = document.getElementById('modalDeApresentacao');
    const modalDeApresentacao = new bootstrap.Modal(modalElement);

    setTimeout(() => {
      modalDeApresentacao.show();
      sessionStorage.removeItem('showModalDeApresentacao');
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  exibirModalDeApresentacao();
  const btnConfirmar = document.getElementById('btn-confirmar');
  const btnAgendar = document.getElementById('btn-agendar');
  let saldoCareCoins = 2450;
  let careCoinsParaPlatinum = 550;

  const formatarCareCoins = (valor) =>
    new Intl.NumberFormat('pt-BR').format(valor);

  function atualizarSaldoCareCoins() {
    const homeCareCoins = document.getElementById('homeCareCoins');
    const totalCareCoins = document.getElementById('totalCareCoins');
    const homeNextLevel = document.getElementById('homeNextLevel');
    const homeLevelProgressBar = document.getElementById(
      'homeLevelProgressBar',
    );

    if (homeCareCoins) {
      homeCareCoins.textContent = formatarCareCoins(saldoCareCoins);
    }

    if (totalCareCoins) {
      totalCareCoins.textContent = formatarCareCoins(saldoCareCoins);
    }

    if (homeNextLevel) {
      homeNextLevel.textContent = `Próximo: Platinum (${formatarCareCoins(
        careCoinsParaPlatinum,
      )} Care Coins)`;
    }

    if (homeLevelProgressBar) {
      const metaPlatinum = saldoCareCoins + careCoinsParaPlatinum;
      const progressoPlatinum =
        metaPlatinum > 0 ? (saldoCareCoins / metaPlatinum) * 100 : 100;

      homeLevelProgressBar.style.width = `${Math.min(
        progressoPlatinum,
        100,
      )}%`;
    }
  }

  function desativarAcao(button, actionId) {
    const action = document.getElementById(actionId);

    button.disabled = true;
    button.textContent = 'Benefício resgatado';

    if (action) {
      action.classList.add('home-benefits-action-disabled');
    }
  }

  function ganharCareCoins({ button, actionId, pontos, modalId }) {
    if (!button || button.disabled) {
      return;
    }

    saldoCareCoins += pontos;
    careCoinsParaPlatinum = Math.max(careCoinsParaPlatinum - pontos, 0);

    atualizarSaldoCareCoins();
    desativarAcao(button, actionId);

    const modalElement = document.getElementById(modalId);

    if (modalElement) {
      bootstrap.Modal.getOrCreateInstance(modalElement).show();
    }
  }

  function registrarMedalhaConquistada(medalha) {
    document.dispatchEvent(
      new CustomEvent('careplus:medalha-conquistada', {
        detail: medalha,
      }),
    );

    if (window.registrarMedalhaPerfil) {
      window.registrarMedalhaPerfil(medalha);
    }
  }

  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', function () {
      ganharCareCoins({
        button: btnConfirmar,
        actionId: 'action-confirmar',
        pontos: 50,
        modalId: 'modalConfirmarConsulta',
      });
      registrarMedalhaConquistada({
        id: 'agenda-organizada',
        name: 'Agenda Organizada',
        description: 'Consulta confirmada no horário',
        icon: 'fa-calendar-check',
      });
    });
  }

  if (btnAgendar) {
    btnAgendar.addEventListener('click', function () {
      ganharCareCoins({
        button: btnAgendar,
        actionId: 'action-agendar',
        pontos: 150,
        modalId: 'modalAgendarCheckup',
      });
      registrarMedalhaConquistada({
        id: 'mestre-prevencao',
        name: 'Mestre da Prevenção',
        description: 'Check-up solicitado',
        icon: 'fa-shield-heart',
      });
    });
  }

  atualizarSaldoCareCoins();

  const habitState = {
    reading: {
      done: false,
      current: 5,
      max: 7,
      progressTextId: 'readingProgressText',
      progressBarId: 'readingProgressBar',
      buttonId: 'readingCheckBtn',
      icon: 'fa-book-open',
      image: 'assets/images/mascote/care-leitor.png',
      imageAlt: 'Care lendo um livro',
      toastTitle: 'Mandou bem, Mariana! Você completou sua leitura do dia!',
      medal: 'Leitor Assíduo',
    },
    exercise: {
      done: false,
      current: 4,
      max: 7,
      progressTextId: 'exerciseProgressText',
      progressBarId: 'exerciseProgressBar',
      buttonId: 'exerciseCheckBtn',
      icon: 'fa-dumbbell',
      image: 'assets/images/mascote/care-exercicio.png',
      imageAlt: 'Care se exercitando',
      toastTitle:
        'Parabéns! Cada movimento conta e você já está mais saudável!',
      medal: 'Atividade Física Regular',
    },
  };

  function mostrarMensagemHabito({ titulo, medalha, icon, image, imageAlt }) {
    const toastOverlay = document.createElement('div');
    toastOverlay.className = 'home-habit-toast-overlay';
    toastOverlay.innerHTML = `
      <div class="home-habit-toast" role="status" aria-live="polite">
        <img
          src="${image}"
          alt="${imageAlt}"
          class="home-habit-care-img"
        />

        <div class="home-habit-medal-card">
          <div class="home-modal-medal-icon" aria-hidden="true">
            <div class="home-modal-medal-circle">
              <i class="fa-solid ${icon}"></i>
            </div>
            <span class="home-modal-medal-star">
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
          <p class="home-habit-medal-name">${medalha}</p>
          <span class="home-habit-medal-status">Conquistado</span>
        </div>

        <p class="home-habit-toast-title">${titulo}</p>
      </div>
    `;

    document.body.appendChild(toastOverlay);

    setTimeout(() => {
      toastOverlay.classList.add('home-habit-toast-visible');
    }, 10);

    setTimeout(() => {
      toastOverlay.classList.remove('home-habit-toast-visible');
      setTimeout(() => toastOverlay.remove(), 250);
    }, 3200);
  }

  function atualizarDicaHabito() {
    const habitTip = document.getElementById('habitTip');

    if (!habitTip) {
      return;
    }

    if (habitState.reading.done && !habitState.exercise.done) {
      habitTip.textContent =
        'Ei, Mariana! Seus músculos estão esperando! Vamos se mexer e ganhar uma medalha hoje?';
      return;
    }

    if (!habitState.reading.done && habitState.exercise.done) {
      habitTip.textContent =
        '💡 Mariana, não se esqueça da sua leitura de hoje para colecionar mais uma medalha';
      return;
    }

    if (habitState.reading.done && habitState.exercise.done) {
      habitTip.textContent =
        '💡 Mariana, você concluiu seus hábitos de hoje. Continue nesse ritmo!';
      return;
    }

    habitTip.textContent =
      '💡 Mariana, o dia ainda está esperando por você! Bora ler e se mexer?';
  }

  function concluirHabito(tipo) {
    const habit = habitState[tipo];

    if (!habit || habit.done) {
      return;
    }

    const button = document.getElementById(habit.buttonId);
    const progressText = document.getElementById(habit.progressTextId);
    const progressBar = document.getElementById(habit.progressBarId);

    habit.done = true;
    mostrarMensagemHabito({
      titulo: habit.toastTitle,
      medalha: habit.medal,
      icon: habit.icon,
      image: habit.image,
      imageAlt: habit.imageAlt,
    });
    registrarMedalhaConquistada({
      id: tipo,
      name: habit.medal,
      description:
        tipo === 'reading'
          ? 'Leitura diária concluída'
          : 'Atividade física concluída',
      icon: habit.icon,
    });

    habit.current = Math.min(habit.current + 1, habit.max);

    if (progressText) {
      progressText.textContent = `Progresso semanal: ${habit.current}/${habit.max}`;
    }

    if (progressBar) {
      const currentWidth = Number.parseFloat(progressBar.style.width) || 0;
      progressBar.style.width = `${Math.min(currentWidth + 12, 100)}%`;
    }

    if (button) {
      button.disabled = true;
      button.classList.add('home-habit-check-btn-completed');
    }

    atualizarDicaHabito();
  }

  const readingCheckBtn = document.getElementById('readingCheckBtn');
  const exerciseCheckBtn = document.getElementById('exerciseCheckBtn');

  if (readingCheckBtn) {
    readingCheckBtn.addEventListener('click', () => concluirHabito('reading'));
  }

  if (exerciseCheckBtn) {
    exerciseCheckBtn.addEventListener('click', () =>
      concluirHabito('exercise'),
    );
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

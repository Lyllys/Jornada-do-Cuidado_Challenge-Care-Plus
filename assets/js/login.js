const loginForm = document.getElementById('login-form');

function init() {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = loginForm.querySelector('input[type="email"]');
      const passwordInput = loginForm.querySelector('input[type="password"]');
      const btn = loginForm.querySelector('button');

      let isValid = true;

      emailInput.classList.remove('is-invalid');
      passwordInput.classList.remove('is-invalid');

      if (!emailInput.value.trim() || !emailInput.checkValidity()) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!passwordInput.value.trim()) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      btn.disabled = true;
      btn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Entrando...
      `;

      sessionStorage.setItem('showModalDeApresentacao', 'true');

      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1200);
    });

    loginForm.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', function () {
        this.classList.remove('is-invalid');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

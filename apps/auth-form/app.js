document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const successMessage = document.getElementById('successMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Reset messaggi precedenti
        successMessage.classList.add('hidden');

        // Validazione campi
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('⚠️ Email e password sono obbligatori.');
            return;
        }

        // Simulazione login (nessuna chiamata API)
        successMessage.classList.remove('hidden');
        loginForm.reset();

        // Focus sul form per accessibilità
        loginForm.focus();
    });
});
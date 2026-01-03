document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById('btnLogin');
  const loginScreen = document.getElementById('screen-login');
  const execScreen = document.getElementById('screen-executive-dashboard');
  const topTitle = document.getElementById('topTitle');
  const roleLabel = document.getElementById('roleLabel');
  const demoRoleSwitch = document.getElementById('demoRoleSwitch');

  if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      loginScreen.classList.remove('active');
      execScreen.classList.add('active');
      topTitle.textContent = 'Executive Dashboard';
    });
  }

  // Demo role switch toggles role between Executive and Manager for demo purposes
  if (demoRoleSwitch) {
    demoRoleSwitch.addEventListener('click', (e) => {
      e.preventDefault();
      roleLabel.textContent = roleLabel.textContent === 'Executive' ? 'Manager' : 'Executive';
    });
  }
});

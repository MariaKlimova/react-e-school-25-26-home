import './WelcomePage.css';

export function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">Добро пожаловать!</h1>
        <p className="welcome-subtitle">
          Откройте для себя лучшие рестораны города
        </p>
        <p className="welcome-description">
          Просматривайте меню, читайте отзывы и выбирайте блюда из любимых ресторанов
        </p>
        <button className="welcome-button">
          Смотреть рестораны
        </button>
      </div>
    </div>
  );
}

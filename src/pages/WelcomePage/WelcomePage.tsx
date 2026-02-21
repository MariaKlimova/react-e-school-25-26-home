import { Link } from 'react-router';
import './WelcomePage.css';

export function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome!</h1>
        <p className="welcome-subtitle">
          Discover the best restaurants in your city
        </p>
        <p className="welcome-description">
          Browse menus, read reviews and choose dishes from your favorite restaurants
        </p>
        <Link to="/restaurants" className="welcome-button">
          View restaurants
        </Link>
      </div>
    </div>
  );
}

import Logo from '../Header/Logo/Logo';
import NavBar from '../Header/NavBar/NavBar';
import Society from '../Header/Society/Society';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Logo />
          <NavBar />
          <Society />
        </div>
      </div>
    </header>
  );
}

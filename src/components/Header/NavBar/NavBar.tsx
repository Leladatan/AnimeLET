import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="header__navbar">
      <ul className="header__list">
        <li className="header__list_item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'header__list_link_active' : 'header__list_link')}>
            HOME
          </NavLink>
        </li>
        <li className="header__list_item">
          <NavLink
            to="/animelist"
            className={({ isActive }) => (isActive ? 'header__list_link_active' : 'header__list_link')}
          >
            ANIME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import '../styles/components/Header.scss';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__menu">
        <section className="header__menu--section1">
          <Link to={`/`} className="header__menu--link">
            home
          </Link>
          <Link to={`/about/`} className="header__menu--link">
            about
          </Link>
          <Link to={`/projects/`} className="header__menu--link">
            stories
          </Link>
        </section>
        <section className="header__menu--section2">
          <img className="section3__skillsimg" src={logo} />
        </section>
      </nav>
    </header>
  );
};

export default Header;

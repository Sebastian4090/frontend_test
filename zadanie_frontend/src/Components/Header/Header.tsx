import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img
          src="https://i.ibb.co/swPB1zB/html-logo-white.png"
          alt="html5 logo"
        />
      </a>
      <p className="header__text">
        Zadanie <strong>rekrutacyjne</strong>
      </p>
    </header>
  );
};

export default Header;

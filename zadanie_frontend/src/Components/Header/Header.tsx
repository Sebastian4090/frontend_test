import "./Header.scss";

type header_type = {
  showData: boolean;
};

const Header = ({ showData }: header_type) => {
  if (showData) {
    console.log("dziala");
  }
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
        {showData ? (
          <>
            <br />
            Sebastian Bober
          </>
        ) : null}
      </p>
    </header>
  );
};

export default Header;

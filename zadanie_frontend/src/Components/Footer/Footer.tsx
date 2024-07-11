import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__CSS">
        <div className="footer__box" />
        <p>
          CSS
          <br />
          IS
          <br />
          AWESOME
        </p>
      </div>
      <div className="footer__watermark">
        <p></p>
      </div>
      <label className="footer__label">
        <input type="checkbox" className="label__button" />
        <legend>POKAŻ</legend>
        <form className="footer__form">
          <button
            className="form__button"
            id="reset"
            onClick={() => console.log()}
          >
            ZRESETUJ USTAWIENIA
          </button>
          <button
            className="form__button"
            id="showData"
            onClick={() => console.log("shows data")}
          >
            POKAŻ DANE OSOBOWE
          </button>
        </form>
      </label>
    </footer>
  );
};

export default Footer;

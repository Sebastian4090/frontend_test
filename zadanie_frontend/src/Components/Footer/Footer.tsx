import "./Footer.scss";
import { Dispatch, SetStateAction } from "react";

type footer_types = {
  setShowData: Dispatch<SetStateAction<boolean>>;
  resetText: Dispatch<SetStateAction<string[]>>;
};

const Footer = ({ setShowData, resetText }: footer_types) => {
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
      <div className="footer__label">
        <input type="checkbox" className="label__button" />
        <legend>POKAŻ</legend>
        <div className="footer__form">
          <button
            className="form__button"
            id="reset"
            onClick={() => {
              setShowData(false);
              resetText([]);
            }}
          >
            ZRESETUJ USTAWIENIA
          </button>
          <button
            className="form__button"
            id="showData"
            onClick={() => setShowData(true)}
          >
            POKAŻ DANE OSOBOWE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

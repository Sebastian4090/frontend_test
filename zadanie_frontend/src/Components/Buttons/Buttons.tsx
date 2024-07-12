import "./Buttons.scss";

type ButtonsProps = {
  replaceText: () => void;
  appendText: () => void;
};

const Buttons: React.FC<ButtonsProps> = ({ replaceText, appendText }) => {
  return (
    <fieldset className="Buttons">
      <legend>BLOK DRUGI</legend>
      <button id="replace" onClick={replaceText}>
        ZASTĄP
      </button>
      <button id="append" onClick={appendText}>
        DOKLEJ
      </button>
    </fieldset>
  );
};

export default Buttons;

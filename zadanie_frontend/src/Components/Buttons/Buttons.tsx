import "./Buttons.scss";

const Buttons: React.FC = () => {
  return (
    <fieldset className="Buttons">
      <legend>BLOK DRUGI</legend>
      <button id="replace" onClick={() => console.log()}>
        ZASTĄP
      </button>
      <button id="append" onClick={() => console.log()}>
        DOKLEJ
      </button>
    </fieldset>
  );
};

export default Buttons;

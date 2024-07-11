import "./Radio.scss";

const Radio: React.FC = () => {
  return (
    <fieldset className="radio">
      <legend>BLOK PIERWSZY</legend>
      <label className="radio__label">
        <input type="radio" name="option" value="first" />
        Opcja pierwsza
      </label>
      <label className="radio__label">
        <input type="radio" name="option" value="second" />
        Opcja druga
      </label>
      <label className="radio__label">
        <input type="radio" name="option" value="random" />
        Opcja losowa
      </label>
    </fieldset>
  );
};

export default Radio;

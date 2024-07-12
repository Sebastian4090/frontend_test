import "./Radio.scss";
import { Dispatch, SetStateAction } from "react";

type radio_types = {
  setRadioOption: Dispatch<SetStateAction<string>>;
};

const Radio: React.FC<radio_types> = ({ setRadioOption }) => {
  return (
    <fieldset className="radio">
      <legend>BLOK PIERWSZY</legend>
      <label className="radio__label">
        <input
          type="radio"
          name="option"
          value="first"
          onChange={() => setRadioOption("first")}
        />
        Opcja pierwsza
      </label>
      <label className="radio__label">
        <input
          type="radio"
          name="option"
          value="second"
          onChange={() => setRadioOption("second")}
        />
        Opcja druga
      </label>
      <label className="radio__label">
        <input
          type="radio"
          name="option"
          value="random"
          onChange={() => setRadioOption("random")}
        />
        Opcja losowa
      </label>
    </fieldset>
  );
};

export default Radio;

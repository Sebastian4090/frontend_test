import Buttons from "../Buttons/Buttons";
import Radio from "../Radio/Radio";
import Text from "../Text/Text";
import { Dispatch, SetStateAction } from "react";

import "./Body.scss";

type body_types = {
  setRadioOption: Dispatch<SetStateAction<string>>;
  fruitText: string[];
  replaceText: () => void;
  appendText: () => void;
};

const Body: React.FC<body_types> = ({
  setRadioOption,
  fruitText,
  replaceText,
  appendText,
}) => {
  return (
    <main className="main">
      <div>
        <h1>Nagłówek H1</h1>
        <hr />
      </div>
      <section className="section">
        <Radio setRadioOption={setRadioOption} />
        <Buttons replaceText={replaceText} appendText={appendText} />
        <Text fruitText={fruitText} />
      </section>
    </main>
  );
};

export default Body;

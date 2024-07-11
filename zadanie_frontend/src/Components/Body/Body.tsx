import Buttons from "../Buttons/Buttons";
import Radio from "../Radio/Radio";
import Text from "../Text/Text";

import "./Body.scss";

const Body: React.FC = () => {
  return (
    <main className="main">
      <div>
        <h1>Nagłówek H1</h1>
        <hr />
      </div>
      <section className="section">
        <Radio />
        <Buttons />
        <Text />
      </section>
    </main>
  );
};

export default Body;

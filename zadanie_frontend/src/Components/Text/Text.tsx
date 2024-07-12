import "./Text.scss";

type text_types = {
  fruitText: string[];
};

const Text = ({ fruitText }: text_types) => {
  return (
    <section className="text">
      <legend>
        BLOK Z DŁUGA NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE BLOK Z DŁUGA NAZWĄ KTÓRA SAMA
        SIĘ PRZYTNIE
      </legend>
      <article className="text__article">
        {fruitText.map((text, id) => (
          <p key={id}>{text}</p>
        ))}
      </article>
    </section>
  );
};

export default Text;

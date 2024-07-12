import Header from "../Components/Header/Header";
import Body from "../Components/Body/Body";

import "./App.scss";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";

type FruitData = {
  fruits: string[];
};

const loadData = async (): Promise<FruitData> => {
  const storedData = localStorage.getItem("fruitData");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    const response = await fetch("/fruitData.json");
    const data = await response.json();
    localStorage.setItem("fruitData", JSON.stringify(data));
    return data;
  }
};

function App() {
  const [showData, setShowData] = useState<boolean>(false);

  const [fruitData, setFruitData] = useState<string[]>([]);

  const [radioOption, setRadioOption] = useState<string>("");
  const [fruitText, setFruitText] = useState<string[]>([]);

  try {
    useEffect(() => {
      (async () => {
        const data = await loadData();
        setFruitData(data.fruits);
      })();
    }, []);
  } catch {
    console.error("Cannot fetch data!");
  }

  const replaceText = () => {
    switch (radioOption) {
      case "first":
        setFruitText([fruitData[0]]);
        break;
      case "second":
        setFruitText([fruitData[1]]);
        break;
      case "random":
        setFruitText([fruitData[Math.floor(Math.random() * fruitData.length)]]);
        break;
      default:
        alert("Wybierz opcje z bloku pierwszego!");
    }
  };

  const getRandomUnusedText = (): string => {
    const unusedText = fruitData.filter((text) => !fruitText.includes(text));
    if (unusedText.length === 0) {
      alert("Nie można wyświetlić unikatowego zdania!");
      return "";
    }
    return unusedText[Math.floor(Math.random() * unusedText.length)];
  };

  const appendText = () => {
    let newText: string;
    switch (radioOption) {
      case "first":
        newText = fruitData[0];
        break;
      case "second":
        newText = fruitData[1];
        break;
      case "random":
        newText = getRandomUnusedText();
        break;
      default:
        alert("Wybierz opcje z bloku pierwszego!");
    }
    setFruitText((prevFruitText) => {
      if (newText === "") {
        return prevFruitText;
      }
      if (prevFruitText.includes(newText)) {
        alert("Takie zdanie już jest wyświetlone!");
        return prevFruitText;
      }
      const updatedFruitText = [...prevFruitText, newText];
      return updatedFruitText.sort();
    });
  };

  return (
    <>
      <Header showData={showData} />
      <Body
        setRadioOption={setRadioOption}
        fruitText={fruitText}
        replaceText={replaceText}
        appendText={appendText}
      />
      <Footer setShowData={setShowData} resetText={setFruitText} />
    </>
  );
}

export default App;

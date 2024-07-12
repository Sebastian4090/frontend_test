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
    const response = await fetch("../fruitData.json");
    const data = await response.json();
    localStorage.setItem("fruitData", JSON.stringify(data));
    return data;
  }
};

function App() {
  const [showData, setShowData] = useState<boolean>(false);

  const [fruitData, setFruitData] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const data = await loadData();
      setFruitData(data.fruits);
    })();
  }, []);

  return (
    <>
      <Header showData={showData} />
      <Body />
      <Footer setShowData={setShowData} />
    </>
  );
}

export default App;

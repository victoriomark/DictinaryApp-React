import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Output from "./Components/Output";
import './App.scss'

function App() {
  const [text, setText] = useState("programing");
  const [data, setData] = useState([]);


  const apiKey = "67644cd5-665a-41af-8bcf-c4084cc191c1";
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${text}?key=${apiKey}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("Erwin mali",error);
    }
  };
    // useEffect for feching  data
  useEffect(() => {
   fetchData();
  }, [apiKey]);

  return (
    <>
      <Header />
      <main className=" container-fluid p-4">
        <Search Text={setText} fetchData={fetchData} />
        {text && <Output data={data} Text={text} />}
      </main>
    </>
  );
}

export default App;

import "./App.css";
import ImageList from "./components/ImageList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]); //для храненя списка изображений
  const [query, setQuery] = useState(""); // для хранения строки поиска

  // Обработчик изменения строки поиска
  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Функция для поиска изображений по строке поиска или вывода рандомных если строка пуста
  const searchImages = async () => {
    const id_user = "s0Chn-jmV1gQJMo_DTivpNJ4_PvXPFDzax-XLcEZWOg";
    const url = query
      ? `https://api.unsplash.com/search/photos?query=${query}`
      : `https://api.unsplash.com/photos/random?count=10`;

    try {
      const response = await axios.get(url, {
        headers: {
          authorization: `Client-ID ${id_user}`,
        },
      });
      // if (!response.ok) {
      //   throw new Error("Проверьте валидность вашего API-KEY");
      // }
      const result = query ? response.data.results : response.data;
      setImages(result);
    } catch (error) {
      console.error(`Ошибка при выполнении запроса`, error);
    }
  };

  useEffect(() => {
    searchImages();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2 style={{ fontSize: "2rem" }}> Unsplash gallery </h2>{" "}
      <input
        type="text"
        value={query}
        onChange={onInputChange}
        placeholder="Search..."
      />{" "}
      <button onClick={searchImages}>Search</button>
      <ImageList images={images} />
    </div>
  );
};

export default App;

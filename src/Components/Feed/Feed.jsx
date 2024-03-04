import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
import GifGrid from "../GifGrid.jsx/GifGrid";

function Feed() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);
  const [take] = useState(10); // Número de itens por página

  useEffect(() => {
    fetchGifs();
  }, [skip, take, searchTerm]);

  const fetchGifs = () => {
    let url = "https://api.giphy.com/v1/gifs/trending";

    if (searchTerm) {
      url = "https://api.giphy.com/v1/gifs/search";
    }

    axios
      .get(url, {
        params: {
          api_key: "pGKcBl1saWS5YihWgHWG7NVj04pSZwTx",
          limit: take,
          offset: skip,
          q: searchTerm,
        },
      })
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao obter GIFs:", error);
      });
  };

  const handleNextPage = () => {
    const newSkip = skip + take;
    setSkip(newSkip);
  };

  const handlePreviousPage = () => {
    if (skip > 0) {
      const newSkip = skip - take;
      setSkip(newSkip);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSkip(0);
    fetchGifs();
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setSkip(0);
    fetchGifs();
  };

  return (
    <div>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
      />
      <GifGrid gifs={gifs} />
      <button onClick={handlePreviousPage}>Página Anterior</button>
      <button onClick={handleNextPage}>Próxima Página</button>
    </div>
  );
}

export default Feed;

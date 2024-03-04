import React from "react";

function SearchForm({ searchTerm, setSearchTerm, handleSearch, handleResetSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite aqui..."
      />
      <button type="submit">Pesquisar</button>
      <button type="button" onClick={handleResetSearch}>
        Limpar Pesquisa
      </button>
    </form>
  );
}

export default SearchForm;

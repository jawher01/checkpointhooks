import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './Component/MovieList/MovieList';

import {moviesData} from "./Constant/Data"
import Filter from "./Component/Filter";
import Add from "./Component/Add/Add"


function App() {
  const [movie, setMovie] = useState(moviesData);
  const [searchText, setsearchText] = useState("");
  const [searchRate, setsearchRate] = useState(0);
  const handleAdd = (newMovie) => {
    if (newMovie.name !== "") {
      setMovie([...movie, newMovie]);
    }
  };

  return (
    <div>
      <div className="navmenu">
        <Filter
          rating={searchRate}
          setsearchRate={setsearchRate}
          setsearchText={setsearchText}
        />
        <Add handleAdd={handleAdd} />
      </div>

      <MovieList
        searchRate={searchRate}
        searchText={searchText}
        movie={movie}
      />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Celebirity from "./pages/Celebirity";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie"; 
import {movies} from "./movieDummy";
import MovieDetail from "./pages/MovieDetail";
import LoginButton from "./pages/LoginButton";
import LoginPage from "./pages/LoginPage"; 
import { tvDummy } from "./tvDummy";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LoginButton />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movie" element={
            <div className="app-container">
              {
                movies.results.map((item, index) => (
                  <Movie
                    poster_path={item.poster_path}
                    title={item.title}
                    vote_average={item.vote_average}
                    overview={item.overview}
                  />
                ))
              }
            </div>
          } />
          <Route path="/celebrity" element={<Celebirity />} />
          <Route path="/tv" element={<TV />} />
          <Route path={`/movie/:title`} element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
          
          
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
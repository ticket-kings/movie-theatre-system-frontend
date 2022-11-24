import React from 'react'
//import { Header } from '../../Components/Header/Header';
import { Back } from '../../Components/Back/Back';
import "./moviepage.css"

// Page for Individual Movies
const Moviepage = () => {
  return (
    <div className="movie">
    {/* <Header /> */}
    <div>
      <h1>Movie</h1>
      <div className="card">
        <input type="searchMovie" placeholder='Movie'/>
        <button>Search for Movie</button>
      </div>
      <button> View all Movies</button>
      <Back />
    </div>
  </div>
  )
}

export default Moviepage
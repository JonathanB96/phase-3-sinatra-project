import React, {useState, useEffect} from 'react'
import "./Home.css"
import Card from './Card';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom'


export default function Home() {

const [movie, setMovie] = useState([])
const [list, setList] = useState([]) 
const [genres, setGenres] = useState([])
const [search, setSearch] = useState("")
const [newGenre, setNewGenre] = useState("")
const history = useHistory()

//GET request as a side effect
useEffect(()=>{
    fetch('http://localhost:9292/movies')
    .then(res=>res.json())
    .then(data=>{
      //Updating the "recipe" state variable when the promise is resolved
      console.log(data)
        setMovie(data)
        setList(data)
       
    })
},[])

useEffect(()=>{
  fetch('http://localhost:9292/genres')
  .then(res=>res.json())
  .then(data=>{
    
    console.log(data)
    setGenres(data)
      
     
  })
},[])

//Search feature
function handleChange(e){
  setSearch(e.target.value)
  fetch(`http://localhost:9292/movies/${e.target.value}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setMovie(data)    
   
  })
  
}
function handleClick(){
  fetch('http://localhost:9292/movies')
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      setMovie(data)
      
  })
}

function findByGenre(e){
  fetch(`http://localhost:9292/genres/${e.target.value}`)
  .then(res=>res.json())
  .then(data=>{
    setMovie(data)
    console.log(data)
  })
}
function genreChange(e){
  setNewGenre(e.target.value)
}
//
const genreForm = {name:""}
function genreSubmit(e){
  e.preventDefault()
  genreForm.name = newGenre
  fetch("http://localhost:9292/genres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(genreForm)
    })
    .then(()=>{fetch('http://localhost:9292/genres')
    .then(res=>res.json())
    .then(data=>{      
       
        setGenres(data)
        
    })})
    setNewGenre("")
    
}

  
  return <>
    <section className='main-title'>
        <h1>All your favorite movies saved in one place</h1>
        <input id='search' placeholder='Search for one of your movies' value={search} onChange={handleChange}/>
        <button onClick={handleClick} className="card-btn">Show all</button>
        <select onChange={findByGenre}>
          <option>Sort by genre</option>
          {genres.map((genre)=>{return<option key={genre.id}>{genre.name}</option>})}
        </select>
        <form onSubmit={genreSubmit}>
          <input type="text" placeholder='Add a movie genre' value={newGenre} onChange={genreChange}/>
          <input type="submit" value="Add Genre" />

        </form>
        
        
    </section>
    

    <div className="container">
        {/* returning the Card comp for each obj in the array, 
        with that obj passed as a props */}
        { movie.map((obj)=>{return <Card movie = {obj} key={obj.id} />})}
    </div>
  </>
}

import React,{useState} from 'react'
import './AddMovie.css'
import { useHistory } from 'react-router-dom'

export default function AddMovie() {
  const [movieTitle, setmovieTitle] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [movieYear, setYear] = useState("")
  const[genre, setGenre] = useState("")

  const formData = {
    title: "",
    year:"",
    image_url:"",
    genre:""}
  const history = useHistory()

  function handleName(e){
    setmovieTitle(e.target.value)

  }
  function handleUrl(e){
    setImgUrl(e.target.value)

  }
  function handleSteps(e){
    setYear(e.target.value)

  }
  function handleGenre(e){
    setGenre(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

      formData.title = movieTitle
      formData.year= parseInt(movieYear)
      formData.image_url = imgUrl      
      formData.genre = genre

      fetch("http://localhost:9292/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(formData)
    })
    .then(()=>{history.push('/')})       
    
    } 
    

  return <>
  <div className="addrecipe-container">
  <form id='addRecipe-form' onSubmit={handleSubmit}>

    
    <input type="text" onChange ={handleName}
     value={movieTitle} id="recipeName" placeholder="Movie title.."/>

    
    <input type="text"  onChange ={handleUrl}
    value={imgUrl} id="imageUrl" placeholder="Image URL here"/>

    
    <input id="" type="text" onChange ={handleSteps}
    value={movieYear} placeholder="Year.."/>

    <input id="" type="text" onChange ={handleGenre}
    value={genre} placeholder="Genre.."/>

    <input type="submit" value="Submit"/>

  </form>
</div> 
  </>
}

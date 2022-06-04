import React, {useState} from 'react'
import './Card.css'

export default function Card({movie}) {
  const [btn, setBtn] = useState(true)
  
  //changing state when the btn is clicked
  function handleDeleteClick(e){
    console.log(e.target)
    fetch(`http://localhost:9292/movies/${movie.id}`, {method: "DELETE"})
    .then(res=>{setBtn(!btn)})
  
    
  }
  

  return <>
  <div className={btn?"card":"hide"} style={{backgroundImage: `url($)`}}>
      <h4>{movie.title}</h4>
      <h3>{movie.year}</h3>
     <img className='card-img' src={movie.image_url}/>

        
    
    <button className="card-btn" onClick={handleDeleteClick}>Delete</button>
  </div>
  
  </>
}

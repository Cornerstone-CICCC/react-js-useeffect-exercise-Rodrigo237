import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(message){
      console.log("Message updated:", message)
    }
  }, [message])

  const[likes, setLikes] = useState(0);

  useEffect(() => {
    if(likes > 0){
      console.log(`You have ${likes} likes!`);
    }
  }, [likes]);


  const [color, setColor] = useState("red");
  
  useEffect(() => {
    console.log(`The selected color is ${color}`);
  }, [color]);

  return (
    <>
      <div style={{padding: 20}}>
        <h2>Message</h2>
        <button onClick={()=> setMessage("Hello from React!")}> Send Message</button>

        <h2>Likes</h2>
        <button onClick={()=> setLikes(likes + 1)}> Like ({likes})</button>

        <h2>Color</h2>
        <button onClick={() => setColor((prev)=>(prev === "red" ? "blue":"red"))}>Change Color</button>
      
      <div style={{
        width:100,
        height:100,
        backgroundColor: color,
        marginTop: 10,
        borderRadius: 8
      }}
      ></div>
      
      </div>
      
    </>
  )
}

export default App

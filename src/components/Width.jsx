import React,{useState,useEffect} from 'react'

function Width() {
  const[display,SetDisplay]=useState(window.screen.width)
  const actualWidth=()=>{
    console.log(window.innerWidth);
    SetDisplay(window.innerWidth)
  }
  useEffect(() => {
  console.log("Added");
  window.addEventListener("resize",actualWidth)
   
    return(()=>{
        console.log("Removed");
         window.removeEventListener("resize",actualWidth)  
    })  
    
  });
 
  return (
    <div><h2>Width of screen is {display} Px</h2> <hr />
    </div>
  )
}

export default Width

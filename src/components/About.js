import React from 'react'
import {Link} from "react-router-dom"

export default function About() {
    console.warn("this is about ")
  return (
    <>
    <div>About</div>
    <Link to="/about">About page</Link>
    </>
  )
 
}

 
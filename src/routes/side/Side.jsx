import React, { useState}  from 'react'
import './side.css'
import { FaArtstation } from  "react-icons/fa"

const Side = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <nav className="navigation1">
    <a href="/getstarted" className="brand-name">
      Python
    </a>
    <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
   
   < FaArtstation/> 
     
    </button>
    <div
        className={
          isNavExpanded ? "navigation-menu1 expanded" : "navigation-menu1"
        }
      >
        <ul>
  
          <li><a href="/getstarted">Get Started</a></li>
          <li>    <a href="/variable">Variables</a></li> 
<li>    <a href="/datatypes">Data Types</a></li>


 <li>   <a href="/pythonfunction">Functions</a></li>
    
<li>    <a href="#more">Classes(OOP)</a></li>
   
    <li>  <a href="#work">File Handling</a></li>
<li>    <a href="#friends">Modules</a></li>
 <li>   <a href="#partners">Pandas</a></li>
   <li> <a href="#people">Scipy</a></li>
    <li><a href="#work">Numpy</a></li></ul>
      </div>
      </nav>
  )
}

export default Side
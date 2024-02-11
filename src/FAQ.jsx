import React, { useState } from 'react'

export default function FAQ({id,title,desc}) {
    console.log(title,id,desc)
    const [toggle ,setToggle] =useState (false)
    const toggleHandeler =()=>{
        setToggle (!toggle)
    }
  return (
    <article>
        <div> 
            <h4>{title}</h4>
            <button onClick={toggleHandeler}>{toggle ? "-" : "+"}</button>
        </div>
       {toggle &&  <p>{desc}</p>}
    </article>
  )
}


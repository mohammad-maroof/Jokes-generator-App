import React, { useEffect, useState } from 'react'
import './Jokegenerator.css'

function Jokegeneretor() {
    const[jokes, setjokes]=useState("")
    const[isLoading, setisLoading]=useState("")
    const fetchJokes=async()=>{
        setisLoading(true)
        const res=await fetch('https://api.chucknorris.io/jokes/random')
        const data=await res.json()
        console.log(data);
        setjokes(data);
        setisLoading(false)
    };
    useEffect(()=>{
     fetchJokes();
    },[])
  return (
    <div className='Jokeapp'>
        <h1>
            Random Jokes Generator😀😀
            </h1>
            {isLoading?(<h3>Loading...</h3>):(<p>
            {jokes.value} 
            </p>)}
            
            <button onClick={fetchJokes}>Generate New Joke </button>
        

    </div>
  )
}

export default Jokegeneretor
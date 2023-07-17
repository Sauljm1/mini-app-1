import React from 'react';
import {useState, useEffect}   from 'react'

import ReactDOM from 'react-dom/client';

export const Level0 = ()=>{

    const [movies, setMovies] = useState([]);

    // const movies = [
    //     {title: 'Mean Girls'},
    //     {title: 'Hackers'},
    //     {title: 'The Grey'},
    //     {title: 'Sunshine'},
    //     {title: 'Ex Machina'},
    //   ];  
    
    useEffect(() => {
        fetch('http://localhost:3002/')
          .then(res => res.json())
          .then(data => setMovies(data))
      }, [])  // ONLY THIS LINE HAS BEEN CHANGED

return (
    <div className='movie_title' align-text = 'center'>
    <ul>
        {movies.map((elem, index) => <li>Movie Title: {elem.title}</li>)}
    </ul>
    </div>
  
)

}
//export default Level0
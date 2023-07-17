import React from 'react';
import ReactDOM from 'react-dom/client';

export const Level0 = ()=>{

    const movies = [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ];   

return (
    <div className='movie_title' align-text = 'center'>
    <ul>
        {movies.map((elem, index) => <li>Movie Title:      {elem.title}</li>)}
    </ul>
    </div>
  
)

}
//export default Level0
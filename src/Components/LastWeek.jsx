import React, {useState, useEffect} from "react";
import axios from "axios";

    
     
    
    function NextWeek() {
      const [query, setQuery]= useState([])
        useEffect(()=> {
            axios.get("https://api.themoviedb.org/3/movie/tt0119116?api_key=0af5b4f32534825e575111d5029fb03e")
        .then((res) =>{
            console.log(res.data);
            setQuery(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
//     

    
    return(
      <div className="NextWeek">
           
      <h2 className="movie-title"><center>{query.title}</center></h2>
     <img className="imgDiv" src={query.poster_path}></img>

      <center><p className="movie-tagline">{query.tagline}</p></center>
      <p className="overview">{query.overview}</p>
      <iframe className="frame" width="574" height="323" src="https://www.youtube.com/embed/W0FbB0Y9NV8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
      {console.log(query)}
      
  </div>
        
        
        
    )
    
 }

export default NextWeek

// import React from 'react'


// function LastWeek() {
//   return (
//     <div>
        
//         <div>
//             Last week
//         </div>



    
//     </div>
//   )
// }

// export default LastWeek
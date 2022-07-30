
import React, {useState, useEffect} from "react";
import axios from "axios";


    
     
    
    function ThisWeek() {
      const [query, setQuery]= useState([])
        useEffect(()=> {
            axios.get("https://api.themoviedb.org/3/movie/tt0845046?api_key=0af5b4f32534825e575111d5029fb03e  ")
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
           
        <center><h2 className="movie-title">{query.title}</h2></center>
           <img className="imgDiv" src="{`https://image.tmdb.org/t/p/w500${search.poster_path}`}"></img>

            <p className="movie-tagline"><center>{query.tagline}</center></p>
            <p className="overview">{query.overview}</p>
            <iframe className="frame" width="300" height="300" src="https://www.youtube.com/embed/CsAChn35HSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {console.log(query)}
            
        </div>
        
        
        
    )
    
 }

export default ThisWeek




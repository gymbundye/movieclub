import React, {useState, useEffect, useContext} from "react";
import axios from "axios";


    
     
    
    function Search() {
      const [search, setSearch]= useState([])
      const [query, setQuery]= useState('')
      

      
      


        function Searching(movie){
            setQuery(movie.target.value)
        }

        useEffect(()=> {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0af5b4f32534825e575111d5029fb03e&language=en-US&page=1&include_adult=false&query=${query}`)
        .then((res) =>{
            console.log(res.data.results);
            setSearch(res.data.results);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[query]);
    


    

    
    return(
        <div className="Search">
            <form>
                <h3 className="searchbar">
                Have a look through our huge database for Movies young and old!
                
             <center><input className="searchBar" type="text" placeholder="Search!" value={query} onChange={search=>(Searching(search))}></input></center>
            </h3></form>
            {search.map((search, index)=>(
                <div className="search">
                
                <div key={index}>
                       
                        <div className="poster">
                       <center> <p>{search.title}</p></center>
                        <p>{search.tagline}</p>
                        <p>{search.overview}</p>
                       <center> <img width="50%" alt="Movie Posters" src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}/></center>
                        <br/>
                        
                    </div>
                    </div> 
                        
                        
                        
                    {/* {console.log(search.results)} */}
                    </div>
                    
            ))}
    
    </div>
    )
}

export default Search
import React from 'react'

import Footer from './Footer'

function AboutUs() {
  return (
      
    <div className='AboutUs'>
        
        
        <p className='about'><center>What is Movie Club Society?</center><br></br>We LOVE movies. Who doesn't. But during the dark times of the Pandemic my two friends and I could no longer go out and enjoy going to the movies in the same way. New movies were not coming out, and if they did it was home release only.  We came up with a fun way to still enjoy movies and scratch that itch we were missing in  our lives. The gist of "Movie Club Society" is simple. Every week we take a turn picking a movie. We watch it seperatley through out the week whenever we can find the time. We meet on Mondays to talk about it. Simple. We have seen alot of cool movies this way. We have seen a lot of garbage movies this way. Part of the fun of the club is that you never know what you are going to get! </p>
    <div className='who'><center> Who are we?</center>
    </div>
    <div className='rules'>Rules:
      
        <ul title='Rules'>
          <li>You alternate movie picks.</li>
          <li>Even if you have seen the movie before you must watch it during its week.</li>
          <li>Every club decides one movie that may NEVER be watched (ours is that all girl Ghostbusters movie).</li>
          <li>During the month of October it has to be a scary movie.</li>
          <li>During the month of December it has to be an X-mas movie.</li>
          <li>If it is your Birthday month you pick a movie for all to watch.</li>
        </ul>
      </div>
    <Footer/>
    </div>
  )
}

export default AboutUs
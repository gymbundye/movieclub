import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import OurPicks from './Components/OurPicks';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import LastWeek from './Components/LastWeek';
import ThisWeek from './Components/ThisWeek';
import NextWeek from './Components/NextWeek';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='NextWeek' element={<NextWeek/>}/>
        <Route path='ThisWeek' element={<ThisWeek/>}/>
        <Route path='LastWeek' element={<LastWeek/>}/>
        <Route path='Search' element={<Search/>}/>
        <Route path='OurPicks' element={<OurPicks/>}/>
      </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

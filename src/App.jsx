import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer' 
import Main from './components/Main'
import Header from './components/Header'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import MentionLegale from './Pages/MentionLegale'
import Portfolio from './Pages/Portfolio'
import ProfilGithub from './Pages/ProfilGithub'
import Services from './Pages/Services'
import './App.css'

const App =()=>{
  return (
    <>
        
        
        <Header />
       
        
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/MentionLegale" element={<MentionLegale />}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/ProfilGithub" element={<ProfilGithub/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
          </Routes>
          
          
        <Footer />
      

     
    </>
  )
}

export default App


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
        <div className="App">
        
        <Header />
        <main className='card'>
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/galerie" element={<Galerie />}></Route>
            <Route path="/temoignages" element={<Temoignages />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
          
        </main>
        <Footer />
      </div>

     
    </>
  )
}

export default App


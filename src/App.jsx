import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import MentionLegale from './Pages/MentionLegale'
import Portfolio from './Pages/Portfolio'
import ProfilGithub from './Pages/ProfilGithub'
import Services from './Pages/Services'
import './App.css'

function App() {
  

  return (
    <>
    <div className="App">
        <Header />
        <main className='card'>
       
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/MentionLegale" element={<MentionLegale />}></Route>
            <Route path="/Portfolio" element={<Portfolio />}></Route>
            <Route path="/ProfilGithub" element={<ProfilGithub />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
         
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

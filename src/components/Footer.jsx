import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Footer = ()=> {
  const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (menuRef.current &&
              !menuRef.current.contains(event.target) &&
              headerRef.current &&
              !headerRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };


    return (
  
      <footer>
            <div className="foot">
              
                <article>
                <h4>JOHN DOE</h4>
                <address>40 rue Laure Bielbold</address>
                <address>69009 Lyon France</address>
                <address>1020304050</address>
                <address>johndoe@gmail.com</address>
               
               </article>
               <article className="liens">
               <nav className={isOpen ? "nav-menu open" : "nav-menu"} ref={menuRef} onClick={() => setIsOpen(false)}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Contact"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/MentionLegale"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Mention légale
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Portfolio"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ProfilGithub"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Profil Github
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Services"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Services
                        </NavLink>
                    </li>
                </ul>
            </nav>

               </article>

               <article className="realisation">
                <h4>Mes dernières réalisation</h4>
                <span>Fresh food</span>
                <span>Restaurant akira</span>
                <span>Espace bien être</span>
                <span>SEO</span>
                <span>Création d'une api</span>
                <span>Maquette d'un site</span>
               </article>
            </div>
      </footer>
    
  )
},
},
export default Footer
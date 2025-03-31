import { NavLink ,Link} from 'react-router-dom'



const Header = () => {
   return(
  <>
  <ul>
    <li>
        <NavLink to="/">Accueil</NavLink>
    </li>
    <li>
        <NavLink to="Contact">Contact</NavLink>
    </li>
    <li>
        <NavLink to="MentionLegale">Mention legale </NavLink>
    </li>
  </ul>
  
  </>

   )
    ;
};

export default Header;

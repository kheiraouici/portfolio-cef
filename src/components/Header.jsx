import { NavLink ,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
   return(
  <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">John Doe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/MentionLegale">MentionLegale</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/ProfilGithub">Profil Github</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>

   )
    ;
};

export default Header;

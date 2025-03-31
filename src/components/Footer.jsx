import Nav from 'react-bootstrap/Nav';

const Footer = ()=> {

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
               <h4>Liens Utiles</h4>
               <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/MentionLegale">MentionLegale</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/ProfilGithub">Profil Github</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
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
  
  }
  
  export default Footer
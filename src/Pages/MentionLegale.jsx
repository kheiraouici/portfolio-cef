import { AccordionBody, AccordionHeader } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function MentionLegale () {
  return (
    <><div><h1>Mentions légales</h1></div>
    <hr />

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Editeur du site</Accordion.Header>
        <Accordion.Body>
        <h4>JOHN DOE</h4>
                <address>40 rue Laure Bielbold</address>
                <address>69009 Lyon France</address>
                <address>1020304050</address>
                <address>johndoe@gmail.com</address>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
         <h3>Always data</h3>
         <address>91 rue du Faubourg Saint Honoré</address>
                <address>75008 Partis</address>
                <address>www.alwaysdata.com</address>
        </Accordion.Body>
      </Accordion.Item>
    
    <Accordion.Item eventKey="1">
        <Accordion.Header>Crédit</Accordion.Header>
        <Accordion.Body>
          Ce site a été réalisé par John doe, étudiant au Centre Européen de Formation
          Les images utilisées sur se site sont libres de droits et ont été obtenue sur le site Pixabay
          le favicon du site a été fournit par john doe icon erstellt von freepik
        </Accordion.Body>
      </Accordion.Item>

       </Accordion>
     
  

    </>
   
  );
}

export default MentionLegale;
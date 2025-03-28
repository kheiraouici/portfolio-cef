import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Conct =()=>{
    return(
        <>
        <h1>Contact</h1>
        <h6>Pour me contacter en vue d'un entretien ou d'une future collaboration
            merci de remplir le champs de formulaire
        </h6>
        <div class="d-flex flex-row bd-highlight mb-3">gauxche
  <div class="p-2 bd-highlight">
    <h4>Formulaire de contact</h4>
    <hr />
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Votre nom</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
     
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
       
      <InputGroup className="mb-3">
        <InputGroup.Text>Sujet</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Votre message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
  </div>
  <div class="p-2 bd-highlight">
    <h4>Mes coordonnées</h4>
    <hr />
    <h4>JOHN DOE</h4>
                <address>40 rue Laure Bielbold</address>
                <address>69009 Lyon France</address>
                <address>1020304050</address>
                <address>johndoe@gmail.com</address>
                
  </div>
</div>
        </>
    )
}
export default Conct
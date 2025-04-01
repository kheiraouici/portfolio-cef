import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Conct =()=>{
    return(
        <>
        <h1>Contact</h1>
        <h6>Pour me contacter en vue d'un entretien ou d'une future collaboration
            merci de remplir le champs de formulaire
        </h6>
        <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    <h4>Formulaire de contact</h4>
    <hr />
  <form action="#">
   <p> <input type="Votre-nom" value="votre-nom" /></p>
   <p> <input type="votre-Email" value="votre-email" /></p>
   <p> <input type="Votre numéro de téléphone" value="votre-numéro-de-téléphone" /></p>
   <p><textarea name="votre-message" id="">Votre message</textarea></p>

  </form>
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
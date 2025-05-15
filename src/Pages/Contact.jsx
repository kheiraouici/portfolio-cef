import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Contact.css"


const Conct =()=>{
    return(
        <>
        <section className='contacte'>
        <h1>Contact</h1>
        <h6>Pour me contacter en vue d'un entretien ou d'une future collaboration
            merci de remplir le champs de formulaire
        </h6>
        <hr />
        <div class="center">
  <div class="formulaire">
    <h4>Formulaire de contact</h4>
    <hr />
  <form action="#">
   <p> <input type="Votre-nom" value="votre-nom" /></p>
   <p> <input type="votre-Email" value="votre-email" /></p>
   <p> <input type="Votre-numéro-de-téléphone" value="votre-numéro-de-téléphone" /></p>
   <p><textarea name="votre-message" id="box">Votre message</textarea></p>

  </form>
  </div>
  <div class="coordonnées">
    <h4>Mes coordonnées</h4>
    <hr />
    <h4>JOHN DOE</h4>
                <address>40 rue Laure Bielbold</address>
                <address>69009 Lyon France</address>
                <address>1020304050</address>
                <address>johndoe@gmail.com</address>
                <img className='maps' src="assets/images/mapsLyon.jpg" alt="" />
               </div>
</div>
</section>
        </>
    )
}
export default Conct
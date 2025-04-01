import { ProgressBar } from "react-bootstrap";


const Home = ()=> {

  return (
    <main>
     <div className="project">
      <h1>Bonjour je suis JOHN DOE</h1>
      <h2>Développeur web full stack</h2>
      <article>
        <img className="feature" src="./assets/images/hero-bg.jpg" alt="ordinateur" />
      </article>
     </div>
   <div className="left">
   <div class="p-2 bd-highlight"> <hr />
      <article>
        <img src="./assets/images/john-doe.jpg" alt="" />
        <h2>à propos de moi</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur explicabo facilis accusamus velit quidem laboriosam labore autem eaque distinctio, blanditiis iure
           excepturi laborum nostrum ad deleniti ullam cumque, sapiente unde?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Rem saepe cumque sunt doloremque autem quidem eius laudantium? 
           Eaque possimus perferendis cumque consequuntur, quas voluptatibus perspiciatis, maiores suscipit, laboriosam cum modi?
           </p>
      </article>
      </div>
   <div class="p-2 bd-highlight"> <h2>Compétences</h2>
    <hr />
    <div className="skills-list">
      <div className="skills-item">
      <span>HTML5 90%</span>
      <ProgressBar variant="danger" now={90} />
          <span>CSS3 80% </span>
          <ProgressBar variant="info" now={80} />
           <span>Javascript 70%</span>
           <ProgressBar variant="warning" now={70} />
        </div>
        <div>
           <span>PHP 80%</span>
           <ProgressBar variant="success" now={80} />
        </div>
        <div>
        <span>React 50%</span>
           <ProgressBar variant="info" now={50} />
        </div>
      </div> 
    </div>
    </div>
   </main>



  )
}
export default Home


// src/pages/Home.jsx
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="profile-container">
        <div className="profile-image">
          {/* Remplacez par votre propre image */}
          <div className="placeholder-image">Votre Photo</div>
        </div>
        <div className="profile-content">
          <h1>Bonjour, je suis GROUPE 7 </h1>
          <h2>Développeur Full Stack</h2>
          <p>
            Bienvenue sur mon portfolio. Je suis passionné par le développement web
            et la création d'applications performantes et intuitives. Spécialisé en
            React.js, Node.js et d'autres technologies modernes.
          </p>
          <div className="skills">
            <h3>Compétences</h3>
            <div className="skills-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Node.js</span>
              <span>Git</span>
              <span>Java</span>
              <span>Docker</span>
              <span>Boostrap</span>
              <span>C#</span>
              <span>UX/UI design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
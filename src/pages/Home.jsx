import './Home.css';
import profileImage from '../../public/image1.jpeg';

function Home() {
  return (
    <div className="home">
      <div className="profile-container">
        <div className="profile-image">
          <div className="placeholder-image">
            <img src={profileImage} alt="Profil GROUPE 7" />
          </div>
        </div>
        <div className="profile-content">
          <h1>Bonjour, Nous sommes GROUPE 7 </h1>
          <h2>Développeur Full Stack</h2>
          <p>
            Bienvenue sur notre portfolio. Nous sommes passionnés par le développement web
            et la création d'applications performantes et intuitives. Spécialisés en
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
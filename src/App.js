import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import CortanaImage from './images/cortana.png';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title='Alexa' handle='@alexa99' image={CortanaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title='Cortana' handle='@cortana44' image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title='Siri' handle='@siri101' image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
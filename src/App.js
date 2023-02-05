import ProfileCard from './ProfileCard';
import CortanaImage from './images/cortana.png';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title='Alexa' handle='@alexa99' image={CortanaImage} />
      <ProfileCard title='Cortana' handle='@cortana44' image={AlexaImage} />
      <ProfileCard title='Siri' handle='@siri101' image={SiriImage} />
    </div>
  );
}

export default App;
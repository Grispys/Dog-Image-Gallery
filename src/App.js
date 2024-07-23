import './App.css';
import Sound from 'react-sound';
import MusicBox from './assets/ladyfingers.mp3' 
import JankSolution from './components/JankSolution';
import image from './assets/dogceo.png'
import './assets/form-control.css'

function App() {
  return (
    <div className="App">
      <p>Welcome to Canines & Other Delights. <img src={image} alt='doggy' height={50} width={50} title='Thanks to dog.ceo and Stanford Dogs for the API dataset.'/></p> 
      <header className="App-header">
        <Sound
          url={MusicBox}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          loop={true}
        />
      <JankSolution/>
      </header>
      hello!
    </div>
  );
}

export default App;

import './App.css';
import MusicBox from './assets/ladyfingers.mp3' 
import JankSolution from './components/JankSolution';
import image from './assets/dogceo.png'
import './assets/form-control.css'

function App() {
  return (
    <div className="App">
      <p>Welcome to Canines & Other Delights. <img src={image} alt='doggy' height={50} width={50} title='Thanks to dog.ceo and Stanford Dogs for the API dataset.'/></p> 
      <header className="App-header">
        {/* unfortunately, react-sound was causing some errors when it was not installed on end-user terminals. For simplicity it has been removed. */}
      <JankSolution/>
      </header>
      <p>Remember to allow this website to "autoplay audio" for the full experience.</p>
    </div>
  );
}

export default App;

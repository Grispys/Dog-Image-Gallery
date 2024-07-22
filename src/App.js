import './App.css';
import Sound from 'react-sound';
import MusicBox from './assets/GrandmasRemorse.mp3' 
import Doggs from './components/Doggs';
import ImageGallery from './components/ImageGallery';
function App() {
  return (
    <div className="App">
      <p>Welcome to Eye Candy<br/> Here, with soothing colours and serene music, you can look at cute dogs. Ease your brain. Eye Candy. </p>
      <header className="App-header">
        <Sound
          url={MusicBox}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          loop={true}
        />
      <Doggs />
      <ImageGallery/>
      </header>
    </div>
  );
}

export default App;

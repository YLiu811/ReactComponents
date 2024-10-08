import VideoPlayer from './VideoPlayer';
import Recommendations from './Recommendations';
import Comments from './Comments';
import './App.css';

function App() {
  
  return (
  <div className='App'>
    <div className='columns'>
      <div className='primary'>
        <VideoPlayer />
        <Comments />
      </div>
      <div className='secondary'>
          <Recommendations />
      </div>
    </div>
  </div>
  );
}

export default App;

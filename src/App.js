import logo from './logo.svg';
import './App.css';

function App() {
  let commentsData = [
    { creator: "A", comments: "YAY", likedCount: 1 },
    { creator: "B", comments: "GOOD", likedCount: 10 },
    { creator: "C", comments: "NICE", likedCount: 2 },
  ]
  return (
  <div className='App'>
    <div className='columns'>
      <div className='primary'>
        <div className='video-player'>Video-Player</div>
        <div className='comments'>
          {commentsData.map((comment)=>{
            return (
              <div className='comment'>
                <h3 classname='comment-header'>{ comment.creator }</h3>
                <p className='comment-body'>{ comment.comment }</p>
                <div className='comment-actions'>
                  <button>Like</button>
                  <span> {comment.likedCount }</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='secondary'>
          <div className='recommendations'>Recommendations</div>
      </div>
    </div>
  </div>
  );
}

export default App;

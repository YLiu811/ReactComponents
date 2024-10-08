import logo from './logo.svg';
import './App.css';

function App() {
  let lists = ["1h", "2e", "3l", "4lo"];
  let listsHTML = lists.map((list) => {
    return (<li>{list}</li>)
  });
  return (
    <ul className='listsHTML'>
      {listsHTML}
    </ul>
  );
}

export default App;

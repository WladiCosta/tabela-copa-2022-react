import './App.css';
import GolsCopa from './components/GolsCopa';


function App() {
  return (
    <div className="App">
      <div className="logo-app">
        <img src="/assets/img/cup2022-logo.png" alt="" srcset="" />
      </div>
        
      <div className="grupo">
        <GolsCopa />
      </div>
    </div>
  );
}

export default App;

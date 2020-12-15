import logo from './logo.png';
import './App.css';
import { NavBar } from './components/appBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         nomos.io
        </p>
        <a
          className="App-link"
          href="mailto: contact@healtrex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask us how nomos.io can help you
        </a>
      </header>
    </div>
  );
}

export default App;

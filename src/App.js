import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import Header from './components/Header';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SideImage from './components/SideImage';
import Main from './components/Main';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Header />
      <SideImage />
      <SideNav />
      <TopNav />
      <Main />
    
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

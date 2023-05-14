import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import SideImage from './components/SideImage';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <SideImage />
      <SideNav />
      <TopNav />
      <Main />
    
    </div>
  );
}

export default App;

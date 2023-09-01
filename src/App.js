import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousal from './components/Carousal';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App">
      <>
        <Navbar title="Das" home="Home"/>
        <Carousal/>
        <div className="container my-3">
          <TextBox/>
        </div>
      </>
    </div>
  );
}

export default App;

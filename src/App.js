import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="App">
      <>
        <Navbar title="Das1" home="Home"/>
        <div className="container my-3">
          <Textbox/>
        </div>
      </>
    </div>
  );
}

export default App;

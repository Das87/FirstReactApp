import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import Printer from './components/Printer';

function App() {
  return (
    <div className="App">
      <>
        <Navbar title="Das" home="Home"/>
        <div className="container my-3">
          <Textbox/>
        </div>
        {/* <div className="container">
          <Printer/>
        </div> */}
      </>
    </div>
  );
}

export default App;

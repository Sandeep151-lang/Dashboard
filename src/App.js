import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Demo from './components/Demo';
import Layout from './components/Layout';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout children={<Dashboard/>}/>}>
      <Route path='/Demo' element={<Demo />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

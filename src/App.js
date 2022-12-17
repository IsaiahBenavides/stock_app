import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    function App() {
      return (
        <div className="App">
          <Nav/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/stocks' element={<Dashboard />} />
            <Route path='/stocks/:symbol' element={<Stock />} />
          </Routes>
        </div>
      );
    }
  );
}

export default App;

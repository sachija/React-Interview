import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
     
    </div>
   </BrowserRouter>
  );
}

export default App;

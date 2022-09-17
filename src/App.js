import './App.css';
import Home from './Home';
import Login from "./Login";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter >
    <Routes>
      <Route exact path="/" element={<Login />}>
        
      </Route>
      <Route path="/home" element={ <Home />}>
       
      </Route>
      <Route path="*"  element={<Home></Home>} ></Route>
    </Routes>
  </BrowserRouter>
  
  </div>
    );
}

export default App;

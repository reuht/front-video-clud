// import './App.css';
import Movies from './components/Movies/Movies';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
  );
}

export default App;

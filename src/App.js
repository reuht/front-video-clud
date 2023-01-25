// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import Movies from './components/Movies/Movies';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Movies/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;

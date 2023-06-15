import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Layout/>}></Route>
          <Route path="login" element={<Login/>}/>
          <Route path="reg" element={<Register/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

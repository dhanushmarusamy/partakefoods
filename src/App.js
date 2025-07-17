// import logo from './logo.png';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Food from './pages/Food';
import Partake from './pages/Partake';
import Venillacake from './pages/venillacake';
import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Upload from './pages/Upload';
import Getdelete from './pages/Getdelete';
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Validation from './pages/Validation';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Food/>}/>
        <Route path='/outstory' element={<Venillacake/>}/>
<Route path='/integrents' element={<Partake/>}/>
<Route path='/o' element={<Upload/>}/>
<Route path='/n' element={<Getdelete/>}/>
<Route path='edit/:id'element={<Edit/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/validation' element={<Validation/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     {/* <Header/>
     <Home/>
     <Footer/>
     <Food/>
     <Footer/>
     <Partake/>
     <Footer/>
     <Venillacake/>
     <Footer/> */}
    </div>
  );
}

export default App;

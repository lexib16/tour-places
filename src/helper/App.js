import './App.scss'
import Header from '../components/header/Header';
import Main from '../components/Main/main';
import Navbar from '../components/navbar/Navbar';
const App = () =>{
  return (
  <div className="App">
    <Navbar/>
    <Header/>
    <Main/>
  
  </div>
  )
};


export default App;
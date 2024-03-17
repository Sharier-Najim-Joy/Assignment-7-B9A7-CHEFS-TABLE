
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Main/Recipes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  


  return (
    <>
      
      <Header></Header>
      <Recipes></Recipes>
      <ToastContainer></ToastContainer>
       
    </>
  )
}

export default App

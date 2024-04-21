import NavBar from './components/NavBar';
import './App.css'
import ItemListContainer from './components/Itemlistcontainer/ItemlistContainer';
function App() {
  

  return (
   <div>
    <NavBar/>
    <ItemListContainer saludo ="Bienvenido a Cosito Ecommerce"/>
   
   </div>
  )
}

export default App

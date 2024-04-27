import './App.css'
import Footer from './Shared/Footer'
import About from './assets/Components/About'
import Feature from './assets/Components/Feature'
import Home from './assets/Components/Home'
import Navbar from './assets/Components/Navbar'
import Newsletter from './assets/Components/Newsletter'
import Pricing from './assets/Components/Pricing'

function App() {

  return (

    <>
 { /*import Components here*/}   
   <Navbar/>
   <Home/>
   <Feature/>
   <About/>
   <Pricing/>
   <Newsletter/>
   <Footer/>
    </>
  )
}

export default App

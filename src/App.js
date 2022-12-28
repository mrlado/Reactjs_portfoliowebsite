import logo from './logo.svg';
import './App.css';
// import ButtonBg from './Assets/Button.svg'
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './AppM.css'
import Hero from './Components/Hero';
import { useEffect, useState } from 'react';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { motion } from "framer-motion"
import useScreenType from 'react-screentype-hook';
import Particles from "react-particles";
import { particlesData } from './Components/particles';
import RingLoader from "react-spinners/RingLoader";


function App() {
  const screenType = useScreenType();
  const [screenY,setscreenY] =useState(0) 
  const [screenX,setscreenX] =useState(0) 
  const [loader , setLoader] = useState(true)

useEffect(()=>{

  window.addEventListener('load', ()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },2000)
  })

  setTimeout(()=>{
    setLoader(false)
  },2000)

  setTimeout(function() {
  window.addEventListener('mousemove', (e)=>{
      setscreenY(e.pageY)
      setscreenX(e.pageX)
  })
}, 3000);

},[])




const variant = {
  default:{
    x:screenX-15,
    y:screenY-60
  }
}




  return (<>
    <div className={loader ? 'spinner' : 'spinner disabled'}><RingLoader color="#FFD400" /></div> 
    <>
  <div className='area'>
        <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div>
{screenType.isMobile
?  
' ' 
: <>
{screenX ===0 ? 
  <motion.div
  className='mouse'
  style={{opacity:'0'}}
  variants={variant}
  animate='default'
></motion.div> 
:
<motion.div
  className='mouse'
  variants={variant}
  animate='default'
></motion.div>}
</>}
    <div className="App">
      <header className="App-header">
        <Header X={screenX} Y={screenY}/>
      </header>
      <div className='Body'>

          <Hero/>
          <Aboutme/>
          <Skills/>
          
      </div>
      <footer>
        <Projects/>
        <Contact/>
      </footer>
    </div>
    
    
    </>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import LogoS from '../Assets/Logo.svg'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import useScreenType from "react-screentype-hook";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Header = (props) => {
  const screenType = useScreenType();
  const [hamburgermenu , setHamburgerMenu] = useState(false)
  const [Logoview, setLogoView] = useState(false)






const Hamburgetmenu = () =>{
  setHamburgerMenu(!hamburgermenu)
}

  return (
    <div className='hader'>
        {screenType.isMobile 
        ? 
        <div className='navigation'>
            <div className="logo">  <img src={LogoS} alt="logo" /></div>
            <div className="hamburgermanuIcon" onClick={Hamburgetmenu}>{hamburgermenu ? <HighlightOffIcon/> :<MenuOpenIcon sx={{width:'100%', height:'100%'}}/>}</div>
            <div className={hamburgermenu ? 'activ' : 'disable'}>
            <ul>
                <a href="/"><li onClick={Hamburgetmenu} >Home</li></a>
                <a href="#aboutMe" onClick={Hamburgetmenu} ><li>About</li></a>
                <a href="#skills" onClick={Hamburgetmenu} ><li>Skills</li></a>
                <a href="#projects" onClick={Hamburgetmenu} ><li>Projects</li></a>
                <a href="#contacts" onClick={Hamburgetmenu} ><li>Contacts</li></a>
                <a href="/"><button><li>Resume</li></button></a>
            </ul>
            </div>
        </div> 
        
        : <div className='navigation'>
             {props.X !== 0 ?<div className="logo" style={{opacity:'0'}} > <img src={LogoS} alt="logo"  style={{opacity:'0'}}/></div> :  <div className="logo">  <img src={LogoS} alt="logo" /></div> }
            <ul>
                <a href="/"><li className='TextAnimate'>Home</li></a>
                <a href="#aboutMe" ><li className='TextAnimate'>About</li></a>
                <a href="#skills"><li className='TextAnimate'>Skills</li></a>
                <a href="#projects"><li className='TextAnimate'>Projects</li></a>
                <a href="#contacts"><li className='TextAnimate'>Contacts</li></a>
                <a href="/"><button className='hoverbtn'><li>Resume</li></button></a>
            </ul>
        </div>}
    </div>
  )
}

export default Header
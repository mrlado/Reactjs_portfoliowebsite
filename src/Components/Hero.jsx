import React from 'react'
import HeroBG from '../Assets/Myphotobg.svg'
import Linkedin from '../Assets/Linkdin.svg'
import FB from '../Assets/Fb.svg'
import Instagram from '../Assets/Instagram.svg'
import Github from '../Assets/Github.svg'
import Myphoto from '../Assets/Myphoto.png'


const Hero = () => {

    const firstName = Array.from('lado')
    const Lastname = Array.from('Merabishvili')



  return (
    <div className='hero'>
    <div className='herotextbutton'>
      <p>Hello, I'm</p>
      <div className='Mynameconteiner'>
        {firstName.map((value, index, array) => {
            return<button className='Myname' key={index}>{value}</button>
             })}
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             {Lastname.map((value, index, array) => {
            return<button className='Myname' key={index}>{value}</button>
             })}</div>
      <p>Front end engineer</p>
      <span>  I enjoy creating things that live on the internet.<br/>
            My interest in web development started back in 2021</span>
      <br/>
      <a href='#contacts'><button className='heroButton hoverbtn'>Let's Talk</button></a>
      <div className='checkOut'>
        <p>Check out my:</p>
        <div className='linkedin herobtnHover'><a href="/" /> <img  src={Linkedin} alt='Linkedin'/></div>
        <div className='FB herobtnHover'><a href="/" /> <img src={FB} alt='FB'/></div>
        <div className='instagram herobtnHover'><a href="/" /> <img src={Instagram} alt='Instagram'/></div>
        <div className='Github herobtnHover'><a href="/" /> <img src={Github} alt='Github'/></div>
    </div>
    </div>
    <div className='heroimg '> 
    <div className="heroimgBg herobtnHover"><img src={HeroBG} alt='herobg'/></div>
    <div className="heroMyimg"><img src={Myphoto} alt="Myphoto" width='400px' height={'400px'} /></div>
    </div>
  </div>
  )
}

export default Hero
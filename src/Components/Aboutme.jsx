import React from 'react'
import Bootstrap from '../Assets/Aboutme/Bootstrap.svg'
import Css from '../Assets/Aboutme/Css.svg'
import HTML from '../Assets/Aboutme/HTML.svg'
import Mui from '../Assets/Aboutme/Mui.svg'
import Reactjs from '../Assets/Aboutme/React.svg'
import ReactMotion from '../Assets/Aboutme/ReactMotion.svg'
import AmoutMeKnowladge from './Rusable/AmoutMeKnowladge'

const Aboutme = () => {
  return (
    <div className='aboutme' id='aboutMe'>
        <div className="title">
            <div className="border"></div>
            <div className="TitleText">About ME</div>
            <div className="border"></div>
        </div>
        <div className="aboutMeText">
            <span>Hello! My name is Lado and I enjoy creating things that live on the internet. 
              <br/>  My interest in web development started back in 2021 when I decided to 
              <br/> scratch! My main focus these days is building accessible, inclusive products 
              <br/> and digital experiences at Upstatement for a variety of clients. Here are a 
              <br/> few technologies I’ve been working with recently:</span>
        </div>
        <div className="aboutMeKnowladge">
            {AmoutMeKnowladge(Bootstrap,"Bootstrap")}
            {AmoutMeKnowladge(Reactjs,"React Js")}
            {AmoutMeKnowladge(Mui,"MUI")}
            {AmoutMeKnowladge(Css,"css")}
            {AmoutMeKnowladge(HTML,"HTML")}
            {AmoutMeKnowladge(ReactMotion,"React Motion")}
        </div>
    </div>
  )
}

export default Aboutme
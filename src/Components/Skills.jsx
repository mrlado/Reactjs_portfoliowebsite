import { Slider } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"
import { styled } from "@mui/material/styles";
import Bootstrap from '../Assets/Aboutme/Bootstrap.svg'
import Css from '../Assets/Aboutme/Css.svg'
import HTML from '../Assets/Aboutme/HTML.svg'
import Mui from '../Assets/Aboutme/Mui.svg'
import Reactjs from '../Assets/Aboutme/React.svg'
import ReactMotion from '../Assets/Aboutme/ReactMotion.svg'
import AmoutMeKnowladge from './Rusable/AmoutMeKnowladge'

const Skills = () => {

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className='aboutme skillsContainer' id='skills'>
        <div className="title">
            <div className="border"></div>
            <div className="TitleText">Skills</div>
            <div className="border"></div>
        </div>
        <div className='skills'>
              <motion.div className="container"
                        initial={{ opacity: 0 }}
                        transition={{duration:1}}
                        animate={{ opacity: 1 }}
                        >
                <div className="SkillItem flex justifyC alignC" >
                <span className='SkillItemNum'>HTML</span>
                  <Slider 
                  defaultValue={80} 
                  step={1} 
                  marks 
                  min={10} 
                  max={100} 
                  disabled
                  valueLabelDisplay="on"
                  color="secondary"/>
                  </div>
              </motion.div>
              <motion.div className="container"
              initial={{ opacity: 0 }}
              transition={{ duration:1, delay:0.5}}
              animate={{ opacity: 1 }}
              >
              <div className="SkillItem flex justifyC alignC" >
              <span className='SkillItemNum'>CSS</span>
                <Slider 
                defaultValue={60} 
                step={1} 
                marks 
                min={10} 
                max={100} 
                disabled
                valueLabelDisplay="on"/>
                
                </div>
              </motion.div>
              <motion.div className="container"
                  initial={{ opacity: 0 }}
                  transition={{ duration:1, delay:1}}
                  animate={{ opacity: 1 }}
                  >
            <div className="SkillItem flex justifyC alignC" >
            <span className='SkillItemNum'>JS</span>
              <Slider 
              defaultValue={45} 
              step={1} 
              marks 
              min={10} 
              max={100} 
              disabled
              valueLabelDisplay="on"/>
          
              </div>
              </motion.div>
              <motion.div className="container"
                    initial={{ opacity: 0 }}
                    transition={{ duration:1, delay:1.5}}
                    animate={{ opacity: 1 }}
                    >
            <div className="SkillItem flex justifyC alignC" >
            <span className='SkillItemNum'>REACT JS</span>
              <Slider 
              defaultValue={70} 
              step={1} 
              marks 
              min={10} 
              max={100} 
              disabled
              valueLabelDisplay="on"/>
              </div>
              </motion.div>
        </div>
    </div>
  )
}

export default Skills
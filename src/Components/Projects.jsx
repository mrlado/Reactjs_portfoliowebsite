import React from 'react'
import Github from '../Assets/Github.svg'

const Projects = () => {
  return (
    <div className='aboutme' id='projects'>
        <div className="title">
            <div className="border"></div>
            <div className="TitleText">Projects</div>
            <div className="border"></div>
        </div>
        <div className="ProjectContainer">
          <div className="projectinformation">
            <div><button>Futured Project</button></div>
            <div className="ProjectTitle">
              <h1>Dating APP</h1>
              <p className='ProjectDesctiption'>Lorem ipsum dolor sit amet, consectetur
                <br/> adipiscing elit, sed do eiusmod tempor 
                <br/>incididunt ut labore et dolore magna aliqua. Ut 
                <br/>enim ad minim veniam, quis nostrud 
                <br/>exercitation ullamco laboris nisi ut aliquip ex ea 
                <br/>commodo consequat. </p>
              </div>
              <div className="LinktoGithub">
                <a href="/"><img src={Github} alt="GithubLink" /></a>
              </div>
          </div>
          <div className="projectPicture"></div>
        </div>
        
        
    </div>
  )
}

export default Projects
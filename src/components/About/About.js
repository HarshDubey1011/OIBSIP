import React from 'react'
import './About.css'

export default function About() {
    return (
    <section>
      <div className='about'>
      <h1>About Me </h1>
      <hr className='aboutHR' />
      <p className='about-para'>Here you will find more information about me, what I do, and my current skills related to programming and technology</p>
        <div className='aboutMe'>
          <div>
              <h3 className='aboutheading'>Get to know me!</h3>
              <div className='aboutpara'>
              <p>I'm a college Student Currently Pursuing Btech Cse.I have a good knowledge of <small><a href="https://www.github.com/HarshDubey1011" target="_blank">Full Stack Development.</a></small></p>
              <p>I'm open to Job opportunities where I can contribute, learn and help the organization to grow.</p>
              <p>I'll try to give more than 100 percent.</p>
              <a href="#contact"><button className='aboutbtn'>Contact</button></a>
            </div>  
          </div>
          <div>
          <h3 className='aboutheading'>My Skills</h3>
          <div className='skills'>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>MySql</p>
              <p>Python</p>
              <p>Django</p>
              <p>GitHub</p>
              <p>Terminal</p>
              <p>Linux</p>
              <p>Java</p>
              <p>CMD</p>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

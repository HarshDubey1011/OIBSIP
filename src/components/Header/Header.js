import './Header.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'

export default function Header() {
  return (
    <section className='header' id="header">
      <div className='alignCenter'>
        <h1 className='headerTitle'>Hello I'm Harsh Dubey</h1>
        <p className='text'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <a href='#project'><button className='btn'>Projects</button></a>
      </div>
      <div className='links'>
          <div className='box'>
              <a href='https://www.linkedin.com' target="_blank" rel="noreferrer"><AiFillLinkedin className='link' /></a>
              <a href='https://www.twitter.com/harshdu10085463' target="_blank" rel="noreferrer"><BsTwitter className='link' /></a>
              <a href='https://www.github.com/HarshDubey1011' target="_blank" rel="noreferrer"><AiFillGithub className='link' /></a>
              <a href='https://www.instagram.com/harsh_dubey_10/' target="_blank" rel="noreferrer"><AiOutlineInstagram className='link' /></a>
              <a href='https://about.me/harshdubey' target='_blank' rel="noreferrer"><SiAboutdotme className='link' /></a>
          </div>
      </div>
    </section>
  )
}

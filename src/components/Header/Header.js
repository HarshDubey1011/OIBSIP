import './Header.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'

export default function Header() {
  return (
    <section className='header'>
      <div className='alignCenter'>
        <h1>Hello I'm Harsh Dubey</h1>
        <p className='text'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className='btn'>Projects</button>
      </div>
      <div className='links'>
          <div className='box'>
              <AiFillLinkedin className='link' />
              <BsTwitter className='link' />
              <AiFillGithub className='link' />
              <AiOutlineInstagram className='link' />
              <SiAboutdotme className='link' />
          </div>
      </div>
    </section>
  )
}

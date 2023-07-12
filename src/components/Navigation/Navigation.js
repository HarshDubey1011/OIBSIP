import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx";
import './Navigation.css'

export default function Navigation() {
  return (
    
    <section className='container'>
        <nav>
          <div className='logoImage'>
            <a href="#header"><img src='/myimage.jpg' alt='Not Available' className='logo'/></a>
            <span className='name'>Harsh Swaroop Dubey</span>
          </div>
          <div className='navbar menu-items'>
                <a href="#header" className='nav-anchor'>Home</a>
                <a href="#about" className='nav-anchor'>About</a>
                <a href="#project" className='nav-anchor'>Projects</a>
                <a href="#contact" className='nav-anchor'>Contact</a>
                <i className="icon"><RxHamburgerMenu /></i>
          </div>
        </nav>  
    </section>
    
  )
}

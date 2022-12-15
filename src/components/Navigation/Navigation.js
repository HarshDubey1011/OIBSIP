import React from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <section className='container'>
        <nav>
          <div className='logoImage'>
            <img src='/myimage.jpg' alt='Not Available' className='logo'/>
            <span className='name'>Harsh Swaroop Dubey</span>
          </div>
            <ul className='navbar'>
                <li><a href='' className='nav-anchor'>Home</a></li>
                <li><a href='' className='nav-anchor'>About</a></li>
                <li><a href='' className='nav-anchor'>Projects</a></li>
                <li><a href='' className='nav-anchor'>Contact</a></li>
            </ul>
        </nav>  
    </section>
  )
}

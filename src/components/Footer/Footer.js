import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import './Footer.css'

const Footer = (props) => {
	  const today = new Date();
  	  const year = today.getFullYear();
  return (
    <section className='footer' id="footer">
	    <div className='footerAlign'>
		    <div className='footerDetails'>
		    <h3 className='footerName'>Harsh Swaroop Dubey</h3>
		    	<p className='footerPara'>A FullStack focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
		    </div>
		    <div className='footerIcons'>
		    		<h3>social</h3>
	    	<div className='footerLinks'>
			 				<a href='https://www.linkedin.com' target="_blank" rel="noreferrer"><AiFillLinkedin className='footerLink' /></a>
              <a href='https://www.twitter.com/harshdu10085463' target="_blank" rel="noreferrer"><BsTwitter className='footerLink' /></a>
              <a href='https://www.github.com/HarshDubey1011' target="_blank" rel="noreferrer"><AiFillGithub className='footerLink' /></a>
              <a href='https://www.instagram.com/harsh_dubey_10/' target="_blank" rel="noreferrer"><AiOutlineInstagram className='footerLink' /></a>
	    	  		<a href='https://about.me/harshdubey' target='_blank' rel="noreferrer"><SiAboutdotme className='footerLink' /></a>
	    	</div>
		    </div>
		</div>
   		<hr className='footerHR' />
      <span className='footerSpan'>&copy; {`Copyright ${year}.Made By Harsh Swaroop Dubey`}</span>
    </section>
  )
}

export default Footer;
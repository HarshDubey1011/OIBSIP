import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = (props) => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0338omv','template_h9yjq2m',form.current,'q2Q5BWM-_AMfRN5tS')
      .then(() => {
          alert('Send Successfully')
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className='contact' id="contact">
    	<h1>Contact</h1>
    	<hr className='contactHR' />
    	<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
    	<div className='boxalign'>
       <div className='contactBox'>
    		<div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="formbold-mb-5">
                      <label htmlFor="name" className="formbold-form-label"> Full Name </label>
                          <input
                            type="text"
                            name="user_name"
                            id="name"
                            placeholder="Full Name"
                            className="formbold-form-input"
                          />
      </div>
      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
            <input
              type="email"
              name="user_email" 
              id="className"
              placeholder="Enter your email"
              className="formbold-form-input"
            />
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="subject" className="formbold-form-label"> Subject </label>
            <input
              type="text"
              name="user_subject"
              id="subject"
              placeholder="Enter your subject"
              className="formbold-form-input"
            />
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="message" className="formbold-form-label"> Message </label>
            <textarea
              rows="6"
              name="user_message"
              id="message"
              placeholder="Type your message"
              className="formbold-form-input"
            ></textarea>
      </div>
      <div>
        <button className="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>
</div>
</div>
    </section>
  )
}

export default Contact;
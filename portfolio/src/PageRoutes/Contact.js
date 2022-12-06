import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_ID}`)
      e.target.reset()
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div>
        <div className='contactDiv'>
            <form ref={form} onSubmit={sendEmail}>
            
            <input placeholder='Name' type="text" name="user_name" />
            
            <input placeholder='Email' type="email" name="user_email" />

            <textarea name="message" placeholder='Please Feel Free to Contact Me!' />
            <input type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}


export default Contact
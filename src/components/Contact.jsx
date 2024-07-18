import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import '../../src/index.css';

const publicKey = import.meta.env.VITE_API_KEY
const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    e.target.reset()

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    console.log(import.meta.env.VITE_API_KEY)
                },
            );
    };

    return (
        <div className='form-container' >
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Enter your name here...' />
                <input type="email" name="user_email" placeholder='Enter your email address here...' />
                <textarea name="message" placeholder='Enter your message here...' />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};
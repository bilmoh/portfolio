import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import '../../src/index.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_21m3m38', 'template_1e18oel', form.current, {
                publicKey: 'O-Khncy1u7I8d9y2h',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    e.target.reset()

                },
                (error) => {
                    console.log('FAILED...', error.text);
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
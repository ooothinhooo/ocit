import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yu3xjmp', 'template_xfyoyj5', form.current, 'w84lSwCGvIpj7Zgel').then(
            (result) => {
                console.log(result.text);
                setDone(true);
                form.reset();
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <div className="contact-form bg-slate-600" id="contact">
            {/* left side copy and paste from work section */}
            {/* right side form */}
            <div className="c-right bg-cardOverlay">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && 'Thanks for Contacting me'}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

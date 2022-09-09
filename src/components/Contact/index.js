import './index.scss'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.prevenDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_ljuxqin',
                refForm.current,
                'service_0thbsb5')
            .then(
                () => {
                    alert('Message is successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message. Please make sure your email is correct and try again!')
                }
            )

    }

    return (
        <>
            <div class="container-anibox">
                <div class="box"></div>
            </div>
            <div className='text-zone-contact-page'>
                <h1>
                    Contact Me
                </h1>
            </div>
            <div className='container-contact-page'>
                <div>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
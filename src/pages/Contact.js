import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers';

const Contact= () => {

    // function ContactForm() {
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
        const { name, email, message } = formState;
    
        const [errorMessage, setErrorMessage] = useState('');
    
        function handleChange(e){
    
            if (e.target.name === 'email') {
                const isValid = validateEmail(e.target.value);
                console.log(isValid);
                // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                  } else {
                    setErrorMessage('');
                  }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
                console.log('errorMessage', errorMessage);
            }
    
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        
        }
        console.log(formState)
    
    
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
          }
    
        return (
         
                <div className="body-divs">
              <h3>Contact</h3>
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="label-divs">
                    <label  htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div className="label-divs">
                    <label className="label-fonts" htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div className="label-divs">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                        {errorMessage && (
                        <div>
                        <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
    
                <button type="submit">Submit</button>
              </form>
              </div>

          )
}

export default Contact
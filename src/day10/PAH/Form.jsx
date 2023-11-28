import React, { useState } from 'react';
import './Form.css';

const SampleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" data-testid="name-input" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" data-testid="email-input" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" data-testid="message-input" required onChange={handleChangeEvent} />
                </div>
                <button className='submit__btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SampleForm;
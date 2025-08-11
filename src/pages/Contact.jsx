import { useState } from 'react'
import mail from '../assets/mail.png'
import './ui/Contact.css'
export const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [contacts, setContacts] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContacts((prev) => ({
            ...prev, [name]: value
        }));
    };
    //validation
    const validateInputs = () => {
        const newErrors = {};

        if (!contacts.username.trim()) {
            newErrors.username = 'Name is required';
        }

        if (!contacts.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(contacts.email)) {
            newErrors.email = 'Email is not valid';
        }

        if (!contacts.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(contacts.phone)) {
            newErrors.phone = 'Phone must be 10 digits';
        }

        if (!contacts.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs(); 
    setSubmitted(true);

    if (!isValid) {
        setSuccess(false);
        return;
    }
    setSuccess(true);
    console.log("Submitted:", contacts);

    setContacts({
        username: "",
        email: "",
        phone: "",
        message: "",
    });
    setTimeout(() => {
        setSuccess(false);
        setSubmitted(false);
    }, 3000);
};
    return (
        <section className="contact-section">
            <div className="main-grid">
                <div className="form-area">
                    <h3>Let's Talk</h3>
                    <form onSubmit={handleFormSubmit} className="form-grid" autoComplete='off'>
                        <input name="username"
                            placeholder={errors.username ? errors.username : "Name"}
                            className={errors.username ? "error" : ""}
                            autoComplete='OFF'
                            value={contacts.username}
                            onChange={handleInputChange} />
                        <input name="email"
                            placeholder={errors.email ? errors.email : "Email"}
                            className={errors.email ? "error" : ""}
                            autoComplete='OFF'
                            value={contacts.email}
                            onChange={handleInputChange} />
                        <input name="phone"
                            placeholder={errors.phone ? errors.phone : "Phone"}
                            className={errors.phone ? "error" : ""}
                            autoComplete='OFF'
                            value={contacts.phone}
                            onChange={handleInputChange} />
                        <textarea name='message'
                            placeholder={errors.message ? errors.message : "Enter your comment here...."}
                            className={errors.message ? "error" : ""}
                            autoComplete='OFF'
                            value={contacts.message}
                            onChange={handleInputChange}></textarea>
                        <button id='submit' type='submit'> SUBMIT</button>
                        {submitted && success && (
                            <p className="success-message">Message submitted successfully!</p>
                        )}
                        {submitted && !success && (
                            <p className="error-message"> Message not submitted. Please fix errors.</p>
                        )}
                    </form>
                    <h3 className="developer-note">Have questions or suggestions? we'd love to hear you from you and so would pippo</h3>
                </div>

                <div className="image-area">
                    <img src={mail} alt="Contact illustration" />
                </div>
            </div>

            <div className="bottom-boxes">
                <div className="box">
                    <h4>pippoapp@gmail.com</h4>
                    <p>give us a feedback on our email</p></div>
                <div className="box">
                    <h4>pippo.cat</h4>
                    <p>Check our insta account</p></div>
                <div className="box">
                    <h4>Location</h4>
                    <p>This project was built from scratch with love,teaa and code in India</p></div>
            </div>
        </section>
    )
}
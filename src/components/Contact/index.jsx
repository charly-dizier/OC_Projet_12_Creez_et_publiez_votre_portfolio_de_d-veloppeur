import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_45eeufe', 'template_92ryvph', e.target, '-oXeP4kxZ3ngf7PM6')
            .then((result) => {
                console.log(result.text);
                alert('Message envoyé avec succès !');
            }, (error) => {
                console.log(error.text);
                alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
        <h2>Contact</h2>
        <form onSubmit={sendEmail} className='contact_form'>
            <div>
                <label htmlFor="name" className='sr-only'>Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className='sr-only'>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="subject" className='sr-only'>Objet</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Objet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className='sr-only'>Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
        </>
    );
};

export default Contact;
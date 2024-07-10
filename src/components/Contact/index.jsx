import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    // Définition du state initial de formData 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Fonction de gestion et mise a jour des changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fonction d'envoie de l'email
    const sendEmail = (e) => {
        e.preventDefault();

        // Utilisation de la méthode sendForm de emailjs pour envoyer l'email
        emailjs.sendForm('service_45eeufe', 'template_92ryvph', e.target, '-oXeP4kxZ3ngf7PM6')
            .then((result) => {
                console.log(result.text);
                alert('Message envoyé avec succès !');
            }, (error) => {
                console.log(error.text);
                alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            });

        // Réinitialisation des champs après envoie
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
                    placeholder="Nom Prénom"
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
                    placeholder="Addresse email"
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
                    placeholder="Objet du message"
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
                    placeholder="Ecrivez votre message ici..."
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
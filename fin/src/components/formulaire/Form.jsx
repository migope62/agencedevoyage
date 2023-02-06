import React, { useState } from "react";
import './form.css'
import axios from "axios";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:3000/contact', {
                name,
                email,
                message
            });
            console.log(response.data);
        } catch (error) {
            console.error('probleme api', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email :
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Message :
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Envoyer" />
        </form>
    );
}

export default ContactForm;


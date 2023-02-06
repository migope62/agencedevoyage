import React, { useState } from 'react';
import './loginform.css'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Votre logique de connexion ici, comme envoyer les données de connexion à un serveur
        console.log(`Email: ${email}, Password: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Mot de passe:
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default LoginForm;
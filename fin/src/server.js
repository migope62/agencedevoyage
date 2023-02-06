const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/contact', express.static('/projetfd/src/pages/Contact.jsx'));

mongoose.connect('mongodb+srv://Maxime62580:bill62@cluster0.mndtnor.mongodb.net/1', { useNewUrlParser: true });
mongoose.set('strictQuery', false);
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });

    contact.save((error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).send('Contact added successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('API running on http://localhost:3000');
});
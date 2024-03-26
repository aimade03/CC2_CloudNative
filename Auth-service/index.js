require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const Utilisateur = require('./Models/utilisateurModel')
const PORT = process.env.PORT;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
const DBNAME = process.env.DBNAME;
app.use(cors());
app.use(express.json());
mongoose.connect(URL_MONGOOSE + '/' + DBNAME)
app.post('/login', async (req, res) => {
    const { email, mdp } = req.body;
    const Utilisateur = await User.findOne({ email });
    if (!Utilisateur) {
        return res.status(400).json({ message: "Utilisateur non trouvé." });
    }
    const mdpMatch = await bcrypt.compare(mdp, Utilisateur.mdp);
    if (!mdpMatch) {
        return res.status(401).json({ message: "Mot de passe incorrect." });
    }
    const token = jwt.sign({ userId: Utilisateur._id },TOKEN_SECRET);
    process.env.TOKEN = token
    res.status(200).json({ token });
});
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Ecoute dans le port ${PORT}`);
    } else {
        console.log(`Errer de lancement`);
    }
})
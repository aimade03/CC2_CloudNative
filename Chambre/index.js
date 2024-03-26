require('dotenv').config();
const app = express();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Chambre = require('./Models/chambreModel') 
const PORT = process.env.PORT;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
const DBNAME = process.env.DBNAME;
app.use(cors());
app.use(express.json());
mongoose.connect(URL_MONGOOSE + '/' + DBNAME)
app.post('/add',async (req,res)=>{
    const dispo = await Chambre.find({disponibilite})
    if(!dispo == true){
        res.status(401).json({message : 'error 404'})
    }
    Chambre.create(req.body)
})
app.get('/chambre/:details',async (req,res)=>{
    const chambre = await Chambre.findOne({nom , email , login , mdp}) 
    res.send(chambre)
})
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Ecoute dans le port ${PORT}`);
    } else {
        console.log(`Errer de lancement`);
    }
})
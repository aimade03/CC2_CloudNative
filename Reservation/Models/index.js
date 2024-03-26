require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Chambre = require('/Chambre//Models/chambreModel')
const Reservation = require('./reservationModel')
const PORT = process.env.PORT;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
const DBNAME = process.env.DBNAME;
app.use(cors());
app.use(express.json());
mongoose.connect(URL_MONGOOSE + '/' + DBNAME)
    app.post(('/add'), async(req,res)=>{
        const dispo = Chambre.find({disponibilite: req.params.Chambre})
        const reservation = await Reservation.findOne({ nom: req.params.Reservation });
        if(!dispo == true){
            res.status(401).json({message : 'error 404'})
        }
        reservation.create(req.body)

        
    })


app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Ecoute dans le port ${PORT}`);
    } else {
        console.log(`Errer de lancement`);
    }
})

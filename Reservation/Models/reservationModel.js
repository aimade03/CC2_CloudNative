const reservationSchema = new mongoose.Schema({
    utilisateur_id:{type: mongoose.Schema.Types.ObjectId, ref:Utilisateur , required:true},
    chambre_id:{type: mongoose.Schema.Types.ObjectId, ref: Chambre , required:true}
})
const Reservation = mongoose.model('reservation',reservationSchema)
module.exports = Reservation 
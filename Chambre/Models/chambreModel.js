const { default: mongoose } = require("mongoose");

const chambreSchema = new mongoose.Schema({
    type:{type:String,required:true},
    capacite:{type:String,required:true},
    prix:{type:String,required:true},
    disponibilite:{type:String,required:true},
    hotel:{type:String,required}
})
    const Chambre = mongoose.model('chambre',chambreSchema)

    module.exports = Chambre 
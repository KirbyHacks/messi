const mongoose = require('mongoose');

const keySchema = new mongoose.Schema({
    clave: String,
    duracion: String,
    activado: {type: Boolean, default: false}
})

const model = mongoose.model("Claves_Premium", keySchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por ! rLøw#7628   || - ||   ║
║    ----------| Mesi chiquito on top !|----------    ║
╚═════════════════════════════════════════════════════╝
*/

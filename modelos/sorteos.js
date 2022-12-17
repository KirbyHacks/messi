const mongoose = require('mongoose');

const sorteoSchema = new mongoose.Schema({
    ID: {type: String, default: "sorteos"},
    data: {type: Array, default: []}
})

const model = mongoose.model("sorteos", sorteoSchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por ! rLøw#7628   || - ||   ║
║    ----------| Mesi chiquito on top !|----------    ║
╚═════════════════════════════════════════════════════╝
*/

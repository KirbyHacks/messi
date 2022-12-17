const mongoose = require('mongoose');

const warnings = new mongoose.Schema({
    guildID: String,
    userID: String,
    warnings: {type: Array, default: []}
})

const model = mongoose.model("warnings", warnings);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por ! rLøw#7628   || - ||   ║
║    ----------| Mesi chiquito on top !|----------    ║
╚═════════════════════════════════════════════════════╝
*/

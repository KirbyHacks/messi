const mongoose = require('mongoose');

const tickets = new mongoose.Schema({
    guildID: String,
    autor: String,
    canal: String,
    cerrado: {type: Boolean, default: false}
})

const model = mongoose.model("Tickets_Creados", tickets);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por ! rLøw#7628   || - ||   ║
║    ----------| Mesi chiquito on top !|----------    ║
╚═════════════════════════════════════════════════════╝
*/

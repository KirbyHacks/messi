const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: {type: Object, default: {canal: "", mensaje: ""}},
    sugerencias: {type: String, default: ""},
    niveles: {type: Object, default: {canal: "", mensaje: ""}},
    bienvenidas: {type: Object, default: {canal: "", fondo: "", mensaje: "Bienvenido {usuario} a {servidor}, Disfruta tu estancia"}},
})

const model = mongoose.model("Configuraciones", setupSchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por ! rLøw#7628   || - ||   ║
║    ----------| Mesi chiquito on top !|----------    ║
╚═════════════════════════════════════════════════════╝
*/

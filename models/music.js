/**
 * @typedef Music
 * @property {string} cover.required
 * @property {Array} cupertinos.required
 * @property {Array} ciclos.required
 * 
 */

const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    cupertinos: {
        text: String,
        description: String,
        description_en: String,
        audio: String,
        audio_en: String,
        img: String,
    },
    ciclos: {
        text: String,
        description: String,
        description_en: String,
        audio: String,
        audio_en: String,
        img: String
    }
})

const music = mongoose.model('music', musicSchema)
module.exports = music;
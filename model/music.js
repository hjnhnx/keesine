const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lyric: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    mp3: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
})

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;

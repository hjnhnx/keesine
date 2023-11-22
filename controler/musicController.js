const Music = require('../model/music.js');


exports.create = (req, res) => {
    res.render('../views/createMusic.ejs')
}


exports.store = async (req, res) => {
    const music = new Music(req.body)
    console.log(music)
    await music.save().then(() => {
        res.redirect('/music')
    }).catch(err => {
        {
            console.log(err)
            res.redirect('/')
        }
    })
}

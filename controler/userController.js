const User = require('../model/user.js');
const hash = require('md5')

exports.login = (req, res) => {
    const user = req.session.user;
    res.render('../views/login.ejs', {user})
}

exports.handleLogin = async (req, res) => {
    const hasUser = await User.findOne({email: req.body.email});
    if (!hasUser) {
        res.render('../views/login.ejs')
    }
    else {
        const salt = hasUser.salt
        const dbPassword = hasUser.password
        const password = hash(req.body.password+salt)
        if (password === dbPassword){
            req.session.user = hasUser
            res.redirect('/profile')
        }else {
            res.redirect('/login')
        }
    }
}

exports.profile = (req, res) => {
    res.render('../views/profile.ejs', {user: req.session.user})
}

exports.logout = function (req,res) {
    req.session.user = undefined
    res.redirect('/login');
}

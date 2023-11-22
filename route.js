const express = require('express')
const route = express.Router()
const userController = require('./controler/userController.js')
const musicController = require('./controler/musicController.js')
const middleware = require('./middleware.js')

route.get('/',(req, res) => {
    res.render('index.ejs', {user: req.session.user})
})
route.get('/login',userController.login)
route.post('/login',userController.handleLogin)
route.use('/profile', middleware)
route.get('/profile',userController.profile)
route.get('/logout',userController.logout)

// route.use('/music/create', middleware)
// route.use('/music/delete', middleware)
// route.use('/music/update', middleware)
// route.use('/music/edit', middleware)
route.get('/music/create', musicController.create)
route.post('/music/create', musicController.store)
route.get('/music', (req, res) => {
    res.send('music')
})

module.exports = route

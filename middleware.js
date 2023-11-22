const getView = function (view) {
    return '../views/' + view
}

const checkUser = function (req,res,next) {
    const currentUser = req.session.user;
    if (currentUser){
        next()
    }else {
        res.status(403).redirect('/login')
    }
}

module.exports = checkUser

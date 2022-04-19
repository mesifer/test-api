const user  = require('./user')

exports.dbfetch = function(req,res){
    user.database.query("SELECT * FROM users", function(err,result,field){
        if (err) throw err
        res.send(result)    
    })
}
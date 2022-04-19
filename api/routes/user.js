const mysql = require('mysql')
 
exports.database = mysql.createConnection({
   host     : 'b2wnv8j339gky6irdwvb-mysql.services.clever-cloud.com',
   user     : 'umvvsly1qslkep8a',
   password : 'qWbqvd7y09lzisVBDnE5',
   database : 'b2wnv8j339gky6irdwvb'
});

exports.register = function(req, res){
    message = '';

    if(req.method == "POST") {

      var post      = req.body;
      var username  = post.uname;
      var email     = post.email;
      var password  = post.pass;
 
      var sql = "INSERT INTO `users`(`username`,`email`,`password`) VALUES ('" + username + "','" + email + "','" + password + "')";
 
       var query = db.query(sql, function(err, result) {
 
          message = "Succesfully! Your account has been created.";
          res.send(message)
       });
 
    } 
 };

 exports.fetchdb = function(req,res){
    database.query("SELECT * FROM users",function(err,result,fields){
       if(err) throw err;
       console.log(result);
    })
 }
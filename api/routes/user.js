const mysql = require('mysql')

const  MYSQL_ADDON_HOST        = process.env.MYSQL_ADDON_HOST || "b2wnv8j339gky6irdwvb-mysql.services.clever-cloud.com"
const  MYSQL_ADDON_PASSWORD    = process.env.MYSQL_ADDON_PASSWORD || "qWbqvd7y09lzisVBDnE5"
const  MYSQL_ADDON_PORT        = process.env.MYSQL_ADDON_PORT || "3306"
const  MYSQL_ADDON_USER        = process.env.MYSQL_ADDON_USER || "umvvsly1qslkep8a"
const  MYSQL_ADDON_DB          = process.env.MYSQL_ADDON_DB || "b2wnv8j339gky6irdwvb"

exports.database = mysql.createConnection({
   host     : MYSQL_ADDON_HOST,
   user     : MYSQL_ADDON_USER,
   password : MYSQL_ADDON_PASSWORD,
   database : MYSQL_ADDON_DB
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

 
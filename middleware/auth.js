var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secrets');
var ip = require('ip');
const {
    query
} = require('../koneksi');

// controller untuk register
exports.registrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }
    var query = query('SELECT email FROM ?? WHERE ??');
    var table = ["user", "email", post.email];
    query = mysql.format(query, table);
    connection.query(query,
        function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                if (rows.lenght == 0) {
                    var query = "INSERT INTO ?? SET ??";
                    var table = ["user"];
                    query = mysql.format(query, table);
                    connection.query(query, post,
                        function (error, rows) {
                            if(error){
                                console.log(error);
                            }else{
                                response.ok("berhasil menambahkan data baru",res);
                            }
                        });
                }else{
                    response.ok("email sudah terdaftar !!!")
                }
            }
        })

}
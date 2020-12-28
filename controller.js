'use strict';
var response=require('./res');
var connection=require('./koneksi');

exports.index=function(req,res){
    response.ok("Aplikasi rest ku berhasil",res)
};
//menampilkan semua data mahaisiswa
exports.tampilSemua=function(req,res){
    connection.query('SELECT * FROM mahasiswa',function(Error,rows,fileds){
        if(Error){
            connection.log(Error)
        }else{
            response.ok(rows,res)
        }
    })
};

'use strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi rest ku berhasil", res)
};
//menampilkan semua data mahaisiswa
exports.tampilSemua = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (Error, rows, fileds) {
        if (Error) {
            connection.log(Error)
        } else {
            response.ok(rows, res)
        }
    })
};
// menampilkasn semua data berdasarkan id
exports.tampilid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs=?', [id],
        function (Error, rows, fileds) {
            if (Error) {
                connection.log(Error)
            } else {
                response.ok(rows, res)
            }
        })
};
// post data
exports.postdata = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', [nim, nama, jurusan],
        function (Error, rows, fields) {
            if (Error) {
                connection.log(Error)
            } else {
                response.ok("berhasil", res)
            }
        })
};
// UBAH DATA BERDASRKAN ID
exports.putdata = function (req, res) {
    var id = req.body.id_mhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mhs=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error)
            } else {
                response.ok("berhasil mengubah", res)
            }
        }
    )
};
// hapus data berdasrkan id
exports.hapusdata = function (req, res) {
    var id = req.body.id_mhs;
    connection.query('DELETE FROM mahasiswa WHERE id_mhs=?', [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error)
            } else {
                response.ok("berhasil menghapus", res)
            }
        }
    )
}
// menampilkan matakuliah group
exports.tampilgroup=function(req,res){
    connection.query('SELECT mahasiswa.id_mhs, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah=matakuliah.id_matakuliah AND krs.id_mahasiswa=mahasiswa.id_mhs ORDER BY id_mahasiswa',
    function(error,rows,field){
        if(error){
            console.log(error);
        }else{
            response.oknested(rows,res);
        }
    }
    )
}
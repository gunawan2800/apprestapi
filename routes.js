'use strict';
module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemua);

    app.route('/tampil/:id')
        .get(jsonku.tampilid);

    app.route('/tambah')
        .post(jsonku.postdata);

    app.route('/ubah')
        .put(jsonku.putdata);

    app.route('/hapus')
        .delete(jsonku.hapusdata);
    app.route('/tampilmatkul')
        .get(jsonku.tampilgroup);
}
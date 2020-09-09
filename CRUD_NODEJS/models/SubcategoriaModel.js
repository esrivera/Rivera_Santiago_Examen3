const sql = require('../util/database');
const Subcategoria = function(subcategoria) {
    this.cod_sub_categoria = subcategoria.cod_sub_categoria;
    this.cod_categoria = subcategoria.cod_categoria;
    this.nombre = subcategoria.nombre;
    this.descripcion = subcategoria.descripcion;
    this.fecha_creacion = subcategoria.fecha_creacion;

}
Subcategoria.create = (NewSubcategoria, result) => {
    sql.query("INSERT INTO SUBCATEGORIA SET ?", NewSubcategoria, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { codSub: res.insertCod, ...NewSubcategoria });
    });
};

Subcategoria.getAll = result => {
    sql.query("SELECT * FROM subcategoria", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};
Subcategoria.getCategoria = result => {
    sql.query("SELECT * FROM categoria", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};
Subcategoria.findById = (codCategoria, result) => {
    sql.query(`SELECT * FROM subcategoria WHERE COD_CATEGORIA = '${codCategoria}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

Subcategoria.remove = (id, result) => {
    sql.query("DELETE FROM SUBCATEGORIA WHERE COD_SUB_CATEGORIA = ?", id, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Subcategoria;
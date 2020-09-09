const Subcategoria = require('../models/SubcategoriaModel');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "contenido no puede estar vacio!"
        });
    }
    const subcategoria = new Subcategoria({
        cod_sub_categoria: req.body.cod_sub_categoria,
        cod_categoria: req.body.cod_categoria,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion
    });
    Subcategoria.create(subcategoria, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "han ocurrido algunos errores creando el estadio."
            });
        else res.send(data);
    });
};
exports.findAll = (req, res) => {
    Subcategoria.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "ha ocurrido un error al listar los estadios"
            });
        else res.send(data);
    });
};
exports.findCategoria = (req, res) => {
    Subcategoria.getCategoria((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "ha ocurrido un error al listar los estadios"
            });
        else res.send(data);
    });
};
exports.findOne = (req, res) => {
    Subcategoria.findById(req.params.codCategoria, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({
                    message: `not found Estadio with id ${req.params.codCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el estadio con id" + req.params.codCategoria
                });
            }
        } else res.send(data);
    });
};

exports.delete = (req, res) => {
    Subcategoria.remove(req.params.codSubcategoria, (err, data) => {
        if (err) {
            if (err.kind == "no econtrado") {
                res.status(404).send({
                    message: `Not found estadio WITH codigo ${req.params.codSubcategoria}`
                });
            } else {
                res.status(509).send({
                    message: "No se pudo eliminar el estadio con codigo: " + req.params.codSubcategoria
                });
            }
        } else res.send({ message: `Estadio elimnado satisfactoriamente!` });
    });
};
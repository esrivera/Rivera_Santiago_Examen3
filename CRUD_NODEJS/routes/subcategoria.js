module.exports = app => {
    const subcategoria = require("../controllers/SubcategoriaController");
    app.get("/subcategoria", subcategoria.findAll);
    app.get("/categoria", subcategoria.findCategoria);
    app.get("/subcategoria/:codCategoria", subcategoria.findOne);
    app.post("/subcategoria/add", subcategoria.create);
    app.delete("/subcategoria/delete/:codSubcategoria", subcategoria.delete);
}
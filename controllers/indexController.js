'use strict';

const controller = {};
const models = require('../models');

controller.showHomepage = async (req, res) => {
    const featuredProducts = await models.Product.findAll({
        attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice'],
        order: [['stars', 'DESC']],
        limit: 10
    });
    res.locals.featuredProducts = featuredProducts;


    const categories = await models.Category.findAll();
    // [1,2,3,4] => [[1], [3, 4], [2]]
    const secondArray = categories.splice(2, 2);
    const thirArray = categories.splice(1, 1);

    res.locals.categoryArray = [
        categories,
        secondArray,
        thirArray
    ];

    const Brand = models.Brand;
    const brands = await Brand.findAll();

    res.render('index', { brands }); // {brands} == {brands = brands} 
};

controller.showPage = (req, res, next) => {
    // const page = ['cart', 'checkout', 'contract', 'login', 'my-account', 'product-detail', 'product-list', 'wishlist'];

    // if (page.includes(req.params.page))
    res.render(req.params.page);
    // next();
};

module.exports = controller;
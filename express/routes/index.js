const { Router } = require('express');
const parser = require('../parser');
const router = Router();

router.get('/api/catalog', async (req, res) => {
  const catalog = await parser.getCatalog();
  res.status(200).json(catalog);
});

router.get('/api/popular', async (req, res) => {
  const popular = await parser.getPopular();
  res.status(200).json(popular);
});

router.get('/api/groups', async (req, res) => {
  const groups = await parser.getGroups(req.query.id);
  res.status(200).json(groups);
});

router.get('/api/products', async (req, res) => {
  const products = await parser.getProducts(req.query.id, req.query.group_id);
  res.status(200).json(products);
});

module.exports = router
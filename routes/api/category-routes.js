const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
      },
    });
    
    res.json(categories);
  } catch(error) {
    console.error(error);
    res.status(500).json({message: "There has been an ERROR"});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryById = req.params.id;
    const category = await Category.findAll({
      where: {
        id: categoryById,
      },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
      },
    })
    res.json(category);

    }catch (error) {
    console.error(error);
    res.status(500).json({message: "There has been an ERROR"});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const { category_name } = req.body;
    const categoryName = await Category.create({ category_name });
    res.json(categoryName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There has been an ERROR" });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const {id} = req.params;
    const { category_name } = req.body;
    const [updatedCategory] = await Category.update({category_name},
      {
        where: { 
          id: req.params.id
         },
         include: {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock'],
        },
      },
    );
    res.json(updatedCategory);
  
  } catch (error) {
    console.error(error);
      res.status(500).json({ message: "There has been an ERROR" });
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const {id} = req.params;
    const category = await Category.findByPk(id);
    await category.destroy();
    res.status(200).json({message: `DELETED`})
  } catch (error) {
    console.log(error);
      res.status(500).json({message: "There has been an ERROR"});
    }
});

module.exports = router;

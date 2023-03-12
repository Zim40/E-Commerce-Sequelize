const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product,
      },
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'There has been an ERROR'});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = req.params.id;
    const tag = await Tag.findAll({
      where: {
        id: tagId,
      },
      include: {
        model: Product,
      },
    })
    if (tag.length === 0) {
      return res.status(404).send({message: 'No tag found for that Id!'});
    }

    res.json(tag);
    
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'There has been an ERROR!'});
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const { tag_name } = req.body;
    const tagId = await Tag.create({ tag_name });
    res.json(tagId);
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'There has been an ERROR'});
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const { id } = req.params;
    const { tag_name } = req.body;
    const [updatedTag] = await Tag.update({ tag_name },
      {
        where: {
          id: req.params.id
        },
        include: {
          model: Product,
          model: ProductTag,
        },
      },
    );
    res.json(updatedTag);
  } catch (error) {
    console.error(error)

    res.status(500).send({ message: 'There has been an ERROR!' });

  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const  { id } = req.params;
    const tag = await Tag.findByPk(id);
    await tag.destroy();
    res.status(200).send({message: 'DELETED!'});
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'There has been an ERROR!'});
  }
});

module.exports = router;

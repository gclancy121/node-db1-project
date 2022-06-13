const router = require('express').Router()
const Accounts = require('./accounts-model');

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
Accounts.getAll().then(result => {
  res.status(200).json(result);
}).catch(err => next(err));
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((error, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(error.status || 500).json({message: error.message, stack: error.stack});
})

module.exports = router;

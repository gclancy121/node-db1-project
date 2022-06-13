const router = require('express').Router()
const Accounts = require('./accounts-model');
const {checkAccountId} = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
Accounts.getAll().then(result => {
  res.status(200).json(result);
}).catch(err => next(err));
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  console.log(req.validId); 
  Accounts.getById(req.validId).then(result => {
    res.status(200).json(result);
  }).catch (err => next(err));
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

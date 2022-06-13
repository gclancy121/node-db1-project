const router = require('express').Router()
const Accounts = require('./accounts-model');
const {checkAccountId, checkAccountPayload, checkAccountNameUnique} = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
Accounts.getAll().then(result => {
  res.status(200).json(result);
}).catch(err => next(err));
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getById(req.validId).then(result => {
    res.status(200).json(result);
  }).catch (err => next(err));
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create(req.validPayload).then(result => {
    res.status(201).json(result);
  }).catch(err => next(err));
})

router.put('/:id', checkAccountId, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  // console.log(req.validId);
  // console.log(req.validPayload);
  Accounts.updateById(req.validId, req.validPayload).then(result => {
    res.status(200).json(result);
  }).catch(err => next(err));
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.deleteById(req.validId).then(result => {
    res.status(200).json(result);
  })
})

router.use((error, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(error.status || 500).json({message: error.message, stack: error.stack});
})

module.exports = router;

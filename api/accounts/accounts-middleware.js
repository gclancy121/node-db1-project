const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)\
  const name = req.body.name;
  const budget = req.body.budget;
  if (typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({message: "name and budget are required"});
    return;
  }
  if (name.trim().length < 3 || name.trim().length > 100) {
    res.status(400).json({message: 'between 3 and 100'});
    return;
  }
  if (name == null || budget === undefined) {
    res.status(400).json({message: 'name and budget are required'});
    return;
  }
  if (typeof budget !== 'number') {
    res.status(400).json({message: 'must be a number'});
    return;
  }
  if (budget < 0 || budget > 1000000) {
    res.status(400).json({message: 'too large or too small'});
  }
 req.validPayload = {name: req.body.name.trim(), budget: budget}
 next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  const name = req.body.name;
  // DO YOUR MAGIC
  Accounts.getAll().then(result => {
    for (const names of result) {
     if (names.name === name) {
       res.status(400).json({message: 'name is taken'});
       return;
     }
    }
    next();
   })
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  Accounts.getById(id).then(result => {
    if (result == null) {
      res.status(404).json({message: 'account not found'});
    }
    req.validId = result.id;
    next();
  }).catch(err => next(err));
}

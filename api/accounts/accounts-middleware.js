const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)\
  const name = req.body.name;
  const budget = req.body.budget;
  if (typeof name !== 'string' || name == null || name.trim() === '') {
    res.status(500).json({message: "invalid name"});
  }
  if (typeof budget !== "number" || budget == null) {
    res.status(500).json({message: "invalid budget"});
  }
  req.validPayload = {name: name, budget: budget};
  next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  const name = req.body.name;
  // DO YOUR MAGIC
  Accounts.getAll().then(result => {
    for (const names of result) {
     if (names.name === name) {
       res.status(500).json({message: 'name already exists'});
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
      res.status(404).json({message: 'id not found'});
    }
    req.validId = result.id;
    next();
  }).catch(err => next(err));
}

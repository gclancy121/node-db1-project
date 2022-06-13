const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  Accounts.getById(id).then(result => {
    if (result == null) {
      res.status(404).json({message: 'id not found'});
    }
    req.validId = result.id
    next();
  })

}

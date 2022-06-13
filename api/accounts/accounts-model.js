const db = require('../../data/db-config');

async function getAll() {
  // DO YOUR MAGIC
 const results = await db('accounts');
 return results;
}

async function getById(id) {
  // DO YOUR MAGIC
  const results = await db('accounts').where('id', id).first();
  return results;
}

async function create(account) {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert(account); 
  return getById(id);

}

async function updateById(id, account) {
  // DO YOUR MAGIC
  await db('accounts').where('id', id).update({name: account.name, budget: account.budget});
  return getById(id);
}

async function deleteById(id) {
  // DO YOUR MAGIC
  const results = await getById(id);
  await db('accounts').where('id', id).delete();
  return results;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

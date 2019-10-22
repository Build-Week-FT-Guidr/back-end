const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    update,
    remove
}

function get(){
    return db('trips');
}

function getById(id) {
    return db('trips')
      .where({ id })
      .first();
  }

  function update(changes, id){
    return db('trips')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('trips')
        .where({ id })
        .del()
}
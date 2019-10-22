const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    update,
    remove
}

function get(){
    return db('profiles');
}

function getById(id) {
    return db('profiles')
      .where({ id })
      .first();
  }

  function update(changes, id){
    return db('profiles')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('profiles')
        .where({ id })
        .del()
}
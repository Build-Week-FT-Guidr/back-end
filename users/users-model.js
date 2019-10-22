const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getUserTrips,
    getUserProfile
  };

  function find() {
    return db('users').select('id', 'username', 'password');
  }
  
  function findBy(filter) {
    return db('users').where(filter);
  }
  
  async function add(user) {
    const [id] = await db('users').insert(user);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }
  
  function getUserTrips(userId) {
      return db('trips')
      .join('users', 'users.id', '=', 'trips.user_id')
      .where({ user_id : userId })
  }

  function getUserProfile(userId) {
    return db('profiles')
    .join('users', 'users.id', '=', 'profiles.user_id')
    .where({ user_id : userId })
}
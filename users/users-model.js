const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getUserTrips,
    getUserProfile,
    addUserTrip,
    addUserProfile
  };

  function find() {
    return db('users').select('id', 'username', 'password');
  }
  
  function findBy(filter) {
    return db('users').where(filter);
  }
  
  async function add(user) {
    console.log(user);
    const id = await db('users').insert(user);
    console.log('CONFIRM !!!!!!!!!!!!!!', id)
    if(typeof id === "number") {
      return findById(id);
    } else {
        return "Id not number"
    }
  }
  
  function findById(id) {
     console.log("FIND BY ID:", id)
      
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

  function addUserTrip(trip, userId) {
      return db('trips')
      .insert(trip)
      .where({ user_id : userId })
  }

  function addUserProfile(profile, userId) {
    return db('profiles')
    .insert(profile)
    .where({ user_id : userId })
}

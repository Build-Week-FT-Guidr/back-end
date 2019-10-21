
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Bob', password:'password'},
        {username: 'Joe', password:'password'},
        {username: 'George', password:'password'}
      ]);
    });
};

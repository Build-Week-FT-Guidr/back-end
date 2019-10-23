exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'Bob',username: 'Bob', password:'password'},
        {name:'Joe',username: 'Joe', password:'password'},
        {name:'George',username: 'George', password:'password'}
      ]);
    });
};

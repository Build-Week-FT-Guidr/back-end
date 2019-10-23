exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {user_id: 1, title: 'Mountain Man', tagline:'I move mountains for you.', guideSpecialty:'Climbing', age:55, yearsExperience:5},
        {user_id: 2, title: 'River Guy', tagline:'Rivers are fun', guideSpecialty:'River Rafting', age:34, yearsExperience:2},
        {user_id: 3, title: 'City Slicker', tagline:'Check out the Skyscrapers', guideSpecialty:'City Tours', age:22, yearsExperience:3},
        {user_id: 4, title: 'Deep Sea Diver', tagline:'Let me show you the ocean', guideSpecialty:'Diving', age:45, yearsExperience:12},

      ]);
    });
};

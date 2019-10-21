
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {user_id:1, title: 'Lake1', image:'imgurl', description:'On a lake.', isPrivate: true, 
        isProfessional:false, duration:'2 days', distance:'5 miles', date:'11/23/19', tripType:'Excursion'},
        {user_id:1, title: 'River1', image:'imgurl', description:'On a river', isPrivate: false, 
        isProfessional:true, duration:'3 days', distance:'7 miles', date:'11/27/19', tripType:'Relaxing'},
        {user_id:2, title: 'Lake2', image:'imgurl', description:'On lake2.', isPrivate: true, 
        isProfessional:false, duration:'2 days', distance:'5 miles', date:'11/24/19', tripType:'Excursion'},
        {user_id:2, title: 'River2', image:'imgurl', description:'On river2.', isPrivate: false, 
        isProfessional:true, duration:'3 days', distance:'10 miles', date:'11/30/19', tripType:'Relaxing'},
        {user_id:3, title: 'Mountain3', image:'imgurl', description:'On mountain3.', isPrivate: true, 
        isProfessional:false, duration:'2 days', distance:'10 miles', date:'11/12/19', tripType:'Climbing'},
        {user_id:3, title: 'River3', image:'imgurl', description:'On river3', isPrivate: false, 
        isProfessional:true, duration:'3 days', distance:'5 miles', date:'11/29/19', tripType:'Relaxing'},
      ]);
    });
};

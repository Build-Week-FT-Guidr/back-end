
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl=>{
    tbl.increments();

    tbl.string('name', 255);

    tbl.string('username', 128)
    .notNullable()
    .unique();

    tbl.string('password', 128)
    .notNullable();
  })
  .createTable('trips', tbl=>{
      tbl.increments();

      tbl.string('title', 128)
      .notNullable();

      tbl.string('image');

      tbl.string('description');
      
      tbl.boolean('isPrivate')
      .defaultTo(false);

      tbl.boolean('isProfessional')
      .defaultTo(false);

      tbl.string('duration');

      tbl.string('distance');

      tbl.date('date');

      tbl.string('tripType');

      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })

  .createTable('profiles', tbl=>{
      tbl.increments();

      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      tbl.string('title', 128)
      .notNullable();

      tbl.string('tagline', 128)
      
      tbl.string('guideSpecialty');

      tbl.integer('age');

      tbl.integer('yearsExperience');
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('profiles')
  .dropTableIfExists('trips')
  .dropTableIfExists('users')
};

exports.up = function (knex) {
  return knex.schema.createTable("menu_items", (tbl) => {
    tbl.increments(); //id
    tbl.string("name", 512).notNullable().unique().index(); //name
    tbl.decimal("price", 8, 2); // price
    tbl.boolean("available").defaultTo(false); //avaible
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu_items");
};

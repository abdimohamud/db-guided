exports.up = function (knex) {
  return knex.schema.table("categories", (tbl) => {
    tbl.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.table("categories", (tbl) => {
    tbl.dropColumn("description");
  });
};

exports.up = function (knex) {
    // add a new column to a table
    return knex.schema.table("categories", tbl => {
        tbl.string("description", 256);
    });
};

// run the down function using knex migrate:rollback
exports.down = function (knex) {
    return knex.schema.table("categories", tbl => {
        tbl.dropColumn("description");
    });
};

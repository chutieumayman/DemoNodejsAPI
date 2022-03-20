const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return {
        data,
        meta
    }
}
// create
async function create(programmingLanguage) {
    const result = await db.query(
        `INSERT INTO programming_languages 
        (name,age) 
        VALUES 
        ("${programmingLanguage.name}",${programmingLanguage.age})`
    );
    let message = 'Error in create programming language';
    if (result.affectedRows) {
        message = 'Programming language create successfully';
    }

    return { message };
}

// update by Id
async function update(id, programmingLanguage) {
    const result = await db.query(
        `UPDATE programming_languages 
      SET name="${programmingLanguage.name}" ,age=${programmingLanguage.age}
      WHERE id=${id}`
    );

    let message = 'Error in updating programming language';

    if (result.affectedRows) {
        message = 'Programming language updated successfully';
    }
    return { message };
}
async function remove(id) {
    const result = await db.query(
        `DELETE FROM programming_languages WHERE id=${id}`
    );

    let message = 'Error in deleting programming language';

    if (result.affectedRows) {
        message = 'Programming language deleted successfully';
    }

    return { message };
}

module.exports = {
    getMultiple,
    create,
    update,
    remove,
}
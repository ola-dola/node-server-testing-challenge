const db = require('../data/db-Config');

function find() {
    return null;
}

function findById(id) {
    return null;
}

async function add(data) {
    const [id] = await db('users').insert(data);
    return db('users').where({ id }).first();
}

function remove(userId) {
    return db('users').where({ id: userId }).del();
}

module.exports = {
    find,
    findById,
    add,
    remove
}
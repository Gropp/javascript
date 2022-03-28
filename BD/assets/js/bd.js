// exemplo de mainpulaca de BD com JS
const Database = require('sqllite async');

function execute(db) {
    return db.exec(
        CREATE TABLE IF NOT EXISTS orphamages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome Text,
            sobre Text,
            celular Text,
            images Text
        )
    )
}

module.exports = Database.open(_filename = '/database.sqllite').then(execute)
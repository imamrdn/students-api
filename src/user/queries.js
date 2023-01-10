const checkDataExists = "SELECT * FROM users WHERE password = $1";
const addUser = "INSERT INTO users (username, password) VALUES ($1,$2)";

module.exports = {
    checkDataExists,
    addUser
}
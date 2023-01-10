
const checkUsernameExists = "SELECT s FROM users s WHERE s.username = $1";
const addUser = "INSERT INTO users (username, password) VALUES ($1,$2)";

module.exports = {
    checkUsernameExists,
    addUser
}
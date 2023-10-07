// root.js
// handle GET request for the root route ("/")
const getRootHandler = (req, res) => {
    res.send('Get root route');
};

module.exports = { getRootHandler };

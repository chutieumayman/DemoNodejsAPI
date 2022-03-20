const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "trinh",
        password: "123456",
        database: "nodejs",
    },
    listPerPage: 10,
};
module.exports = config;
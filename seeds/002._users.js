exports.seed = function(knex) {
    
    return knex('users').insert([ 
        // password: password
        { username: 'admin', password:'$2b$12$ZVNv/S0MGuApEHpqxOSQT.0tcGqI1SY7eSIe6UwjLTPBITv8otRW6' },
        { username: 'user1', password:'$2b$12$ZVNv/S0MGuApEHpqxOSQT.0tcGqI1SY7eSIe6UwjLTPBITv8otRW6' },
    ]);

};


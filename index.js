const mysql = require(`mysql`);



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ``,
    database: "media"
});

connection.connect();

    let sql = "INSERT INTO books (book_title, book_author) VALUES('Permaculture Desginers Maunal', 'Bill Mollison')"
    connection.query(sql, function(err){
        if(err) {
            console.log(err)
        } else {
        console.log(`1 record inserted`)
        };
    });


    connection.query("SELECT * FROM movies", function (err, result,) {
        if(err) {
            console.log(err)
        } else {
        console.log(result) 
    };
    });

    connection.query ("UPDATE music SET music_title = 'youth of the nation'");

    connection.query ("DELETE FROM movies WHERE movies_id = 1");

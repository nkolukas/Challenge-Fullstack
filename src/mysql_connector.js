//mysql import MySQL
import mysql from 'mysql';

// create connection to mysql

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'challenge',
        password: '123456',
        database: 'budget'
    }
)

const connector = () => {
    connection.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}


export{connector};
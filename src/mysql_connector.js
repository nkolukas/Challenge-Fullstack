//mysql import MySQL
import mysql from 'mysql';

// create connection to mysql

const connectio = mysql.createConnection(
    {
        host: 'localhost',
        user: 'challenge',
        password: '123456',
        database: 'personal_budget'
    }
)

const connecto= ()=> {
    connectio.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}


export{connecto}
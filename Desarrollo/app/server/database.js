import mysql from 'mysql2';

export const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Santi2132',
   database: 'pisos',
})

connection.connect( err => {
   if(err)
      throw new Error(err);

   console.log("Coneccion exitosa");
})

import express from 'express';
import { router } from './routes.js'


const app = express();
const PORT = 5000;

app.use(router);

app.listen(PORT, () => {
   console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

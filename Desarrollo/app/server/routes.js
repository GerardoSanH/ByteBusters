import express from 'express';
import { connection } from './database.js'

export const router = express.Router();

router.get('/', () => {
   console.log('Hola');
})


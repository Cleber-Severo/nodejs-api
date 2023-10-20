import express from 'express'
import LivroController from '../Controllers/LivroController.js'

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);



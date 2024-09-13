import express from 'express';
import { getBooks, addBook, updateBook, deleteBook } from '../controllers/book.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/", addBook);

router.delete("/:id", deleteBook);

router.put("/:id", updateBook);

export default router;
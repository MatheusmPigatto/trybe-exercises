const express = require('express')
const app = express()
const port = 3000

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
    const books = await Book.getByAuthorId(req.params.id);

    res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

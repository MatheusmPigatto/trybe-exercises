const connection = require('./connection');

const serialize = (bookData) => ({
	authorId: bookData.author_id,
	title: bookData.title,
});

const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT author_id, title FROM model_example.books',
	);

	return books.map(serialize);
};

const getByAuthorId = async (id) => {
    	const [books] = await connection.execute(
		'SELECT author_id, title FROM model_example.books WHERE author_id = ? ', [id]
	);
    
	return books.map(serialize);
};

module.exports = {
	getAll,
    getByAuthorId,
};

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  const formatedBookNames = () => {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  };
/*   console.log(formatedBookNames()); */

  const nameAndAge = () => {
      const newArr = books.map((book) => {
          return { age: (book.releaseYear - book.author.birthYear), author: book.author.name }
      })
      return newArr.sort((a, b) => a.age - b.age)
  }
  
/*   console.log(nameAndAge()); */

  const fantasyOrScienceFiction = () => {
      return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  }

/*   console.log(fantasyOrScienceFiction()); */

  const oldBooksOrder = () => {
      const newArr = books.filter(book => (2022 - book.releaseYear) > 60);
      return newArr.sort((a, b) => a.releaseYear - b.releaseYear);
  }

/*   console.log(oldBooksOrder()); */

  const fantasyOrScienceFictionAuthors = () => {
      const filter = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
      const newArr = filter.map(book => book.author.name);
      return newArr.sort();
  }

  /* console.log(fantasyOrScienceFictionAuthors()); */

  const oldBooks = () => {
    const newArr = books.filter(book => (2022 - book.releaseYear) > 60);
    return newArr.map(book => book.name);
  }
/* 
  console.log(oldBooks()); */

  const authorWith3DotsOnName = () => {
    const regex = /[.]/g
    const dots = books.map((book/* , index */) => book.author.name.match(regex) /* + index */);
/*     const index = dots.sort((a, b) => a.length + b.length)[0].split('').pop();
    return books[index].author.name */
    return dots
  }
console.log(authorWith3DotsOnName());
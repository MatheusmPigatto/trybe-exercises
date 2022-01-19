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

  function authorBornIn1947() {
    return books.find(book => book.author.birthYear === 1947);
  }
  
  function smallerName() {
    let arr = [];
    books.forEach((book, index) => {
        arr.push([book.name.length, index]);
        arr = arr.sort((a, b) => a[0] - b[0]);
    })
    let nameBook = books[arr[0][1]];
    return nameBook;
  }

  function getNamedBook() {
    return books.find(book => book.name.length === 26);
  }

  function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1)
  }

  function everyoneWasBornOnSecXX() {
      return books.every(book => book.author.birthYear > 1900)
  }

  function someBookWasReleaseOnThe80s() {
    return books.some(book => book.releaseYear > 1980 && book.releaseYear < 1990)
  }

  function authorUnique() {
      const birthYears = [];
      books.forEach(book => birthYears.push(book.author.birthYear))
      console.log(birthYears)
      return birthYears.some((val, i) => birthYears.indexOf(val) !== i)
  }
  console.log(authorUnique()); 
let library = [];

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        let book = {
            title: title,
            author: author,
            pages: pages,
            genre: genre
        };
        library.push(book);
        displayBooks();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function searchBooks() {
    let searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    let searchResult = library.filter(book => book.title.toLowerCase().includes(searchTitle));
    displayBooks(searchResult);
}

function displayBooks(books = library) {
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    if (books.length === 0) {
        bookList.innerHTML = '<p>No books found</p>';
    } else {
        books.forEach(book => {
            let bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genre}</p>
            `;
            bookList.appendChild(bookDiv);
        });
    }
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('genre').value = '';
}
export const booksComponents = (books) => {
    const booksContainer = document.createElement('div');
    booksContainer.className = 'books-container';

    books.forEach((book) => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';

        const bookAuthor = document.createElement('h2');
        bookAuthor.className = 'book-author';
        bookAuthor.innerText = book.author_name;

        const bookImg = document.createElement('img');
        bookImg.className = 'book-img';
        bookImg.alt = book.author_name;
        bookImg.src = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://fortune.com/img-assets/wp-content/uploads/2024/03/Default-book.jpg?w=768&q=75';

        const bookPublishYear = document.createElement('p');
        bookPublishYear.className = 'book-publish-year';
        bookPublishYear.innerHTML = `<span class="label">📅 First Published:</span> ${book.first_publish_year}`;

        const bookLanguage = document.createElement('p');
        bookLanguage.className = 'book-language';
        bookLanguage.innerHTML = `<span class="label">🌐 Language:</span> ${book.language}`;

        const bookTitleOfBook = document.createElement('p');
        bookTitleOfBook.className = 'book-title-of-book';
        bookTitleOfBook.innerHTML = `<span class="label">📖 Title:</span> ${book.title}`;

        bookContainer.append(
            bookAuthor,
            bookImg,
            bookPublishYear,
            bookLanguage,
            bookTitleOfBook
        );
        booksContainer.appendChild(bookContainer);
    });

    return booksContainer;
};

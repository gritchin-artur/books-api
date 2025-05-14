export const updateBooksDom = (booksDomExists, books) => {
    const bookElements = booksDomExists.querySelectorAll('.book-container');

    if (books.length === 0) {
        booksDomExists.innerHTML = '';
        return;
    }

    books.forEach((book, i) => {
        let bookEl = bookElements[i];

        if (!bookEl) {
            bookEl = document.createElement('div');
            bookEl.className = 'book-container';

            const authorEl = document.createElement('h2');
            authorEl.className = 'book-author';

            const imgEl = document.createElement('img');
            imgEl.className = 'book-img';

            const yearEl = document.createElement('p');
            yearEl.className = 'book-publish-year';

            const langEl = document.createElement('p');
            langEl.className = 'book-language';

            const titleEl = document.createElement('p');
            titleEl.className = 'book-title-of-book';

            bookEl.append(authorEl, yearEl, langEl, titleEl);
            booksDomExists.appendChild(bookEl);
        }

        bookEl.querySelector('.book-author').innerText =
            book.author_name || 'Unknown author';
        bookEl.querySelector('.book-img').alt =
            book.author_name || 'Unknown author';
        bookEl.querySelector('.book-img').src = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://fortune.com/img-assets/wp-content/uploads/2024/03/Default-book.jpg?w=768&q=75';
        bookEl.querySelector('.book-publish-year').innerHTML =
            `<span class="label">📅 First Published:</span> ${book.first_publish_year || 'N/A'}`;
        bookEl.querySelector('.book-language').innerHTML =
            `<span class="label">🌐 Language:</span> ${book.language || 'N/A'}`;
        bookEl.querySelector('.book-title-of-book').innerHTML =
            `<span class="label">📖 Title:</span> ${book.title}`;
    });

    if (bookElements.length > books.length) {
        for (let i = books.length; i < bookElements.length; i++) {
            booksDomExists.removeChild(bookElements[i]);
        }
    }
};

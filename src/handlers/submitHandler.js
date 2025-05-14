import { getBooks } from '../../api-calls/getBooks.js';
import { booksComponents } from '../components/booksComponents.js';
import dom from '../dom.js';
import { updateBooksDom } from './updateBooksDom.js';

export const submitHandler = async (e) => {
    e.preventDefault();

    const inputBook = dom.input.value.trim();

    try {
        const books = await getBooks(inputBook);

        const booksDomExists = document.querySelector('.books-container');

        const numFound = document.createElement('p');
        numFound.className = 'number-found';

        if (!booksDomExists) {
            numFound.innerText = `Was found ${books.numFound} authors`;

            dom.result.append(numFound, booksComponents(books.docs));
        } else {
            dom.result.querySelector('.number-found').innerText =
                `Was found ${books.numFound} authors`;
            updateBooksDom(booksDomExists, books.docs);
        }
    } catch (error) {
        dom.error.innerText = 'Ooops something went wrong';
    }
};

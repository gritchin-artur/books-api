export const getBooks = async (bookName) => {
    const URL = `https://openlibrary.org/search.json?title=${bookName}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};

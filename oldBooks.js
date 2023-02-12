function oldBooks(input) {
    let index = 0
    let searchedBook = input[index];
    index++;
    let nextBook = input[index];
    index++;
    let checkedBooks = 0;

    while (nextBook !== "No More Books") {
        if (nextBook === searchedBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }
        checkedBooks++

        nextBook = input[index];
        index++
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${checkedBooks} books.`);
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


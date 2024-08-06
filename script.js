const containerMain = document.querySelector(".containerMain");
const bookContainer = document.querySelector("books-container")
const addBookBtn = document.querySelector(".addBookBtn");
const dialog = document.querySelector("#createBookDialog");
const dialogCaption = document.querySelector(".dialog-caption");
const books_container = document.querySelector(".books-container");
const cancelBtn = document.querySelector("#cancelBtn");
const bookForm = document.querySelector("#bookForm")
let myLibrary = [];

//book constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this. pages = pages;
    this.readStatus = readStatus;
}

//Click functionality for add-book btn
addBookBtn.addEventListener("click", displayDialog);

function displayDialog() {
 dialog.show();
}

//Cancel button functionality
cancelBtn.addEventListener("click", cancelDialog);
function cancelDialog() {
    bookForm.reset();
    dialog.close();
}


function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBook(book);
    console.log(myLibrary)
}

//Creating a new book through form
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const newPages = document.querySelector("#pages").value;
    const newReadStatus = document.querySelector("#readStatus").checked;
    const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
    console.log(newBook);
    addBookToLibrary(newBook);
    bookForm.reset();
    dialog.close();
})


function displayBook(book) {
    //Instantiate new div
    let newBook = document.createElement('div');
    newBook.className = "cards";
    books_container.append(newBook);

    //title
    let newTitle = document.createElement("p");
    newTitle.className = "cardTitle";
    let newTitletxt = document.createTextNode(book.title);
    newTitle.appendChild(newTitletxt);
    newBook.append(newTitle);

    //Author
    let newAuthor = document.createElement("p");
    newTitle.className = "cardAuthor";
    let newAuthorTxt = document.createTextNode(book.author);
    newAuthor.appendChild(newAuthorTxt);
    newBook.append(newAuthor);

    //Pages
    let newPages = document.createElement("p");
    newPages.className = "cardPages";
    let newPagesTxt = document.createTextNode(book.pages);
    newPages.appendChild(newPagesTxt);
    newBook.append(newPages);

    //readStatus checkbox
    let newReadStatusContainer = document.createElement("div");
    newReadStatusContainer.className = "readStatusContainer";
    let newReadStatusTxt = document.createElement("p");
    newReadStatusTxt.className = "readStatusTxt";
    let readTxt = document.createTextNode("Read: ");
    newReadStatusContainer.appendChild(readTxt);
    newReadStatusTxt.append(newReadStatusContainer);

    let newReadCheckbox = document.createElement("input");
    newReadCheckbox.setAttribute('type', "checkbox");
    newReadCheckbox.setAttribute('id', 'newReadCheckbox');
    if (book.readStatus == true) {
        newReadCheckbox.checked = true;
    }
    else {
        newReadCheckbox.checked = false;
    }
    newReadStatusContainer.append(newReadCheckbox);

    newBook.append(newReadStatusContainer);
    
    //Delete Button
    let newDeleteButton = document.createElement("button");
    newDeleteButton.className = "newDeleteButton";
    let newDeleteButtonTxt = document.createTextNode("Delete");
    newDeleteButton.appendChild(newDeleteButtonTxt);
    newBook.append(newDeleteButton);    

    //Delete button functionality

    newDeleteButton.addEventListener("click", () => {
        newBook.remove();
    });
}
//Tests
let testBook1 = new Book("Hunger Games", "Test123", "444", true);
let testBook2 = new Book("any", "any", "300", false)


addBookToLibrary(testBook1);
addBookToLibrary(testBook2);


let myLibrary = [];

//function Book() {

//}

function addBookToLibrary() {
    let bookTitle = prompt("Please insert a book title: ");
    myLibrary.push(bookTitle);
}

// function display() {
//     for (let b in myLibrary) {
//         console.log(myLibrary[b])
//     }
// }

const btn = document.querySelector("#btn");
btn.addEventListener("click", addBookToLibrary);
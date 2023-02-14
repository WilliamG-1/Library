const content = document.querySelector(".content");
const readStatusButton = document.querySelector(".readStatus");
const formContainer = document.querySelector(".formContainer");


readStatusButton.addEventListener('click', ()=>{
    content.classList.add("darken");
    giformContainer.classList.add("visible");
});
let myLibrary = []; // Initialize empty array of books

function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus

};

function addBookToLibrary(){

};

addBookToLibrary();
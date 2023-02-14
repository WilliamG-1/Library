const readStatusButton = document.querySelector(".readStatus");
readStatusButton.addEventListener('click', ()=>{
    let vari = prompt("Enter something");
    console.log(vari);
})
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
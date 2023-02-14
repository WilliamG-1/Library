const content = document.querySelector(".content");
const readStatusButton = document.querySelector(".readStatus");
const formContainer = document.querySelector(".formContainer");
let visible = false;
function toggleVisibility(){
    visible = !visible;
}
readStatusButton.addEventListener('click', ()=>{
    content.classList.add("darken");
    formContainer.classList.add("visible");
    setTimeout(toggleVisibility, 100);
});
content.addEventListener('click', ()=>{

    if (visible){
        alert("hi");
    }
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
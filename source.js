const content = document.querySelector(".content");
const bookShelf = document.querySelector(".bookshelf");
const formContainer = document.querySelector(".formContainer");
const submitButton = document.querySelector("#submitBook");
const addBookButton = document.querySelector("#addBookButton");

let textFields = document.querySelectorAll('input[type="text"]'); // Get title + author elements
let pageField = document.querySelector('input[type="number"]'); // Get page element
let checkBox = document.querySelector('input[type="checkbox"]'); // Get checkbox element

let myLibrary = []; // Initialize empty array of books
let visible = false; // Whether form is shown or not
function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus

};



let myBook = new Book("The Rest of the World", "William Gomez", 390, true);
myLibrary.push(myBook);
myLibrary.push(new Book("Test", "Martha", 100, false));


submitButton.addEventListener('click', function(e){
    e.preventDefault(); // Prevent form from submitting
   


});
// add darken class to content, display form
addBookButton.addEventListener('click', (e)=>{
    e.stopPropagation(); // Prevent click from "bubbling" to content parent
    content.classList.add("darken");
    formContainer.classList.add('visible');
    setTimeout(()=>{ formContainer.classList.add('visible')}, 10);
});
content.addEventListener('click', ()=>{
    if (formContainer.classList.contains('visible')){
        formContainer.classList.remove('visible');
        content.classList.remove('darken');
        resetForm();
        console.log("Remove")
    }

});

// readStatusButton.addEventListener('click', ()=>{
//     content.classList.add("darken");
//     formContainer.classList.add("visible");
//     setTimeout(toggleVisibility, 100);
// });
// content.addEventListener('click', ()=>{

//     if (visible){
//         // TODO: add book
//     }
// });
/*
<div class="leftGroove"></div>
<h2 class="title">Title</h2>
<div class="author">By: </div>

<div class="footer">
    <button type="button" class="readStatus"></button>
    <div class="pages">320</div>
</div>*/
function createDomBook(book){
    // Create all elements
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book");

    let b_groove = document.createElement("div");
    b_groove.classList.add("leftGroove");

    let b_title = document.createElement("h2");
    b_title.textContent = book.title;
    b_title.classList.add("title");

    let b_author = document.createElement("div");
    b_author.textContent = book.author;
    b_author.classList.add("author");

    let b_footer = document.createElement("div");
    b_footer.classList.add("footer");
    
    let b_read = document.createElement("button");
    b_read.textContent = book.readStatus ? "Read" : "Unread";
    b_read.classList.add("readStatus");

    let b_pages = document.createElement("div");
    b_pages.textContent = book.pages;
    b_pages.classList.add("pages");

    // Append elements
    b_footer.appendChild(b_read);
    b_footer.appendChild(b_pages);

    bookContainer.appendChild(b_groove);
    bookContainer.appendChild(b_title);
    bookContainer.appendChild(b_author);
    bookContainer.appendChild(b_footer);

    bookShelf.appendChild(bookContainer);
}
function resetForm(){
    textFields.textContent = "";
    pageField.value = 0;
    checkBox.checked = false;
}
let awesomeBook = new Book("Green", "Charles", 90, true);

function addBookToLibrary(){

};

myLibrary.forEach(function(book){
    createDomBook(book);
});

addBookToLibrary();
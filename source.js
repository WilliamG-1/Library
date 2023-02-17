const content = document.querySelector(".content");
const bookShelf = document.querySelector(".bookshelf");
const formContainer = document.querySelector(".formContainer");
const addBookButton = document.querySelector("#addBookButton");
const formItself = document.querySelector('form');
let textFields = document.querySelectorAll('input[type="text"]'); // Get title + author elements
let pageField = document.querySelector('input[type="number"]'); // Get page element
let checkBox = document.querySelector('input[type="checkbox"]'); // Get checkbox element

let myLibrary = []; // Initialize empty array of books
function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus

};

// Form Submission Button

formItself.addEventListener('submit', function(e) { 
    e.preventDefault(); // Prevent page refresh
    let title = textFields[0].value;
    let author = textFields[1].value;
    let pages = pageField.value;
    let readStatus = checkBox.checked;

    let newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    addBookToLibrary(newBook);

    formContainer.classList.remove('visible');
    content.classList.remove('darken');
    resetForm();
});

// add darken class to content, display form
addBookButton.addEventListener('click', (e)=>{
    e.stopPropagation(); // Prevent click from "bubbling" to content parent
    content.classList.add("darken");
    formContainer.classList.add('visible');
    setTimeout(()=>{ formContainer.classList.add('visible')}, 10);
});

// Exit out form when clicking outside it
content.addEventListener('click', ()=>{
    if (formContainer.classList.contains('visible')){
        formContainer.classList.remove('visible');
        content.classList.remove('darken');
        resetForm();
    }
});

// Create appropriate elements, append them to bookshelf
function addBookToLibrary(book){
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
    if (book.readStatus)
        b_read.classList.add('read');
    b_read.addEventListener('click', ()=>{
        b_read.classList.toggle('read');
        book.readStatus = !book.readStatus;
        b_read.textContent = book.readStatus ? "Read" : "Unread";
    });
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
// Remove all content from text fields
function resetForm(){
    textFields.forEach((field)=>{
        field.value = "";
    });
    pageField.value = "";
    checkBox.checked = false;
}

let first = new Book("Guide to CSS", "Unkown", 256, true);
myLibrary.push(first);
addBookToLibrary(first);


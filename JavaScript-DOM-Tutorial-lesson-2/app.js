var list = document.querySelector("#book-list ul");

//delete books
list.addEventListener('click', e => {
    if (e.target.className == "delete"){
        let li = e.target.parentElement;
        list.removeChild(li);
    }
})

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', e => {
    e.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;
    // create element
    let li = document.createElement('li');
    let bookName = document.createElement('span');
    let deleteBtn = document.createElement('span');

    // add content 
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // append element
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // add Class
    bookName.classList.add('name');
    deleteBtn.className = 'delete';
})

// hide books
const hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function(e){
    if (hideBook.checked) {
        list.style.display = "none";
    }
    else list.style.display = "initial";
})


// search filter
const searchBar = document.forms['search-books'].querySelector('input[type="text"]');
searchBar.addEventListener('keyup', e=>{
    const term = e.target.value.toLowerCase();
    const books = list.querySelectorAll('li');
    Array.from(books).forEach(book => {
        if (book.firstElementChild.innerHTML.toLowerCase().indexOf(term) != -1){
            book.style.display = "block";
        }else book.style.display ="none";
    })
})

// Tab show
const tabs=document.querySelectorAll('#tabbed-content .tabs li');

Array.from(tabs).forEach(tab=>{
    tab.addEventListener('click', function(e){
        Array.from(tabs).forEach(tab=>{
            document.querySelector(tab.getAttribute('data-target')).classList.remove('active');
            document.querySelector(e.currentTarget.getAttribute('data-target')).classList.add('active');
        })
    })
});

// Get references to the necessary DOM elements
const bookList = document.getElementById('bookList');
const addBookTitle = document.getElementById('addBookTitle');
const addBookDescription = document.getElementById('addBookDescription');
const addBookImageUrl = document.getElementById('addBookImageUrl');
const addBookButton = document.getElementById('addBookButton');

// Sample initial book list with title, description, and image URL
const books = [
    {
        title: 'To Kill a Mockingbird',
        description: 'A novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
        imageUrl: 'https://cdn.kobo.com/book-images/63901e1f-e685-4659-8ba8-d1eab571a31e/1200/1200/False/to-kill-a-mockingbird-3.jpg'
    },
    {
        title: '1984',
        description: 'A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.',
        imageUrl: 'https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg'
    }
];

// Function to render the book list
function renderBooks() {
    // Clear the book list before rendering
    bookList.innerHTML = '';
    
    books.forEach((book, index) => {
        const li = document.createElement('li');

        // Create div to hold the image and book info
        const bookInfoDiv = document.createElement('div');

        // Create the image element
        const img = document.createElement('img');
        img.src = book.imageUrl || 'https://via.placeholder.com/100'; // Fallback if no image
        bookInfoDiv.appendChild(img);

        // Create the input field for editing the book title
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = book.title;

        // Create the textarea for editing the description
        const descriptionInput = document.createElement('textarea');
        descriptionInput.rows = '3';
        descriptionInput.value = book.description;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeBook(index);

        // Append input, textarea, and button to the div
        const infoDiv = document.createElement('div');
        infoDiv.appendChild(titleInput);
        infoDiv.appendChild(descriptionInput);
        infoDiv.appendChild(removeButton);

        // Add everything to the book info div
        bookInfoDiv.appendChild(infoDiv);

        // Add the image and the div to the list item
        li.appendChild(bookInfoDiv);

        // Add the list item to the book list
        bookList.appendChild(li);

        // Update the book details on input changes
        titleInput.oninput = () => editBook(index, 'title', titleInput.value);
        descriptionInput.oninput = () => editBook(index, 'description', descriptionInput.value);
    });
}

// Function to add a new book
function addBook() {
    const newBookTitle = addBookTitle.value.trim();
    const newBookDescription = addBookDescription.value.trim();
    const newBookImageUrl = addBookImageUrl.value.trim();

    if (newBookTitle && newBookDescription) {
        books.push({
            title: newBookTitle,
            description: newBookDescription,
            imageUrl: newBookImageUrl || '' // Optional image URL
        });
        addBookTitle.value = '';
        addBookDescription.value = '';
        addBookImageUrl.value = '';
        renderBooks();
    } else {
        alert('Please fill in both the title and description fields.');
    }
}

// Function to edit a book detail
function editBook(index, field, newValue) {
    books[index][field] = newValue;
}

// Function to remove a book
function removeBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Event listener for the Add Book button
addBookButton.addEventListener('click', addBook);

// Render the initial book list
renderBooks();
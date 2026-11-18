function init() {
  getFromLocalStorage();
  renderBooks();
}

function renderBooks() {
  const bookRef = document.getElementById("bookContainer");
  bookRef.innerHTML = "";
  for (index = 0; index < books.length; index++) {
    console.log("book length", books.length);
    bookRef.innerHTML += `<div class="bookCard">
      <div>
        <h2>${books[index].name}</h2>
        <hr>
        <img class="bookImage" src="./assets/img/book-cover.jpg">
        <hr>
        <div class="priceLike">
          <p>${books[index].price}</p>
          <div class="likeHeart">
            <span id="numberOfLikes${index}">${books[index].likes}</span>
            <button onclick="toggleLike(${index})">${renderHeart(index)}</button>
          </div>
        </div>
        <div class="bookDetails">
          <span class="bookDetailLabel">Author</span>
          <span>: ${books[index].author}</span>
          <span class="bookDetailLabel">ErscheinungsJahr</span>
          <span>: ${books[index].publishedYear}</span>
          <span class="bookDetailLabel">Genre</span>
          <span>: ${books[index].genre}</span>
        </div>
        <hr>
        <div class="showComment" id="comments_${index}">
          <h3>Kommentare:</h3>
          ${renderComments(index)}
        </div>
        <div class="commentClass">
          <input
            id="comment_input_${index}"
            type="text"
            placeholder="Schreibe dein Kommentar..."
            onkeydown="if (event.key === 'Enter') addComment(${index})"
          >
          <button onclick="addComment(${index})">
            <img src="./assets/icon/send.svg">
          </button>
        </div>
      </div>
    </div>`;
  }
}

function renderComments(bookIndex) {
  let commentLength = books[bookIndex].comments.length;
  console.log("commentlength", commentLength);
  let commentText = "";

  for (let index = commentLength - 1; index >= 0; index--) {
    commentText += `<p>[${books[bookIndex].comments[index].name}]</p>
                     <span>:${books[bookIndex].comments[index].comment}</span>`;
  }
  return commentText;
}

function addComment(bookIndex) {
  const inputRef = document.getElementById(`comment_input_${bookIndex}`);
  const text = inputRef.value.trim();

  if (text === "") {
    return;
  }

  let newComments = {
    name: "Sweta",
    comment: text,
  };

  books[bookIndex].comments.push(newComments);

  inputRef.value = "";
  document.getElementById(`comments_${bookIndex}`).innerHTML =
    renderComments(bookIndex);
  saveToLocalStorage();
}

function renderHeart(index) {
  const heartSelection = document.getElementById(`heart${index}`);
  let likedOrNot = books[index].liked;
  if (likedOrNot == true) {
    return `<i id="heart${index}" class="heart fa fa-heart"></i>`;
  } else if (likedOrNot == false) {
    return `<i id="heart${index}" class="heart fa fa-heart-o"></i>`;
  }
}

function toggleLike(heartIndex) {
  const heartSelection = document.getElementById(`heart${heartIndex}`);
  let likeCount = books[heartIndex].likes;
  let likedOrNot = books[heartIndex].liked;

  if (heartSelection.classList.contains("fa-heart-o")) {
    likeCount++;
    books[heartIndex].liked = true;
    renderHeart(heartIndex);
    books[heartIndex].likes = likeCount;
    document.getElementById(`numberOfLikes${heartIndex}`).innerHTML =
      books[heartIndex].likes;
    heartSelection.classList.replace("fa-heart-o", "fa-heart");
    saveToLocalStorage();
  } else if (heartSelection.classList.contains("fa-heart")) {
    likeCount--;
    books[heartIndex].liked = false;
    renderHeart(heartIndex);
    books[heartIndex].likes = likeCount;
    document.getElementById(`numberOfLikes${heartIndex}`).innerHTML =
      books[heartIndex].likes;
    heartSelection.classList.replace("fa-heart", "fa-heart-o");
    saveToLocalStorage();
  }
}

function saveToLocalStorage() {
  localStorage.setItem("myBooks", JSON.stringify(books));
}

function getFromLocalStorage() {
  let myBooks = JSON.parse(localStorage.getItem("myBooks"));
  if (myBooks != null) {
    books = myBooks;
  } else return books;
  console.log(books);
}

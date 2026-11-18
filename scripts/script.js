function init() {
  getFromLocalStorage();
  renderBooks();
}

function renderBooks() {
  const bookRef = document.getElementById("bookContainer");
  bookRef.innerHTML = "";
  for (index = 0; index < books.length; index++) {
    bookRef.innerHTML += returnBookTemplate(index);
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

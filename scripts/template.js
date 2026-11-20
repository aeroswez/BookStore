function bookTemplate(index) {
  return `
    <div class="bookCard">
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
        <div class="showComment">
          <h3>Kommentare:</h3>
          <div id="comments_${index}">
            ${renderComments(index)}
          </div>
        </div>
        <div class="commentClass">
          <input
            id="comment_input_${index}"
            type="text"
            placeholder="Schreibe dein Kommentar..."
            onkeydown="if (event.key === 'Enter') addComment(${index})">
          <button onclick="addComment(${index})">
            <img src="./assets/icon/send.svg">
          </button>
        </div>
      </div>
    </div>`
}

function commentTemplate(bookIndex, index) {
  return `<p>[${books[bookIndex].comments[index].name}]</p>
          <span>:${books[bookIndex].comments[index].comment}</span>`;

}
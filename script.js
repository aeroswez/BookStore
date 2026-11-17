let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ];

   function init()
  {
    getFromLocalStorage();
    renderBooks();
  }


  function renderBooks(){
    const bookRef = document.getElementById("bookContainer");
    bookRef.innerHTML="";
    for(index = 0; index<books.length; index++){
        console.log("book length", books.length);
        bookRef.innerHTML += `<div class='bookCard'> <div><h2>${books[index].name}</h2><hr>
                            <img class='bookImage' src='./assets/img/book-cover.jpg'><hr>
                            <div class='priceLike'><p>${books[index].price}</p>
                            <div class='likeHeart'>
                                <span id="numberOfLikes${index}">${books[index].likes}</span>
                               <button onclick="toggleLike(${index})"> <i id="heart${index}" class="heart fa fa-heart-o"></i> </button>
                            </div>
                            </div>
                            <p>Author&nbsp;&nbsp;&nbsp;:${books[index].author}</span></p>
                            <p>ErscheinungsJahr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:${books[index].publishedYear}
                            <p>Genre:${books[index].genre}</p><hr>
                            <div class="showComment" id="comments_${index}"><h3>Kommentare:</h3>
                            ${renderComments(index)}
                            </div>
                            <div class="commentClass"><input id="comment_input_${index}" type="text" placeholder="Schreibe dein Kommentar...">
                            <button onclick="addComment(${index})"><img src="./assets/icon/send.svg"></button></div>
                            
                            </div>
                            </div>`
    }




  }


  function renderComments(bookIndex)
  {
    
    let commentLength= books[bookIndex].comments.length;
    console.log("commentlength",commentLength);
    let commentText="";

    for(let index = commentLength-1; index >= 0; index--)
    {
             commentText+=       `<p>[${books[bookIndex].comments[index].name}]</p>
                     <span>:${books[bookIndex].comments[index].comment}</span>`;
    }
    return commentText;

  }


  function addComment(bookIndex)
  { 
    const inputRef = document.getElementById(`comment_input_${bookIndex}`);
    const text = inputRef.value.trim();

    if (text === "") 
    {
      return;
    }

    books[bookIndex].comments.push(
    {
      name: "Sweta",
      comment: text
    });

    inputRef.value = "";
    document.getElementById(`comments_${bookIndex}`).innerHTML = renderComments(bookIndex);
    saveToLocalStorage();
    
  }

  function toggleLike(heartIndex)
  {
   const heartSelection= document.getElementById(`heart${heartIndex}`);
   let likeCount= books[heartIndex].likes;
   if(heartSelection.classList.contains("fa-heart-o"))
   {
    likeCount++;
    books[heartIndex].likes= likeCount;
    document.getElementById(`numberOfLikes${heartIndex}`).innerHTML=books[heartIndex].likes;
    heartSelection.classList.replace("fa-heart-o", "fa-heart");
   }

   else if (heartSelection.classList.contains("fa-heart"))
   {
    likeCount--;
    books[heartIndex].likes= likeCount;
    document.getElementById(`numberOfLikes${heartIndex}`).innerHTML=books[heartIndex].likes;
    heartSelection.classList.replace("fa-heart", "fa-heart-o");
   }


  }

  function saveToLocalStorage()
  {
    localStorage.setItem("myBooks", JSON.stringify(books));
  }

  function getFromLocalStorage()
  {
    let myBooks = JSON.parse(localStorage.getItem("myBooks"));
    if(myBooks !=null)
    {
      books=myBooks;
    }

    else return books;
     console.log(books);
  }

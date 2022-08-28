// Your code here
const filmsList = document.getElementById ('films')
const filmTitle = document.getElementById ('title')
const filmDescription = document.getElementById ('film-info')
const filmRuntime= document.getElementById ('runtime')
const filmShowtime = document.getElementById ('showtime')
const filmCapacity = document.getElementById ('ticket-num')
const filmPoster = document.getElementById ('poster')




loadFilms()
loadFilm(1)

function loadFilms() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //   document.getElementById("demo").innerHTML = this.responseText;
      console.log (this.responseText)
      let moviesList = JSON.parse(this.responseText)
      moviesList.forEach(element => {
        let movie = "<li class= 'film item'> " + element.title  +" </li>"
        filmsList.innerHTML += movie
        
      });
      }

    xhttp.open("GET", "http://localhost:3000/films", true);
    xhttp.send();
  }

  function loadFilm(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //   document.getElementById("demo").innerHTML = this.responseText;
      console.log (this.responseText)
      let movie = JSON.parse(this.responseText)
      filmTitle.innerText = movie.title
      filmDescription.innerText = movie.description
      filmRuntime.innerText = movie.runtime
      filmShowtime.innerText = movie.showtime
      filmCapacity.innerText = movie.capacity
      filmPoster.src = movie.poster

    }

    xhttp.open("GET", `http://localhost:3000/films/${id}`, true);
    xhttp.send();
  }





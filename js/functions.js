// function to get json movies sort by chosen variable
async function movieSort(sort) {
  const res = await fetch("http://localhost:8000/api/v1/titles/?sort_by=" +
   sort)
  return res.json();
}

// function to get the best movie object
async function bestMovie() {
  let movieDic = await movieSort("-imdb_score");
  let movieUrl = await movieDic.results[0].url;
  let res = await fetch(movieUrl);
  let bestMovie = await res.json();
  return new Movie(bestMovie);
}

// function to get array of movie objects sort by chosen variable
async function bestMovies(k, sort) {
  var movieDic = await movieSort(sort);
  var bestMovies = await [];
  while (bestMovies.length < k) {
    for await (item of movieDic.results) {
      var movieUrl = await item.url;
      var res = await fetch(movieUrl);
      var movie = await res.json();
      var newLength = await bestMovies.push(new Movie(movie));
    };
    var res = await fetch(movieDic.next);
    var movieDic = await res.json();
  };
  return bestMovies;
}

// function to insert html code in category div
async function categoryMovies(genre, number) {
  let idgenre = "#" + genre;
  let sortgenre = "-imdb_score&genre=" + genre;
  let btnGenre = genre + "__button";
  let closeGenre = genre + "__close";

  await bestMovies(number, sortgenre).then(function(value) {
    for (var i = 0; i < number; i++) {
      let select = "#" + genre + "-modal" + i;
      document
        .querySelector(idgenre)
        .insertAdjacentHTML('beforeend', '<div><img class="' + genre +
        '__button"' + ' src=' + value[i].image_url + ' alt="' + genre + i +
        '"> <div id="' + genre + '-modal' + i +
        '" class="modal"><div class="modal-content">' + '<span class="' +
        genre + '__close close">&times;</span><h1></h1><ul></ul></div></div></div>');
      value[i].modal(select);
      let bmModal = document.querySelector(select);
      let bmBtn = document.getElementsByClassName(btnGenre)[i];
      let bmSpan = document.getElementsByClassName(closeGenre)[i];
      bmBtn.onclick = function() {
        bmModal.style.display = "block";
      }
      bmSpan.onclick = function() {
        bmModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == bmModal) {
          bmModal.style.display = "none";
        }
      }
    }
  })
  await new Carousel(document.querySelector(idgenre),{
    slidesToScroll: 1
  })

}

// function to get Best Movie object

async function movieSort(sort) {
  const res = await fetch("http://localhost:8000/api/v1/titles/?sort_by=" + sort)
  return res.json();
}

async function bestMovie() {
  let movieDic = await movieSort("-imdb_score");
  let movieUrl = await movieDic.results[0].url;
  let res = await fetch(movieUrl);
  let bestMovie = await res.json();
  return new Movie(bestMovie);
}

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

bestMovies(11, "-imdb_score").then(function(res){
  console.log(res);
})

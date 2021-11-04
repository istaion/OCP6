class Movie {
  constructor(item) {
    this.title = item.title;
    this.year = item.year;
    this.date_published = item.date_published;
    this.duration = item.duration;
    this.description = item.description;
    this.long_description = item.long_description;
    this.imdb_score = item.imdb_score;
    this.votes = item.votes;
    this.gross_income = item.worldwide_gross_income;
    this.genres = item.genres;
    this.directors = item.directors;
    this.actors = item.actors;
    this.countries = item.countries;
    this.image_url = item.image_url;
  }

  modal(selector) {
    document
      .querySelector(selector + " h1")
      .innerText = this.title;
    document
      .querySelector(selector + " h1")
      .insertAdjacentHTML('afterend', '<img src=' + this.image_url + ' alt="best-movie">'
                          + '<p> genre :' + this.genres + '</p>'
                          + '<p> date de sortie :' + this.date_published + '</p>'
                          + '<p> rated :' + this.rated + '</p>'
                          + '<p> score Imdb :' + this.imdb_score + '</p>'
                          + '<p> réalisateur :' + this.directors + '</p>'
                          + '<p> acteurs :</p>'
                        );
    this.actors.forEach(actor => {
      document
        .querySelector(selector + " ul")
        .insertAdjacentHTML('beforeend', '<li>' + actor + '</li>');
    });
    document
      .querySelector(selector + " ul")
      .insertAdjacentHTML('afterend', '<p> durée :' + this.duration + 'min </p>'
                          + '<p> pays d’origine :' + this.countries + '</p>'
                          + '<p> résultat au Box Office :' + this.votes + '</p>'
                          + '<p> résumé :' + this.long_description + '</p>'
                        );
  };
}

// to insert html code in bests movies div
async function youp() {
  await bestMovies(8, "-imdb_score").then(function(value) {
    for (var i = 1; i < 8; i++) {
      let select = "#bests-movies-modal" + i;
      document
        .querySelector("#best-movies")
        .insertAdjacentHTML('beforeend', '<div><img class="bests-movies__button"'+
        ' src=' + value[i].image_url +
        ' alt="best-movies' + i + '"> <div id="bests-movies-modal' + i +
        '" class="modal"><div class="modal-content">' +
        '<span class="bests-movies__close close">&times;</span><h1></h1><ul></ul></div></div></div>');
      value[i].modal(select);
      let bmModal = document.querySelector(select);
      let bmBtn = document.getElementsByClassName("bests-movies__button")[i-1];
      let bmSpan = document.getElementsByClassName("bests-movies__close")[i-1];
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

  await new Carousel(document.querySelector("#best-movies"),{
    slidesToScroll: 1
  })

}

youp()

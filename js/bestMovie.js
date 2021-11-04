bestMovie().then(function(value){
    document
      .querySelector(".best-movie__first-block > h1")
      .innerText = value.title;
    document
      .querySelector(".best-movie__second-block")
      .insertAdjacentHTML('afterbegin', '<img src=' + value.image_url + ' alt="best-movie">');
    document
      .querySelector(".best-movie__second-block > p")
      .innerText = value.description;
    value.modal("#best-movie-modal")
});

var modal = document.getElementById("best-movie-modal");
var btn = document.getElementsByClassName("best-movie__button")[0];
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

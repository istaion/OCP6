// Movie object
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
  // to insert html in modal
  modal(selector) {
    document
      .querySelector(selector + " h1")
      .innerText = this.title;
    document
      .querySelector(selector + " h1")
      .insertAdjacentHTML('afterend', '<img src=' + this.image_url
                          + ' alt="best-movie">' + '<p> genre :' + this.genres
                          + '</p>' + '<p> date de sortie :'
                          + this.date_published + '</p>' + '<p> rated :'
                          + this.rated + '</p>' + '<p> score Imdb :'
                          + this.imdb_score + '</p>' + '<p> réalisateur :'
                          + this.directors + '</p>' + '<p> acteurs :</p>'
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

class Carousel {
  /**
  *
  * @param {HTMLElement} Element
  * @param {object} options
  */

  constructor (element, options = {}) {
    this.element = element
    this.options = Object.assign({},{
      slidesToScroll: 1,
      slidesVisible: 4
    }, options)
    this.currentItem = 0
    let children = [].slice.call(element.children)
    this.root = this.createDivWithClass('carousel')
    this.container = this.createDivWithClass('carousel__container')
    this.root.appendChild(this.container)
    this.element.appendChild(this.root)
    this.items = children.map((child) => {
      let item = this.createDivWithClass('carousel__item')
      item.appendChild(child)
      this.container.appendChild(item)
      return item
    })
    this.setStyle()
    this.createNavigation()
  }

  /**
  *
  * @param {string} className
  * @returns {HTMLElement}
  */
  setStyle () {
    let ratio = this.items.length / this.options.slidesVisible
    this.container.style.width = (ratio*100) + "%"
    this.items.forEach(item => item.style.width = (100 / this.options.slidesVisible)/ratio + "%")
  }

  /**
  *
  * @param {string} className
  * @returns {HTMLElement}
  */
  createDivWithClass (className) {
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }

  createNavigation () {
    let nextButton = this.createDivWithClass('carousel__next')
    let prevButton = this.createDivWithClass('carousel__prev')
    this.root.appendChild(nextButton)
    this.root.appendChild(prevButton)
    nextButton.addEventListener('click', this.next.bind(this))
    prevButton.addEventListener('click', this.prev.bind(this))
  }

  next () {
    this.goToItem(this.currentItem + this.options.slidesToScroll)
  }

  prev () {
    this.goToItem(this.currentItem - this.options.slidesToScroll)
  }

  goToItem (index) {
    let translateRatio = index * -100 / this.items.length
    this.container.style.transform = 'translate3d(' + translateRatio + '%, 0, 0)'
    this.currentItem = index
  }
}

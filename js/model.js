class Movie {
  /**
  * Movie object
  */

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
    this.rated = item.rated;
  }

  /**
  * To insert html code in modal
  * @param {HTMLElement} selector
  */
  modal(selector) {
    document
      .querySelector(selector + " h1")
      .innerText = this.title;
    document
      .querySelector(selector + " h1")
      .insertAdjacentHTML('afterend', '<div class="modal-content__first-block">'
                          + '<img src=' + this.image_url + '><p> résumé :'
                          + this.long_description +
                          '</p></div>'
                          + '<p> genre :' + this.genres
                          + '</p>' + '<p> date de sortie :'
                          + this.date_published + '</p>' + '<p> rated :'
                          + this.rated + '</p>' + '<p> score Imdb :'
                          + this.imdb_score + '</p>' + '<p> réalisateur :'
                          + this.directors + '</p><p> durée :'
                          + this.duration + 'min </p>'
                          + '<p> acteurs :</p>'
                        );
    this.actors.forEach(actor => {
      document
        .querySelector(selector + " ul")
        .insertAdjacentHTML('beforeend', '<li>' + actor + '</li>');
    });
    document
      .querySelector(selector + " ul")
      .insertAdjacentHTML('afterend', '<p> pays d’origine :' + this.countries
                          + '</p><p> résultat au Box Office :'
                          + this.votes + '</p>'
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
      slidesVisible: 5
    }, options)
    this.isMobile = true
    this.currentItem = 0
    let children = [].slice.call(element.children)
    this.root = this.createDivWithClass('carousel')
    this.container = this.createDivWithClass('carousel__container')
    this.root.appendChild(this.container)
    this.element.appendChild(this.root)
    this.nextButton = this.createDivWithClass('carousel__next')
    this.prevButton = this.createDivWithClass('carousel__prev')
    this.items = children.map((child) => {
      let item = this.createDivWithClass('carousel__item')
      item.appendChild(child)
      this.container.appendChild(item)
      return item
    })
    this.setStyle()
    this.createNavigation()
    this.windowResize()
    window.addEventListener('resize', this.windowResize.bind(this))
  }

  /**
  *
  * @param {string} className
  * @returns {HTMLElement}
  */
  setStyle () {
    let ratio = this.items.length / this.slidesVisible
    this.container.style.width = (ratio*100) + "%"
    this.items.forEach(item => item.style.width = (100 / this.slidesVisible)/ratio + "%")
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
    this.root.appendChild(this.nextButton)
    this.root.appendChild(this.prevButton)
    this.nextButton.addEventListener('click', this.next.bind(this))
    this.prevButton.addEventListener('click', this.prev.bind(this))
    this.prevButton.style.display = "none"
  }

  next () {
    this.goToItem(this.currentItem + this.slidesToScroll)
  }

  prev () {
    this.goToItem(this.currentItem - this.slidesToScroll)
  }

  goToItem (index) {
    let translateRatio = index * -100 / this.items.length
    this.container.style.transform = 'translate3d(' + translateRatio + '%, 0, 0)'
    this.currentItem = index
    if (this.currentItem == 0) {
      this.prevButton.style.display = "none"
    } else {
      this.prevButton.style.display = "flex"
    }
    if (this.currentItem == this.items.length - this.slidesVisible) {
      this.nextButton.style.display = "none"
    } else {
      this.nextButton.style.display = "flex"
    }
  }

  windowResize () {
    let mobile = window.innerWidth < 1000
    if (mobile !== this.isMobile) {
      this.isMobile = mobile
      this.setStyle()
    }
  }

  get slidesToScroll () {
    return this.isMobile ? 1 : this.options.slidesToScroll
  }

  get slidesVisible () {
    return this.isMobile ? 3 : this.options.slidesVisible
  }
}

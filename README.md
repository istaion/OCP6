# OCproject6

Pour installer l'API local visitez https://github.com/istaion/OCproject6

## films par catégories

Pour changer le nombre de films présent dans une catégorie il suffit de modifier
le nombre correspondant dans le fichier hatml, par exemple pour afficher 14
films dans la catégorie adventure on code :

```html
<script>categoryMovies("Adventure", 14)</script>
```

Pour changer le nombre dans la catégorie meilleurs films il faut modifier la
ligne 3 et 4 du fichier bestMovies.js en mettant le nombre de films désiré plus
1, par exemple pour 15 films :

```js
await bestMovies(16, "-imdb_score").then(function(value) {
  for (var i = 1; i < 16; i++) {
```

## changer de catégorie

Pour changer la catégorie d'une division il faut changer l'id de la div ainsi que le script qui suit.

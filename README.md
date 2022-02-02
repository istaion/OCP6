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
ligne 40 du fichier bestMovies.js en mettant le nombre de films désiré plus
1, par exemple pour 15 films :

```js
insertBestMovies(16)
```

## changer de catégorie

Pour changer la catégorie d'une division il faut changer l'id de la div ainsi que le script qui suit.

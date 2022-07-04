# AnimeTaste_API

## Type de BDD

* **NoSQL (mongodb)**

## Quelques Informations

* lancer la commande : ``git clone https://github.com/CorentinLrcn/AnimeTaste_API.git`` pour cloner le repository

* ``cd AnimeTaste_API`` pour entrer dans le projet

* ``npm i`` pour installer les différents modules

* ``node start`` pour lancer le server

* (vous pouvez lancer ``mongod`` si vous voulez avoir un aperçu direct sur la bdd)

* lancer Insomnia

* il y a différentes requêtes par collections / modèles de données :
    * users :
        * get sur la route '/' pour avoir tous les users
        * get sur la route '/:id_user' pour avoir un user spécifique
        * post sur la route '/signIn' pour créer un user
        * put sur la route '/:id_user' pour mettre à jour un user
        * delete sur la route '/:id_user' pour supprimer un user spécifique
    * mangas :
        * get sur la route '/' pour avoir tous les mangas
        * get sur la route '/:id_manga' pour avoir un manga spécifique
        * post sur la route '/' pour créer un manga
        * put sur la route '/:id_manga' pour mettre à jour un manga
        * delete sur la route '/:id_manga' pour supprimer un manga
    * recipes :
        * get sur la route '/' pour avoir toutes les recettes
        * get sur la route '/:id_recipe' pour avoir une recette spécifique
        * post sur la route '/' pour créer une recette
        * put sur la route '/:id_recipe' pour mettre à jour une recette
        * delete sur la route '/:id_recipe' pour supprimer une recette
    * ingredients :
        * get sur la route '/' pour avoir tous les ingredients
        * get sur la route '/:id_ingredient' pour avoir un ingredient spécifique
        * post sur la route '/' pour créer un ingredient
        * put sur la route '/:id_ingredient' pour mettre à jour un ingredient
        * delete sur la route '/:id_ingredient' pour supprimer un ingredient

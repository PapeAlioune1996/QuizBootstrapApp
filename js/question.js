//liste de question
let questions = [
    {
       num:1,
       question : "Que signifie HTML?",
       reponse : "Hyper Text Markup Language",
       options : [
           "Hyper Text Preprocessor",
           "Hyper Text Markup Language",
           "Hyper Text Multiple Language",
           "Hyper Pre-Processing"
       ]
    },
    {
       num:2,
       question : "Que signifie CSS?",
       reponse :  "Cascading Style Sheet",
       options : [
           "Cascading Style Sheet",
           "Coding Style Sheet",
           "Color Style Sheet",
           "Comon Style Sheet"
       ]
    }, {
       num:3,
       question : "Que signifie PHP?",
       reponse : "Hypertext Preprocessor",
       options : [
           "Hypertext Preprocessor",
           "Hypertext Programing",
           "Hyper Pre-Processing", 
            "Home Text Preprocessor",
       ]
    }, {
       num:4,
       question : "Qu'est-ce que cela signifie lorsque nous disons qu'une page web est responsive?",
       reponse: "La mise en page répond dynamiquement à la taille et à l'orientation des différents écrans",
       options : [
           "Le contenu répond aux besoins d'accessibilité des utilisateurs handicapés",
           "Les éléments multimédias de la page répondent à l'interaction utilisateur",
           "Siri est entièrement intégré à la page. Celle-ci répond donc aux commandes vocales",
           "La mise en page répond dynamiquement à la taille et à l'orientation des différents écrans"
       ]
    }, {
       num:5,
       question : "Quel est moyen le plus simple et le plus rapide d'inclure Bootstrap dans votre projet ?",
       reponse :  "Créer un lien vers le fichier CSS minifié hébergé sur le réseau de distribution de contenu (CDN) de Bootstrap",
       options : [
           "Télécharger les fichiers compilés",
           "Créer un lien vers le fichier CSS minifié hébergé sur le réseau de distribution de contenu (CDN) de Bootstrap",
           " Compiler le code source",
           "Utiliser un gestionnaire de package pris en charge"
       ]
    }, {
       num:6,
       question : "Pour garantir que Bootstrap fonctionne comme prévu,  quelles bibliothèques JavaScript devez-vous inclure ?",
       reponse: "jQuery",
       options : [
           "jQuery",
           "MooTools",
           "Dojo Toolkit",
           "cdn"
       ]
    }, {
       num:7,
       question : "Que crée le fait d’envelopper le contenu de votre page dans un div avec la classe  .container-fluid  ?",
       reponse: "Un conteneur qui occupe 100 % de la largeur de la zone de visualisation",  
       options : [
           "Un conteneur centré qui s'adapte à la largeur de son contenu",
           "Un conteneur centré qui s'adapte à la largeur de la zone de visualisation",
           "Un conteneur qui occupe 100 % de la largeur de la zone de visualisation",
           "Autre"
       ]
    }, {
       num:8,
       question : "Laquelle des propositions suivantes est vraie ?",
       reponse:   "Un div.container  peut inclure plusieurs div  .row, et un div  .row  peut contenir plusieurs div  .col[-*] ",
           
       options : [
           "Un div  .container  ne peut inclure qu'un div .row, et un div  .row  peut contenir plusieurs div  .col[-*]",
           "Un div.container  peut inclure plusieurs div  .row, et un div  .row  peut contenir plusieurs div  .col[-*] ",
           "Un div  .container  peut inclure plusieurs div  .row, et un div  .row  ne peut contenir qu'un div  .col[-*]",
           "Un div  .container  ne peut inclure qu'un div  .row, et un div  .row  ne peut contenir qu'un div  .col[-*]"
       ]
    }, {
       num:9,
       question : "Qui a cree JavaScript?",
       reponse: "Brendan Eich",
       options : [
           "Elone Musk",
           "Brendan Eich",
           "Gido van Rosun",
           "Happy"
       ]
    }, {
       num:10,
       question : "En quel annee JavaScript a ete cree?",
       reponse: "1995",
       options : [
           "1999",
           "1995",
           "1899",
           "1997"
       ]
    }, {
       num:11,
       question : "Qui a cree HTML?",
       reponse: "Tim Berners-Lee",
       options : [
           "Elone Musk",
           "Brendan Eich",
           "Tim Berners-Lee",
           "Gido van Rosun"
       ]
    }, {
       num:12,
       question : "Qui a créé le java?",
       reponse :"James Gosling",
       options : [
           "Elone Musk",
           "Tim Berners-Lee",
           "Brendan Eich",
           "James Gosling"
       ]
    }, {
       num:13,
       question : "Quels sont les types de mise en page disponibles dans Bootstrap ?",
       reponse: "Mise en page fluide",
       options : [
           "Mise en page fluide",
           "Mise en page opaque",
           "Mise en page large",
           "Mise en page leger"
       ]
    }, {
       num:14,
       question : "Quelle fonction pouvez-vous utiliser pour envelopper le contenu d'une page ?",
       reponse: ".Container",
       options : [
           ".row",
           ".col",
           ".Container",
           ".sec"
       ]
    }, {
       num:15,
       question : "Comment ajouter un badge à un groupe de liste dans Bootstrap ?",
       reponse: "span class = 'badge' dans l'élément li.",
       options : [
           "span class = 'badge' dans l'élément li.",
           "span class = 'badge' sous l'élément li.",
           "span class = 'badge' sur l'élément li.",
           "span class = 'badge' apres l'élément li.",
   
   
       ]
    }, {
       num:16,
       question : "Que signifie XML?",
       reponse: "Extensible Markup Language",
       options : [
           "Hyper Text Preprocessor",
           "Hyper Text Markup Preprocessor",
           "Extensible Markup Language",
           "Hyper Pre-Processing"
       ]
    }, {
       num:17,
       question : "Laquelle des propositions suivantes affiche un lien sous la forme d'un bouton rouge ?",
       reponse:  "btn btn-danger",
       options : [
           "btn btn-warning",
           "btn btn-danger",
           "btn btn-info",
           "btn btn-primary"
       ]
    }, {
       num:18,
       question : "Laquelle des propositions suivantes affiche une bordure verte autour de l'élément ?",
       reponse: "border-success",
       options : [
           "border-secondary",
   
            "border-info",
   
            "border-warning",
   
            "border-success"
   
       ]
    }, {
       num:19,
       question : "Que fait la classe  .shadow-lg  lorsqu’elle est appliquée à un élément ?",
       reponse:  "Elle crée un grand effet d'ombre pour l'élément",
       options : [
           "Elle crée un grand effet d'ombre pour l'élément",
   
          "Elle crée un effet d'ombre pour l'élément uniquement sur de grandes zones de visualisation",
   
          "Elle crée un effet d'ombre pour l'élément uniquement sur de grandes zones de visualisation minimum"
          ,"Pas de reponse"
   
       ]
    }, {
       num:20,
       question : "Quel est le moyen le plus simple d'ajouter une structure à vos formulaires avec Bootstrap, et de créer un  <div>  avec la classe pour contenir les éléments liés à chaque champ de formulaire ?",
       reponse: "form-group",
       options : [
           "form-control",
           "form-input",
           "form-field",
           "form-group"
       ]
    }, {
       num:21,
       question : "Que se passe-t-il si vous appliquez une marge négative  my-n3  à un composant card ?",
       reponse:  "Le composant card a réduit sa marge externe verticale de 1 rem",
       options : [
           "Le composant card a réduit sa marge interne verticale de 1 rem",
           "Le composant card a réduit ses marges externes verticale et horizontale de 1 rem",
           "Le composant card a réduit sa marge externe verticale de 1 rem",
           "Le composant card a réduit sa marge externe verticale de 3 rem"
       ]
    }, {
       num:22,
       question : "Que permet de faire la classe  .stretched-link  ?",
       reponse:   "La classe  stretched-link  s’applique à une balise des liens   pour rendre son bloc contenant cliquable",
       options : [  
       "La classe  stretched-link  s’applique à une balise  des liens  pour étirer son contenu sur toute la largeur disponible",
       "La classe  stretched-link  s’applique à une balise des liens   pour rendre son bloc contenant cliquable",
       "La classe  stretched-link  s’applique à un bloc pour rendre la balise  des liens   non cliquable",
       "La classe  stretched-link  s’applique à une balise des liens  pour étirer le bloc “conteneur” sur la largeur de la grille Bootstrap"
   
       ]
    }, {
       num:23,
       question : "Que se passe-t-il après modification de la valeur des options Sass  $enable-rounded  et  $enable-shadow  par false sur le fichier  _variables.scss  ?",
       reponse:  "L’intégralité des composants qui utilisent des coins arrondis ou un ombrage n’en possèdent plus",
       options : [
       
       "Le style graphique des boutons ne propose plus de coins arrondis ni d’ombrage",
       "L’intégralité des composants qui utilisent des coins arrondis ou un ombrage n’en possèdent plus",
       "L’intégralité des composants proposent un style graphique avec des coins arrondis et/ou un ombrage",
       "Aucun événement graphique n’intervient au niveau des composants Bootstrap"
       ]
    }, {
       num:24,
       question : "Qui a cree Python?",
       reponse: "Gido van rosun",
       options : [
           "Mark zukerberg",
           "Gido van rosun",
           "Jack Ma",
           "Tim krul"
       ]
    }, {
       num:25,
       question : "Quel est la date de première version de python:?",
       reponse: "1991",
       options : [
           "1990",
           "2003",
           "2000",
           "1991"
       ]
    }
   
   ];
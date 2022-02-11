# TestSuez  
Application réalisée pour l'entreprise Suez Consulting en quelques heures - Angular CLI/NodeJS  
  
Front:  
Le front se lance sur le port 4200, et est donc accessible à l'adresse "localhost:4200"  
Lancement depuis le dossier "clientSuez":  
  ng serve  
  
Back:  
Le back se lance sur le port 8080, et est donc accessible à l'adresse "localhost:8080"  
Requete disponible:  
  "http://localhost:8080/api/films"  
    Cette route sert à démontrer le fair que le back est foncitonnel. Elle peut être appelée si elle contient dans son body:  
      "area", ayant par exemple comme valeur "Europe"  
      "name", ayant par exemple comme valeur "Paris"  
Lancement depuis le dossier "server":  
  npm start  
  
L'application possède:  
  -Un routing fonctionnel  
  -Le chargement de modules sur la page, optimisant sa vitesse de chargement, ne surchargeant donc pas le routing  
  -Un backend NodeJS fonctionnel, avec un ajout de routes simple  
  
  
Norme de commit:  
  Format: [{{Value}}] - Description du ticket  
    où Value peut prendre les formes suivantes:  
      ADD  
      FIX  
      NORM  
      DEL  

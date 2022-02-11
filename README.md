# TestSuez
Application réalisée pour l'entreprise Suez Consulting en quelques heures - Angular CLI/NodeJS\n
\n
Front:\n
Le front se lance sur le port 4200, et est donc accessible à l'adresse "localhost:4200"\n
Lancement depuis le dossier "clientSuez":\n
  ng serve\n
\n
Back:\n
Le back se lance sur le port 8080, et est donc accessible à l'adresse "localhost:8080"\n
Requete disponible:\n
  "http://localhost:8080/api/films"\n
    Cette route sert à démontrer le fair que le back est foncitonnel. Elle peut être appelée si elle contient dans son body:\n
      "area", ayant par exemple comme valeur "Europe"\n
      "name", ayant par exemple comme valeur "Paris"\n
Lancement depuis le dossier "server":\n
  npm start\n
\n
L'application possède:\n
  -Un routing fonctionnel\n
  -Le chargement de modules sur la page, optimisant sa vitesse de chargement, ne surchargeant donc pas le routing\n
  -Un backend NodeJS fonctionnel, avec un ajout de routes simple\n
\n  
\n
Norme de commit:\n
  Format: [{{Value}}] - Description du ticket\n
    où Value peut prendre les formes suivantes:\n
      ADD\n
      FIX\n
      NORM\n
      DEL\n

/*
Import des composants serveur
*/
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const engine = require('consolidate');
    const port = 2017;
//

/*
Importer les modules de gestion des routes
*/
    const front = require('./routes/front');
    const api = require('./routes/api');
// 




/*
Configuration du serveur
*/
    // Création du serveur
    const app = express();

    // Définition du dossier statique
    app.set('views', __dirname + '/www');
    app.engine('html', engine.mustache);
    app.set('view engine', 'html');
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Définition des routes
    
    app.use('/', front);
    app.use('/api', api);
// 



/*
Lancer le server
*/
    app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );
// 
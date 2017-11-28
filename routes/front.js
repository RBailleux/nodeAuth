/*
Import des composants du module route
*/
    const express = require('express');
    const router = express.Router();
//






/*
Définition des routes
*/
    router.get(`/`, (req, res, next) => {

        // Renvoyer la réponse la vue html
        res.render(`index.html`);
    });

    router.get(`/profile`, (req, res, next) => {

        // Renvoyer la réponse la vue html
        res.render(`profile.html`);
    });
//




/*
Export du module route
*/
    module.exports = router; 
//
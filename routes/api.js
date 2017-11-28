/*
Import des composants du module route
*/
const express = require('express');
const routerGoogle = express.Router();
//

let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectId;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:9090/nodeAuth';


/*
Définition des routes
*/
routerGoogle.get(`/`, (req, res, next) => {
    res.json({res: `Salut API`});
});
//

routerGoogle.post('/login', (req, res, next) => {
  MongoClient.connect(mongodbUrl, (err, db) => {
    if(err) { res.send(err);}
    else{
      db.collection('users').find({login: req.body.loginEmail, password: req.body.loginPassword}).toArray((err, collection) => {
        if(err) { res.send(err);}
        else{
          if(collection.length){
            //Credentials are correct
            res.send(true);
          }
          else{
            //Credentials are incorrect
            res.send(false);
          }
        }
      })
    }
    db.close();
  })
})

routerGoogle.post('/register', (req, res, next) => {
  if(req.body.registerPassword != req.body.registerPasswordSecure){
    //Different password
    console.log('Passwords différents');
  }
  else{
    MongoClient.connect(mongodbUrl, (err, db) => {
      if(err) { 
        res.send(err);
      }
      else
      {
        db.collection('users').find({login: req.body.registerEmail}).toArray((err, collection) => {
          if(err) { 
            res.send(err);
          }
          else{
            if(collection.length < 1){
              //Login is unique 
              db.collection('users').insert({login: req.body.loginEmail, password: req.body.loginPassword, firstname: req.body.registerFirstname, lastName: req.body.registerLastname}, (err, newUser) => {
                if(err) { res.send(err);}
                else{
                  res.json(newUser);
                }
              })
            }
          }
        })
      }
      db.close();
    })
  }
})




/*
Export du module route
*/
    module.exports = routerGoogle; 
//
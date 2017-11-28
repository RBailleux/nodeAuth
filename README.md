# NODE_MONGOlogin_register

Nom de la base mongo : nodeAuth
Une seule table : users
Output de db.users.find().pretty() :
> db.users.find().pretty()
{
        "_id" : ObjectId("5a1d26f9a65535dcbaca27b5"),
        "login" : "admin",
        "password" : "admin"
}
{
        "_id" : ObjectId("5a1d2821a65535dcbaca27b6"),
        "login" : "admin@admin.fr",
        "password" : "admin"
}

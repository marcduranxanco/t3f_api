# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# Media
Media creation bla bla bla

1. [GET /media/](#getmedia)
1. [GET /media/{id}/](#getmediaid)
1. [POST /media/](#postmedia)
1. [PUT /media/](#putmedia)
1. [DELETE /media/](#deletemedia)

<a id="getmedia"></a>
## GET /media/
Get list of all media

**RESPONSE**

**Status**: 200 Ok 
``` json
{
    "id": 1,
    "user_name": "User_1",
    "name": "User1",
    "surname": "Surname_1",
    "email": "test1@test.com",
    "password": "$2a$10$kkyPImyMltLNUnoAZBiGNOuaBSyfWexzF6l8oR0M.DeGR/ZAIgbk.",
    "updatedAt": "2020-09-07T16:39:06.451Z",
    "createdAt": "2020-09-07T16:39:06.451Z"
}
```

--------------------

<a id="getmediaid"></a>
## GET /media/{id}/
Get Media details that corresponds to param id.

**RESPONSE**

Array of media

**Status**: 200 Ok
``` json
[
    {
        "id": 3,
        "user_name": "User_1",
        "name": "User1",
        "surname": "Surname_1",
        "email": "test1@test.com",
        "password": "$2a$10$QgARPcAxBgtk7LpJWQKOQ.9bOb3Lu.kpEvyexJxKRaqjUJ8jf1EGq",
        "createdAt": "2020-09-08T17:35:39.000Z",
        "updatedAt": "2020-09-08T17:35:39.000Z"
    },
    {
        "id": 4,
        "user_name": "User_2",
        "name": "User2",
        "surname": "Surname_2",
        "email": "test2@test.com",
        "password": "$2a$10$F9PQOB6M76JFPgfrU./1sOpLjydrcOybacGzLvhNupcU4aLcKwQii",
        "createdAt": "2020-09-08T17:35:56.000Z",
        "updatedAt": "2020-09-08T17:35:56.000Z"
    },
    {
        "id": 5,
        "user_name": "User_3",
        "name": "User3",
        "surname": "Surname_3",
        "email": "test3@test.com",
        "password": "$2a$10$s2XnkXk61dl5YP9Qay8g2eVBDfg6RZXpf8tlhohTUXkvqkAcSoCCu",
        "createdAt": "2020-09-08T17:36:20.000Z",
        "updatedAt": "2020-09-08T17:36:20.000Z"
    }
]
```

--------------------

<a id="postmedia"></a>
## POST /media/
Create a new Media

Params:
* title : 
* description : 
* platforms_ids : json with id's of platforms existing in the database
* id_tmdb : id corresponding to tmdb id media.
* path_img (optional) : path to the image.

**QUERY**

Json in body:
``` json
{
	"title": "Pelicula 3",
	"description": "Descripción de la pelicula 3" ,
	"platforms_ids": "[{\"id\":1}]",
	"id_tmdb": "12345",
	"path_img": "/ruta/peli3"
}
```

**RESPONSE**

**Status**: 201 Created 
``` json
{
    "id": 23,
    "title": "Pelicula 3",
    "description": "Descripción de la pelicula 3",
    "platforms_ids": "[{\"id\":1}]",
    "id_tmdb": "12345",
    "id_img": 63,
    "updatedAt": "2020-09-08T17:57:37.749Z",
    "createdAt": "2020-09-08T17:57:37.749Z"
}
```

--------------------

<a id="putmedia"></a>
## PUT /media/{id}/
Update Media:

Params: All parameters are optional.
* title :
* description :
* platforms_ids :
* id_tmdb :
* path_img :

**QUERY**

Json in body:
``` json
{
    "title": "Pelicula 5",
	"description": "Pelicula 5" ,
    "platforms_ids": "[{\"id\":2}]",
	"id_tmdb": "5",
	"path_img": "new/route/to/img5"
}
```

**RESPONSE**

**Status**: 200 Ok 
``` json
{
{
    "message": "Media updated correctly",
    "media": {
        "id": 25,
        "title": "Pelicula 5",
        "description": "Pelicula 5",
        "platforms_ids": "[{\"id\":2}]",
        "id_tmdb": "5",
        "id_img": 65,
        "createdAt": "2020-09-08T17:59:05.000Z",
        "updatedAt": "2020-09-08T21:54:04.354Z"
    }
}
}
```

--------------------

<a id="deletemedia"></a>
## DELETE /media/{id}
Delete Media with id sent in paramater.

Params:
* id: Media id

**RESPONSE**

**Status**: 200 Ok 
``` json
{
    "message": "Media deleted correctly"
}
```

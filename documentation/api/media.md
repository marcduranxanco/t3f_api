# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# CRUD MEDIA

1. [GET /media/read](#getmedia)
1. [GET /media/read/{id}/](#getmediaid)
1. [GET /media/filter/](#getfilter)
1. [POST /media/](#postmedia)
1. [PUT /media/](#putmedia)
1. [DELETE /media/](#deletemedia)

--------------------

<a id="getmedia"></a>
## GET /media/read
Get list of all media

**RESPONSE**
Json with all media
**Status**: 200 Ok 
``` json
[
     {
        "id": 1,
        "title": "Lovers & Leavers (Kuutamolla)",
        "description": "Nondisplaced segmental fracture of shaft of unsp fibula",
        "year": "1999",
        "genere": "Drama|Romance",
        "id_user": 2,
        "platforms_ids": null,
        "id_tmdb": 74,
        "id_img": 4,
        "createdAt": "2020-09-29T18:57:10.000Z",
        "updatedAt": "2020-09-29T18:57:10.000Z"
    },
    {
        "id": 2,
        "title": "To Be Twenty",
        "description": "Nondisp fx of ant column of r acetab, subs for fx w nonunion",
        "year": "2010",
        "genere": "Comedy|Drama|Horror",
        "id_user": 2,
        "platforms_ids": null,
        "id_tmdb": 51,
        "id_img": 6,
        "createdAt": "2020-09-29T18:57:10.000Z",
        "updatedAt": "2020-09-29T18:57:10.000Z"
    },
    {
        "id": 3,
        "title": "One Nite In Mongkok (Wong gok hak yau)",
        "description": "Sltr-haris Type II physeal fx phalanx of unsp toe, 7thB",
        "year": "2003",
        "genere": "Action|Crime|Drama",
        "id_user": 3,
        "platforms_ids": null,
        "id_tmdb": 6,
        "id_img": 4,
        "createdAt": "2020-09-29T18:57:10.000Z",
        "updatedAt": "2020-09-29T18:57:10.000Z"
    }
]
```

--------------------

<a id="getmediaid"></a>
## GET /media/{id}/
Get Media details that corresponds to param id.

**RESPONSE**
Json with media
**Status**: 200 Ok
``` json
{
    "id": 1,
    "title": "Lovers & Leavers (Kuutamolla)",
    "description": "Nondisplaced segmental fracture of shaft of unsp fibula",
    "year": "1999",
    "genere": "Drama|Romance",
    "id_user": 2,
    "platforms_ids": null,
    "id_tmdb": 74,
    "id_img": 4,
    "createdAt": "2020-09-29T18:57:10.000Z",
    "updatedAt": "2020-09-29T18:57:10.000Z"
}
```

--------------------

<a id="getfilter"></a>
## GET /filter/

**PARAMETERS**
- top : will get most added media
- year : corresponds to **year** 
- ttl : filters `like` **title**
- own : filters where **id_user** creator
- gen : filters `like` **genere**

**EXAMPLE**
/media/filter/?year=2003&ttl=Easy&own=2&gen=Comedy

**RESPONSE**
Array of media filtered
**Status**: 200 Ok
``` json
[
    {
        "id": 4,
        "title": "Mystery on Monster Island",
        "description": "Bipolar disord, crnt episode manic w/o psych features, mod",
        "year": "2006",
        "genere": "Adventure|Comedy",
        "id_tmdb": 41,
        "User": {
            "user_name": "User1",
            "email": "User1@example.com"
        }
    },
    {
        "id": 7,
        "title": "Easy Street",
        "description": "Pneumonitis due to solids and liquids",
        "year": "2008",
        "genere": "Comedy",
        "id_tmdb": 24,
        "User": {
            "user_name": "User1",
            "email": "User1@example.com"
        }
    },
    {
        "id": 1,
        "title": "Lovers & Leavers (Kuutamolla)",
        "description": "Nondisplaced segmental fracture of shaft of unsp fibula",
        "year": "1999",
        "genere": "Drama|Romance",
        "id_tmdb": 74,
        "User": {
            "user_name": "User2",
            "email": "User2@example.com"
        }
    }
]
```

--------------------

<a id="postmedia"></a>
## POST /media/
Create a new Media.
Only available for admins and superAdmin Roles.

**PARAMETERS**
* title
* description
* year
* genere
* platforms_ids : json with id's of platforms existing in the database
* id_tmdb : id corresponding to tmdb id media.
* path_img (optional) : path to the image.
* id_user : User craetor of the media

**QUERY**
Json in body:
``` json
{
    "title": "Pelicula 1",
    "description": "Descripción de la pelicula 1" ,
    "year": 1999,
    "genere": "Drama",
    "platforms_ids": "[{\"id\":1}]",
    "id_tmdb": "555555",
    "path_img": "/ruta/peli1",
    "id_user": 1
}
```

**RESPONSE**
**Status**: 201 Created 
``` json
{
    "id": 11,
    "title": "Pelicula 1",
    "description": "Descripción de la pelicula 1",
    "year": 1999,
    "genere": "Drama",
    "platforms_ids": "[{\"id\":1}]",
    "id_tmdb": "555555",
    "id_user": 1,
    "id_img": 7,
    "updatedAt": "2020-10-03T10:35:12.283Z",
    "createdAt": "2020-10-03T10:35:12.283Z"
}
```

--------------------

<a id="putmedia"></a>
## PUT /media/{id}/
Update Media
Only available for admins and superAdmin Roles.

**PARAMETERS**
* title
* description
* year
* genere
* platforms_ids : json with id's of platforms existing in the database
* id_tmdb : id corresponding to tmdb id media.
* path_img (optional) : path to the image.
* id_user : User craetor of the media

**QUERY**
Json in body:
``` json
{
    "title": "Pelicula 1",
    "description": "Descripción de la pelicula 1" ,
    "year": 1999,
    "genere": "Drama",
    "platforms_ids": "[{\"id\":1}]",
    "id_tmdb": "555555",
    "path_img": "/ruta/peli1",
    "id_user": 1"
}
```

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "message": "Media updated correctly",
    "media": {
        "id": 11,
        "title": "Pelicula 5",
        "description": "Pelicula 5",
        "year": "1999",
        "genere": "Drama",
        "id_user": 1,
        "platforms_ids": "[{\"id\":2}]",
        "id_tmdb": "5",
        "id_img": 7,
        "createdAt": "2020-10-03T10:35:12.000Z",
        "updatedAt": "2020-10-03T10:41:20.168Z"
    }
}
```

--------------------

<a id="deletemedia"></a>
## DELETE /media/{id}
Delete Media with id sent in paramater.

**PARAMETER**
* id: Media id

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "message": "Media deleted correctly"
}
```

# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# CARDS ENDPOINTS:

1. [GET /cards/read](#getcard)
1. [GET /cards/read/:id?/](#getcardid)
1. [GET /cards/detail](#getcarddetail)
1. [POST /cards/](#postcard)
1. [PUT /cards/](#putcard)
1. [DELETE /cards/](#deletecard)

--------------------

<a id="getcard"></a>
## GET /cards/read
Get card details that corresponds to param id.

**RESPONSE**
Array of cards
**Status**: 200 Ok
``` json
[
    {
        "id": 1,
        "name": "Card 1",
        "id_user": 2,
        "createdAt": "2020-10-03T11:03:15.000Z",
        "updatedAt": "2020-10-03T11:03:15.000Z"
    },
    {
        "id": 3,
        "name": "Card update 2",
        "id_user": 2,
        "createdAt": "2020-10-03T11:12:20.000Z",
        "updatedAt": "2020-10-03T11:15:08.000Z"
    }
]
```
--------------------
<a id="getcardid"></a>
## GET /cards/read/:id/
Get list of all cards.

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "id": 3,
    "name": "Card update 2",
    "id_user": 2,
    "createdAt": "2020-10-03T11:12:20.000Z",
    "updatedAt": "2020-10-03T11:15:08.000Z"
}
```
--------------------

<a id="getcarddetail"></a>
## GET /cards/detail

**EXAMPLE**
/cards/detail?own=2

**RESPONSE**
Array of cards with detail
**Status**: 200 Ok
``` json
[
    {
        "id": 1,
        "name": "Card 1",
        "createdAt": "2020-10-03T11:03:15.000Z",
        "User": {
            "id": 2,
            "user_name": "User2"
        },
        "Media": [
            {
                "id": 1,
                "title": "Lovers & Leavers (Kuutamolla)",
                "description": "Nondisplaced segmental fracture of shaft of unsp fibula",
                "year": "1999",
                "genere": "Drama|Romance",
                "id_tmdb": 74
            },
            {
                "id": 2,
                "title": "To Be Twenty",
                "description": "Nondisp fx of ant column of r acetab, subs for fx w nonunion",
                "year": "2010",
                "genere": "Comedy|Drama|Horror",
                "id_tmdb": 51
            }
        ]
    },
    {
        "id": 4,
        "name": "Card 3",
        "createdAt": "2020-10-03T11:24:11.000Z",
        "User": {
            "id": 2,
            "user_name": "User2"
        },
        "Media": [
            {
                "id": 7,
                "title": "Easy Street",
                "description": "Pneumonitis due to solids and liquids",
                "year": "2008",
                "genere": "Comedy",
                "id_tmdb": 24
            },
            {
                "id": 8,
                "title": "Last Summer",
                "description": "Disp fx of med condyle of unsp tibia, 7thF",
                "year": "2008",
                "genere": "Drama",
                "id_tmdb": 30
            }
        ]
    }
]
```
--------------------
<a id="postcard"></a>
## POST /cards/
Create a new Card

**PARAMETERS**
* name 

**QUERY**
Json in body:
``` json
{
	"name": "Card 2"
}
```

**RESPONSE**
**Status**: 201 Created 
``` json
{
    "id": 3,
    "name": "Card 2",
    "id_user": 2,
    "updatedAt": "2020-10-03T11:12:20.191Z",
    "createdAt": "2020-10-03T11:12:20.191Z"
}
```

--------------------

<a id="putcard"></a>
## PUT /cards/{id}/
Update card.

**PARAMETERS**
* name

**QUERY**
Json in body:
``` json
{
	"name": "Card update 2"
}
```

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "message": "card updated correctly"
}
```

--------------------

<a id="deletecard"></a>
## DELETE /cards/{id}
Delete card with id set in paramater.

**PARAMETERS**
* id: card id

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "message": "Card deleted correctly"
}
```
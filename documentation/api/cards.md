# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# CARDS ENDPOINTS:

1. [GET /cards/](#getcard)
1. [GET /cards/:id?/](#getcard)
1. [POST /cards/](#postcard)
1. [PUT /cards/](#putcard)
1. [DELETE /cards/](#deletecard)

--------------------

<a id="getcard"></a>
## GET /cards
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

<a id="getcard"></a>
## GET /cards/:id/
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
# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# USER ENDPOINTS:

1. [GET /cardmedia/](#getCardMedia)
1. [GET /cardmedia/:id?/](#getCardMediaid)
1. [POST /cardmedia/](#postCardMedia)
1. [PUT /cardmedia/](#putCardMedia)
1. [DELETE /cardmedia/](#deleteCardMedia)

--------------------

<a id="getCardMedia"></a>
## GET /cardmedia/
Get list of all cardmedia.

**RESPONSE**
**Status**: 200 Ok 
``` json
[
    {
        "id": 1,
        "id_card": 1,
        "id_media": 1,
        "createdAt": "2020-10-03T11:07:19.000Z",
        "updatedAt": "2020-10-03T11:07:19.000Z"
    },
    {
        "id": 2,
        "id_card": 4,
        "id_media": 7,
        "createdAt": "2020-10-03T11:25:02.000Z",
        "updatedAt": "2020-10-03T11:25:02.000Z"
    }
]
```

--------------------

<a id="getCardMediaid"></a>
## GET /cardmedia/:id/
Get cardmedia details that corresponds to param id.

**RESPONSE**
Array of cardmedia

**Status**: 200 Ok
``` json
[
    {
        "id": 2,
        "id_card": 4,
        "id_media": 7,
        "createdAt": "2020-10-03T11:25:02.000Z",
        "updatedAt": "2020-10-03T11:25:02.000Z"
    }
]
```

--------------------

<a id="postCardMedia"></a>
## POST /cardmedia/
Create a new user with default role (user)

**PARAMETERS**
* id_card
* id_media

**QUERY**
Json in body:
``` json
{
    "id_card": 4,
    "id_media": 7
}
```

**RESPONSE**
**Status**: 201 Created 
``` json
{
    "id": 2,
    "id_card": 4,
    "id_media": 7,
    "updatedAt": "2020-10-03T11:25:02.601Z",
    "createdAt": "2020-10-03T11:25:02.601Z"
}
```

--------------------

<a id="putCardMedia"></a>
## PUT /cardmedia/{id}/
Update user.
Only available for Admin and superAdmin roles.

**PARAMETERS**
All parameters are optional.
* user_name 
* name 
* surname 
* email
* role
* password 

**QUERY**
Json in body:
``` json
{
	"user_name": "User_1_Updated",
	"name": "User1_Update",
	"surname": "New_Surname",
	"email": "new_mail@test.com",
	"password": "Password_updated"
}
```

**RESPONSE**
**Status**: 200 Ok 
``` json
{
    "message": "User updated correctly"
}
```

--------------------

<a id="deleteCardMedia"></a>
## DELETE /cardmedia/{id}
Delete user with id sent in paramater.

**PARAMETERS**
* id: user id

**RESPONSE**

**Status**: 200 Ok 
``` json
{
    "message": "User deleted correctly"
}
```
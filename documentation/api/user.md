# TAPE TO THE FUTURE API REST
[Go to the main doc page](../../README.md)

# USER
User creation bla bla bla

1. [GET /users/](#getusers)
1. [GET /users/{id}/](#getusersid)
1. [POST /users/](#postusers)
1. [PUT /users/](#putusers)
1. [DELETE /users/](#deleteusers)
1. [Post /login/](#login)

<a id="getusers"></a>
## GET /users/
Get list of all users

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

<a id="getusersid"></a>
## GET /users/{id}/
Get user details that corresponds to param id.

**RESPONSE**

Array of users

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

<a id="postusers"></a>
## POST /users/
Create a new user

Params:
* user_name 
* name 
* surname 
* email 
* password 

**QUERY**

Json in body:
``` json
{
	"user_name": "User_1",
	"name": "User1",
	"surname": "Surname_1",
	"email": "test1@test.com",
	"password": "111-111-111"
}
```

**RESPONSE**

**Status**: 201 Created 
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

<a id="putusers"></a>
## PUT /users/{id}/
Update user:

Params: All parameters are optional.
* user_name 
* name 
* surname 
* email 
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

<a id="deleteusers"></a>
## DELETE /users/{id}
Delete user with id sent in paramater.

Params:
* id: user id

**RESPONSE**

**Status**: 200 Ok 
``` json
{
    "message": "User deleted correctly"
}
```

--------------------

<a id="login"></a>
## POST /login/
User Login. Create token in database.

Params
* email | username : user name or user email
* password

**QUERY**

Json in body:
``` json
{
	"email": "test1@test.com",
	"password": "111-111-111"
}
```

**RESPONSE**

**Status**: 200 Ok 
``` json
{
    "message": "User loged: User_1",
    "user": {
        "id": 2,
        "user_name": "User_1",
        "name": "User1",
        "surname": "Surname_1",
        "email": "test1@test.com",
        "password": "$2a$10$meUs0XCDHGIstM7K25qOx.rgXD2JwIscp6n/Hl5LgtGAt.kQ6P3LW",
        "createdAt": "2020-09-07T16:50:03.000Z",
        "updatedAt": "2020-09-07T16:50:03.000Z"
    },
    "jwToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTk5NDk3NDQxLCJleHAiOjE1OTk2NzAyNDF9.UYtPDxHlxvtnzcImjDH2IREdsBQdl7eBnrnhJvxrMIE"
}
```
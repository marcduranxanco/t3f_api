# TAPE TO THE FUTURE

### Database documentation


## Database diagram

![Diagram database](https://github.com/marcduranxanco/t3f_api/blob/master/documentation/img/diagram_database.PNG?raw=true)

## Commands

# Models 

- Database generation

```
sequelize model:generate --name cards --attributes name:string,id_user:integer
sequelize model:generate --name cards_media --attributes id_card:integer,id_media:integer
sequelize model:generate --name img --attributes path:string
sequelize model:generate --name users --attributes user_name:string,name:string,surname:string,email:string,password:string
sequelize model:generate --name media --attributes id_tmdb:integer,id_custom_media:integer,id_platform:integer
sequelize model:generate --name platforms --attributes name:string,url_platform:string,id_img:integer
sequelize model:generate --name token --attributes token:string,id_user:integer
```

Models update at each model

- Migrate
```
sequelize db:migrate
```

- Reverting migrations
```
sequelize db:migrate:undo
sequelize db:migrate:undo:all
```
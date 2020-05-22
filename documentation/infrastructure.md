# TAPE TO THE FUTURE

### Project infraestructure documentation


## About the infraestructure

The project is created using Seuqalize.

- Added folder: Documentation (Folder to store the documentation).
- Database: Mysql

## Commands

- Project creation.

```
express t3f_api --no-view
npm install
```

- Sequelize-cli is globally installed.

```
npm install sequelize-cli -g
```

- Sequelize-cli, Sequelize and mysql instalation.

```
npm install --save sequelize
npm install --save mysql2
sequelize init #Init the sequelize structure
```
- Install Dotenv.
```
npm install dotenv --save
```

#### Iitial folder structure

```
t3f_api/
├── bin/
├── controllers/
├── database/ #Database folders
│   ├── config/
│   ├── migrations/
│   └── seeders/
├── documentation/ #Markdown documentations files
├── node_modules/
├── public/
│   ├── images/
│   ├── javascripts/
│   ├── stylesheets/
│   └── index.html
├── routes/
└── app.js, ...
```

#### Git Flow Branches
- - Masrter
- - Develop
- - Feature branches (**feature/name-feature**)
- - Feature branches (**hotfix/name-hotfix**)

## Changelog
- 21-05-2020 Initial infraestructure creation

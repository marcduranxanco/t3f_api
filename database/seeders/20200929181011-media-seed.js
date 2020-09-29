'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Media', [{
      "title": "Lovers & Leavers (Kuutamolla)",
      "description": "Nondisplaced segmental fracture of shaft of unsp fibula",
      "year": 1999,
      "genere": "Drama|Romance",
      "id_tmdb": 74,
      "id_img": 4,
      "id_user": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "To Be Twenty",
      "description": "Nondisp fx of ant column of r acetab, subs for fx w nonunion",
      "year": 2010,
      "genere": "Comedy|Drama|Horror",
      "id_tmdb": 51,
      "id_img": 6,
      "id_user": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "One Nite In Mongkok (Wong gok hak yau)",
      "description": "Sltr-haris Type II physeal fx phalanx of unsp toe, 7thB",
      "year": 2003,
      "genere": "Action|Crime|Drama",
      "id_tmdb": 6,
      "id_img": 4,
      "id_user": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Mystery on Monster Island",
      "description": "Bipolar disord, crnt episode manic w/o psych features, mod",
      "year": 2006,
      "genere": "Adventure|Comedy",
      "id_tmdb": 41,
      "id_img": 1,
      "id_user": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Hellhounds on My Trail",
      "description": "Contracture of muscle, left lower leg",
      "year": 1995,
      "genere": "Documentary",
      "id_tmdb": 65,
      "id_img": 3,
      "id_user": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Hotel",
      "description": "Occ of anml-drn veh inj in trnsp acc w miltry vehicle, sqla",
      "year": 2003,
      "genere": "Comedy",
      "id_tmdb": 21,
      "id_img": 5,
      "id_user": 2,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Easy Street",
      "description": "Pneumonitis due to solids and liquids",
      "year": 2008,
      "genere": "Comedy",
      "id_tmdb": 24,
      "id_img": 5,
      "id_user": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Last Summer",
      "description": "Disp fx of med condyle of unsp tibia, 7thF",
      "year": 2008,
      "genere": "Drama",
      "id_tmdb": 30,
      "id_img": 4,
      "id_user": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Palais royal !",
      "description": "Sltr-haris Type I physeal fx lower end of r femur, sequela",
      "year": 2009,
      "genere": "Comedy",
      "id_tmdb": 52,
      "id_img": 2,
      "id_user": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "title": "Next Step, The",
      "description": "Unsp inj musc/tend posterior grp at low leg level, left leg",
      "year": 1995,
      "genere": "Drama",
      "id_tmdb": 14,
      "id_img": 5,
      "id_user": 3,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

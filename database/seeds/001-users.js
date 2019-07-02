const brcypt = require('bcryptjs')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "username": 'dony',
          "password": brcypt.hashSync('pass', 10),
          "email": 'dony@gmail.com',
          "phoneNumber": "1111111111",
          "profilePic": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "badminton",
          "distance": '',
          "address": "Boise,ID"
        },

        {
          "username": 'fred',
          "password": brcypt.hashSync('pass', 10),
          "email": 'fred@gmail.com',
          "phoneNumber": "2222222222",
          "profilePic": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "singing",
          "distance": '',
          "address": "Middleton,ID"
        },

        {
          "username": 'dory',
          "password": brcypt.hashSync('pass', 10),
          "email": 'dory@gmail.com',
          "phoneNumber": "+12086964232",
          "profilePic": "https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "badminton",
          "distance": '',
          "address": "Nampa,ID"
        },

        {
          "username": 'elise',
          "password": brcypt.hashSync('pass', 10),
          "email": 'elise@gmail.com',
          "phoneNumber": "4444444444",
          "profilePic": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "singing",
          "distance": '',
          "address": "Eagle,ID"
        },

        {
          "username": 'paris',
          "password": brcypt.hashSync('pass', 10),
          "email": 'paris@gmail.com',
          "phoneNumber": "5555555555",
          "profilePic": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "football",
          "distance": '',
          "address": "Mountain Home,ID"
        },

        {
          "username": 'doris',
          "password": brcypt.hashSync('pass', 10),
          "email": 'doris@gmail.com',
          "phoneNumber": "1113334444",
          "profilePic": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "football",
          "distance": '',
          "address": "Twin Falls,ID "
        },

        {
          "username": 'cory',
          "password": brcypt.hashSync('pass', 10),
          "email": 'cory@gmail.com',
          "phoneNumber": "2224443333",
          "profilePic": "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          "aboutMe": "I am a 24 year old recently moved to california.Looking to connect with people of the same interests",
          "interests": "badminton",
          "distance": '',
          "address": "Pocatello,ID"
        },

      ]);
    });
};

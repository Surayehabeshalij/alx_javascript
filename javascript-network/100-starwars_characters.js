#!/usr/bin/node
const request = require('request');

function printMovieCharacters(movieId) {
  const url = `https://swapi.dev/api/films/${movieId}/`;

  request(url, { json: true }, (error, response, body) => {
    if (response.statusCode === 200) {
      const characters = body.characters;
      characters.forEach((characterUrl) => {
        request(characterUrl, { json: true }, (error, response, body) => {
          if (response.statusCode === 200) {
            const characterName = body.name;
            console.log(characterName);
          } else {
            console.log(`Failed to fetch character data for URL: ${characterUrl}`);
          }
        });
      });
    } else {
      console.log(`Failed to fetch movie data for ID: ${movieId}`);
    }
  });
}
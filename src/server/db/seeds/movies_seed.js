exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert({
        name: 'Bohemian Rhapsody',
        genre: 'Drama',
        director: 'Brian Singer',
        rating: 4,
        details: 'Bohemian Rhapsody: La Historia de Freddie Mercury.',
        image: 'bohemianR.webp'
      });
    })
    .then(() => {
      return knex('movies').insert({
        name: 'Mission: Impossible - Fallout',
        genre: 'Action',
        director: 'Christopher McQuarrie',
        rating: 3,
        details: 'On a dangerous assignment to recover stolen plutonium.',
        image: 'missionI.webp'
      });
    })
    .then(() => {
        return knex('movies').insert({
          name: 'Ready Player One',
          genre: 'Action',
          director: 'Steven Spielberg',
          rating: 4,
          details: 'From filmmaker Steven Spielberg comes the science fiction action adventure “Ready Player One.',
          image: 'readyPlayerOne.webp'
        });
      }
    ).then(() => {
      return knex('movies').insert({
        name: 'Fast & Furious 8',
        genre: 'Action',
        director: 'F. Gary Gray',
        rating: 3,
        details: 'Vin Diesel, Dwayne Johnson y Michelle Rodriguez encabezan el reparto de la nueva entrega.',
        image: 'fast8.webp'
      });
    });
};

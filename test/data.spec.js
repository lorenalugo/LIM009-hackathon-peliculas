global.window = global;
require('../src/data.js');

const data = [
  {	imdbID: 'tt0848228',	Title: 'The Avengers',	Type: 'movie', Year: '2012', imdbRating: '8.1',	
    Runtime: '143 min', Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
    Genre: 'Action, Adventure, Sci-Fi',
    Plot: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
		
  {	imdbID: 'tt3778644',	Title: 'Solo: A Star Wars Story',	Type: 'movie', Year: '2018', imdbRating: '7.0',	
    Runtime: '135 min', Actors: 'Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Plot: 'During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg'},
		
  {	imdbID: 'tt0848228',	Title: 'The Avengers',	Type: 'movie', Year: '2012', imdbRating: '8.1',	
    Runtime: '143 min', Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
    Genre: 'Action, Adventure, Sci-Fi',
    Plot: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}
];

describe('movie', () => {
  test('deberia ser un objeto ', () => {
    expect(typeof movie).toBe('object');
  });
	
  describe('getSearchData', ()=>{
    test('deberia ser una funcion', ()=>{
      expect(typeof movie.getSearchData).toBe('function');
    });
  });
	
  describe('getId', ()=>{
    test('deberia ser una funcion', ()=>{
      expect(typeof movie.getId).toBe('function');
    });
  });
	
  describe('getItemDetails', ()=>{
    test('deberia ser una funcion', ()=>{
      expect(typeof movie.getItemDetails).toBe('function');
    });
  });
	
  describe('sortData', ()=>{
    test('deberia ser una funcion', ()=>{
      expect(typeof movie.sortData).toBe('function');
    });
  });
});
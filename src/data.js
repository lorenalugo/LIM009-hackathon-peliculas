const getSearchData = (data) => {
	const dataMovie = data.map(data => {
    return { Title: data.Title, Poster: data.Poster, Year: data.Year };
	});
	return dataMovie;
};

const getId = (data) => {
 const dataMovie = data.map(data => data.imdbID);
 return dataMovie;
};

const getItemDetails = (data) => {
	const details = {Title: data.Title, Year: data.Year, Runtime: data.Runtime, Genre: data.Genre, Actors: data.Actors, Plot: data.Plot, Poster: data.Poster, imdbRating: data.imdbRating};
	return details;
}

const sortData = (data) => {
 const dataOrder = [...data];
 let orderedMovie = dataOrder.sort((eleA, eleB) => eleB.imdbRating - eleA.imdbRating);
 return orderedMovie;
};

window.movie = {
  getSearchData,
  getId,
  getItemDetails,
  sortData
};
